const connection = require('../Database/Connection');
const path = require('path');

module.exports = {
    async create(req, res){
        let conn;

        try{
            conn = connection.getPool().getConnection();
            
            console.log(req.files[0]);

            const filepath = req.files[0].path;

            const immoID = req.body.idField;

            if(filepath && typeof filepath === "string"){
                (await conn).query("INSERT INTO tb_images (link, id_immobile) values (?, ?)", [filepath, immoID]).then(() => {
                    return res.status(200);
                }).catch(err => {
                    throw err;
                })
            }
        }
        catch(err){
            console.error(err);
        }
    },

    async read(req, res){
        let conn;

        try{
            conn = connection.getPool().getConnection();

            const id = req.query.id;

            if(id){
                (await conn).query("SELECT link FROM tb_image WHERE tb_image.id_immobile = (?)", [id]).then(result => {
                    console.log(result);
                })
            }
        }
        catch(err){

        }
    },

    async delete(req, res){}
}