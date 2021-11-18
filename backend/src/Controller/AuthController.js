const { getPool } = require("../Database/Connection");
const jwt = require('jsonwebtoken');

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
    }

}