const express = require('express');
const immobileController = require('./src/Controller/ImmobileController');
const userController = require('./src/Controller/UserController');
const imageController = require('./src/Controller/ImageController');
const authController = require('./src/Controller/AuthController');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
        const immoPath = path.resolve(__dirname + "/public/upload/" + req.body.idField);

        fs.access(immoPath, (err) => {
            if(err){
                fs.mkdir(immoPath, (err) => {
                    if(err)
                        console.log(err);
                    else
                        cb(null, "./public/upload/"+req.body.idField);
                });
            }
            else{
                cb(null, "./public/upload/"+req.body.idField);
            }
        })
    },
    filename: (req, file, cb) => {
        cb(null, req.body.idField + '_' + Date.now() + "." + file.mimetype.split("/")[1]);
    }
});

const upload = multer({ storage: storage });

/* Rotas para CRUD dos imóveis */
router.post('/immobile', immobileController.create);
router.get('/immobile', immobileController.read);
router.put('/immobile', immobileController.update);
router.delete('/immobile', immobileController.delete);

/* Rotas para CRUD dos usuários */
router.post('/user', userController.create);
router.get('/user', userController.read);
router.put('/user', userController.update);
router.delete('/user', userController.delete);

/* Rotas para controle das imagens */
router.post('/image', upload.array('images'), imageController.create);
router.get('/image', imageController.read);
router.delete('/image', imageController.delete);

/* Rotas para controle de autenticação */
router.post('/auth', authController.create);
router.get('/auth', authController.validate);

module.exports = router;