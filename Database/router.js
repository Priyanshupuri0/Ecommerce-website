const router = require("express").Router();
const controller = require('./controller');

router
    .post('/sendForm', controller.getUser)
    // .get('/', controller.getUser)
    .post('/register', controller.registerUser)
module.exports = router;