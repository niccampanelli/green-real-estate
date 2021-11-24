const { getPool } = require("../Database/Connection");
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");

module.exports = {

    async create(req, res){
        // Variável que salvará a conexão com o banco
        let conn;

        console.log(req.cookies.session);

        try{
            // Realizando a conexão ao banco de dados
            conn = getPool().getConnection();

            // Atribuindo os valores da credencial para suas proprias respectivas variáveis
                                    // Verifica se a credencial existe, se não deixa vazio
            const { email, credential } = req.body ? req.body : {};

            let validation = {
                passed: true,
                reason: "",
                code: 200
            }

            if(email){
                (await conn).query(`SELECT name, email, telephone, telephone2, credential, COUNT(*) FROM tb_user WHERE tb_user.email = '${email}' LIMIT 1`)
                    .then(async result => {

                        const user = {
                            name: result[0].name,
                            email: result[0].email,
                            telephone: result[0].telephone,
                            telephone2: result[0].telephone2,
                            credential: result[0].credential
                        }

                        if(result[0]['COUNT(*)'] === 1){
                            if(result[0].credential){
                                if(result[0].credential === credential){
                                    jwt.sign(user, "greenreal", { expiresIn: "24h" }, (err, token) => {
                                        return res.cookie("session", token, {
                                            maxAge: 86400,
                                            httpOnly: true
                                        }).json(user);

                                    })
                                }
                                else{
                                    return res.status(400).send("WRONG_PASSWORD");
                                }
                            }
                            else{
                                return res.status(400).send("USER_WITHOUT_CREDENTIAL");
                            }
                        }
                        else{
                            return res.status(400).send("USER_NOT_EXIST");
                        }
                    }).catch(err => {
                        throw err;
                    })
            }
            else{
                validation.passed = false;
                validation.reason = "Email ausente.";
                validation.code = 422;
            }
        }
        catch(err){
            return res.json(err);
        }
    },

    // Método para validação do token salvo no cookie
    async validate(req, res){
        // Armazena o token salvo no cookie chamado session
        const token = req.cookies.session;

        // Se não existir nenhum token
        if(!token){
            // Retorna erro 401 de usuário não logado
            return res.status(401).send("USER_NOT_LOGGED");
        }
        // Se existir um token
        else{
            // Verifica se é válido utilizando o segredo
            jwt.verify(token, "greenreal", (err) => {
                // Se ocorrer um erro, o token é inválido. Retorna um erro 401 de token inválido
                if(err)
                    return res.status(401).send("INVALID_TOKEN");
                // Se não, retorna um status 200 informando que o token é válido
                else
                    return res.status(200).send(true);
            })
        }
    }

}