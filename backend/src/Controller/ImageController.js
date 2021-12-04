const connection = require('../Database/Connection');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs');

module.exports = {

    async create(req, res){
        let conn;

        try{
            conn = connection.getPool().getConnection();

            let count = 0;

            req.files.forEach(async (element, i) => {
                
                await sharp(element.path)
                            .resize({
                                width: 800,
                                height: 800,
                                fit: sharp.fit.inside,
                                withoutEnlargement: false
                            })
                            .toFile(element.path.split('.')[0] + '.webp')
                            .then(async () => {
                    fs.unlink(element.path, async (err) => {
                        if(err)
                        {
                            return res.status(500).send("CANNOT_DELETE_IMAGE");
                        }  
                        else{
                            var filepath = path.resolve(element.path.split('.')[0] + '.webp');
                            var rmPortion = path.resolve("public/");
                            var immoID = req.body.idField;

                            if(filepath && typeof filepath === "string"){
                                (await conn).query("INSERT INTO tb_image (link, id_immobile) values (?, ?)", [filepath.replace(rmPortion, ''), immoID])
                                .then(() => {
                                    count += 1;

                                    if(count === req.files.length){
                                        return res.json({});
                                    }
                                })
                                .catch(err => {
                                    throw err;
                                })
                            }
                        }
                    });
                });
            });
        }
        catch(err){
            return res.status(400);
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