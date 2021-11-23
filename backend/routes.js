const express = require('express');
const immobileController = require('./src/Controller/ImmobileController');
const userController = require('./src/Controller/UserController');
const imageController = require('./src/Controller/ImageController');
const authController = require('./src/Controller/AuthController');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/upload")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
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
router.post('/image', upload.single('images'), () => { console.log("foi") });
router.get('/image', imageController.read);
router.delete('/image', imageController.delete);

/* Rotas para controle de autenticação */
router.post('/auth', authController.create);

module.exports = router;