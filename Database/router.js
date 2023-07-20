const router = require("express").Router();
const controller = require('./controller');

router
    .post('/sendForm', controller.getUser)
    .get('/getAllUsers', controller.getAllUsers)
    .post('/register', controller.registerUser)
    .post('/resetPassword', controller.resetPassword)
    .delete('/deleteUser/:id', controller.deleteUser)
    .put('/updateUser/:id', controller.updateUser)
module.exports = router;