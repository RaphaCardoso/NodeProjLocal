const { Router } = require('express');
const locationController = require('../controller/locationController');

const router = Router();

// Métodos Crud com as rotas
router.get('/', locationController.getHome);
router.get('/contato', locationController.getContact);
router.get('/home', locationController.getHome);
router.get('/location', locationController.getAllLocation);
router.get('/formulario', locationController.getForm);
router.post('/newcontact', locationController.newContact);


module.exports = router;