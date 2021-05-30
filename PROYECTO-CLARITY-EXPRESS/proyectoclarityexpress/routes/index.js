const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


module.exports = function() {

    /////////////////RUTAS USUARIAS////////////////////////////
    // get user
    router.get('/user', userController.list);
    // post user
    router.post('/user', userController.add);
    // get user by id
    router.get('/user/:id', userController.show);
    // update user by id
    router.put('/user/:id', userController.update);
    //delete user by id
    router.delete('/user/:id', userController.delete);
    return router;

    /////////////////RUTAS Tests////////////////////////////
    
};