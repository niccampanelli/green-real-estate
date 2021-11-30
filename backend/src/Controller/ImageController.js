const connection = require('../Database/Connection');
const path = require('path');

module.exports = {
    async create(req, res){
        let conn;

        try{
            conn = connection.getPool().getConnection();

            req.files.forEach(async (element, i) => {
                var filepath = path.resolve(element.path);
                var rmPortion = path.resolve("public/");
                var immoID = req.body.idField;

                if(filepath && typeof filepath === "string"){
                    (await conn).query("INSERT INTO tb_image (link, id_immobile) values (?, ?)", [filepath.replace(rmPortion, ''), immoID]).then(() => {
                        if(i === req.files.length - 1){
                            return res.status(200);
                        }
                    }).catch(err => {
                        throw err;
                    })
                }
            });
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
                    return res.status(200).json(result);
                })
            }
        }
        catch(err){

        }
    },

    async delete(req, res){}
}