const express = require('express')
const router = express.Router()

const cityController = require('../controllers/cities.controllers');
const userController = require('../controllers/users.controllers');
const sedeController = require('../controllers/sedes.controllers');
const loginController = require('../controllers/login.controllers');
var authMiddleware = require('../middleware/auth');



//Auth

// Define Login
router.post('/login', loginController.login);


// Define API Cities
router.get('/cities', authMiddleware.checkJwt, cityController.findAll);
router.post('/cities', [authMiddleware.checkJwt, authMiddleware.checkAdminRole], cityController.create);
router.get('/cities/:id', cityController.finById);

// Define API Users
router.get('/users', userController.findAll);
router.post('/users', userController.create);
router.get('/users/:id', userController.finById);

// Define API Sedes
router.get('/sedes', sedeController.findAll);
router.post('/sedes', [authMiddleware.checkJwt, authMiddleware.checkAdminRole], sedeController.create);
router.get('/sedes/:id', sedeController.finById);
router.get('/sedes/:id/users', [authMiddleware.checkJwt, authMiddleware.checkAdminRole], sedeController.findUsers);


module.exports = router