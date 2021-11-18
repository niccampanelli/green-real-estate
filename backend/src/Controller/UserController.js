const { getPool } = require("../Database/Connection");


module.exports = {
    async create(req, res){
        // Variável que salvará a conexão com o banco
        let conn;

        try{
            // Realizando a conexão ao banco de dados
            conn = getPool().getConnection();

            // Atribuindo os valores de user para suas proprias respectivas variáveis
                                                        // Verifica se o "user" existe, se não deixa vazio
            const { name, email, tel, tel2, credential } = req.body ? req.body : {};

            // Se não tiver o nome OU se tiver o nome e o comprimento for menor que 6 OU se tiver o nome e o nome contiver numeros
            if(!name || (name && name.toString().length < 6) || (name && name.toString().search(/[0-9]/) !== -1)){
                return res.status(400).send("Nome e sobrenome inválidos ou inexistentes. O nome deve conter mais que 5 caracteres e não pode conter números.");
            }
            // Se não tiver o email OU se tiver o email e o comprimento for menor que 9 OU se tiver o email e não tiver um @ OU se tiver o email e não tiver um ponto
            else if(!email || (email && email.toString().length < 9) || (email && !email.toString().includes("@", 0)) || (email && !email.toString().includes(".", 0))){
                return res.status(400).send("Endereço de email inválido ou inexistente. O email deve conter '@' e '.' e deve possuir mais que 8 caracteres.");
            }
            // Se não tiver o telefone OU se tiver o telefone e o comprimento for menor que 10 OU se tiver o telefone e não for só numeros
            else if(!tel || (tel && tel.toString().length < 10) || (tel && !tel.toString().match(/^[0-9]+$/))){
                return res.status(400).send("Telefone principal inválido ou inexistente. O telefone deve conter mais de 9 dígitos e conter apenas números.");
            }
            // Se tiver o telefone2 e o comprimento for menor que 10 OU se tiver o telefone e não for só numeros
            else if((tel2 && tel2.toString().length < 10) || (tel2 && !tel2.toString().match(/^[0-9]+$/))){
                return res.status(400).send("Telefone secundário inválido ou inexistente. O telefone deve conter mais de 9 dígitos e conter apenas números.");
            }
            // Se não tiver a credencial OU se tiver a credencial e não for apenas letras e numeros OU se tiver a credencial e não tiver letras minúsculas OU se tiver a credencial e não tiver letras maiúsculas OU se tiver a credencial e não tiver números
            else if(!credential || (credential && !credential.toString().match(/^[0-9a-zA-Z]+$/)) || (credential && credential.toString().search(/[a-z]/) === -1) || (credential && credential.toString().search(/[A-Z]/) === -1) || (credential && credential.toString().search(/[0-9]/) === -1)){
                return res.status(400).send("Credencial inválida ou inexistente. A credencial deve obrigatoriamente possuir letras maúsculas, letras minúsculas e números.");
            }
            else{
                (await conn).query(`SELECT COUNT(*) FROM tb_user WHERE tb_user.email = '${email}'`)
                    .then(async result => {
                        if(result[0]['COUNT(*)'] === 0){
                            (await conn).query(`INSERT INTO tb_user (name, email, telephone, ${tel2 ? "telephone2," : ''} credential) values (?, ?, ?, ? ${tel2 ? ",?" : ""})`, 
                                tel2 ?
                                    [name.toString(), email.toString(), tel.toString(), tel2.toString(), credential.toString()]
                                    :
                                    [name.toString(), email.toString(), tel.toString(), credential.toString()]
                            ).then(async () => {
                                return res.status(200).send("Cadastro bem-sucedido.");
                            }).catch(err => {
                                throw err;
                            })
                        }
                        else{
                            return res.status(400).send("EMAIL_IN_USE");
                        }
                    }).catch(err => {
                        throw err;
                    })
            }
        }
        catch(err){
            return res.json(err);
        }
    },

    async read(req, res){},

    async update(req, res){},

    async delete(req, res){}    
}