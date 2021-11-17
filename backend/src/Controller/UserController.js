const { getPool } = require("../Database/Connection");


module.exports = {
    async create(req, res){
        // Variável que salvará a conexão com o banco
        let conn;

        try{
            // Realizando a conexão ao banco de dados
            conn = getPool().getConnection();

            var newUser = req.body;
        }
        catch(err){
            throw err;
        }
    },

    async read(req, res){},

    async update(req, res){},

    async delete(req, res){}
}