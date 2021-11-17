const { getPool } = require("../Database/Connection");


module.exports = {
    async create(req, res){
        // Variável que salvará a conexão com o banco
        let conn;

        try{
            // Realizando a conexão ao banco de dados
            conn = getPool().getConnection();

            // Salvando a requisição à variável newUser
            const newUser = req.body;

            // Validando o usuário e salvando o resultado
            const userValidation = validateUser(newUser);
            
            // Se a validação der certo
            if(userValidation.passed){

                //(await conn).query(`INSERT INTO tb_user (name, email, telephone, ${newUser.telephone2 ? "telephone2," : ''} credential) values (?, ?, ?, ? ${newUser.telephone2 ? ",?" : ""})`, 
                    //[newUser.name, newUser.email, newUser.telephone, newUser.telephone2 ? newUser.telephone2 : '', newUser.credential]
                //)
            }
            else{
                return res.status(userValidation.code).message(userValidation.reason);
            }
        }
        catch(err){
            return res.json(err);
        }

        // Método para validar dados recebidos do cadastro do usuário
        function validateUser(user){
            // Atribuindo os valores de user para suas proprias respectivas variáveis
            const {
                name,
                email,
                tel,
                tel2,
                credential
            } = user;

            let validation = {
                passed: true,
                reason: "",
                code: ""
            }

            // Se não tiver o nome OU se tiver o nome e o comprimento for menor que 6 OU se tiver o nome e o nome contiver numeros
            if(!name || (name && name.toString().length < 6) || (name && name.toString().search(/[0-9]/) !== -1)){
                validation.passed = false;
                validation.reason = "Nome e sobrenome inválidos ou inexistentes. O nome deve conter mais que 5 caracteres e não pode conter números.";
                validation.code = "400";
            }
            // Se não tiver o email OU se tiver o email e o comprimento for menor que 9 OU se tiver o email e não tiver um @ OU se tiver o email e não tiver um ponto
            else if(!email || (email && email.toString().length < 9) || (email && !email.toString().includes("@", 0)) || (email && !email.toString().includes(".", 0))){
                validation.passed = false;
                validation.reason = "Endereço de email inválido ou inexistente. O email deve conter '@' e '.' e deve possuir mais que 8 caracteres.";
                validation.code = "400";
            }
            // Se não tiver o telefone OU se tiver o telefone e o comprimento for menor que 10 OU se tiver o telefone e não for só numeros
            else if(!tel || (tel && tel.toString().length < 10) || (tel && !tel.toString().match(/^[0-9]+$/))){
                validation.passed = false;
                validation.reason = "Telefone principal inválido ou inexistente. O telefone deve conter mais de 9 dígitos e conter apenas números.";
                validation.code = "400";
            }
            // Se tiver o telefone2 e o comprimento for menor que 10 OU se tiver o telefone e não for só numeros
            else if((tel2 && tel2.toString().length < 10) || (tel2 && !tel2.toString().match(/^[0-9]+$/))){
                validation.passed = false;
                validation.reason = "Telefone secundário inválido ou inexistente. O telefone deve conter mais de 9 dígitos e conter apenas números.";
                validation.code = "400";
            }
            // Se não tiver a credencial OU se tiver a credencial e não for apenas letras e numeros OU se tiver a credencial e não tiver letras minúsculas OU se tiver a credencial e não tiver letras maiúsculas OU se tiver a credencial e não tiver números
            else if(!credential || (credential && !credential.toString().match(/^[0-9a-zA-Z]+$/)) || (credential && credential.toString().search(/[a-z]/) === -1) || (credential && credential.toString().search(/[A-Z]/) === -1) || (credential && credential.toString().search(/[0-9]/) === -1)){
                validation.passed = false;
                validation.reason = "Credencial inválida ou inexistente. A credencial deve obrigatoriamente possuir letras maúsculas, letras minúsculas e números.";
                validation.code = "400";
            }
            else{
                validation.passed = true;
                validation.reason = "Cadastro bem-sucedido."
                validation.code = "200";
            }

            return validation;
        }
    },

    async read(req, res){},

    async update(req, res){},

    async delete(req, res){}    
}