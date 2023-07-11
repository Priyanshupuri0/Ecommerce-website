const router = require("express").Router();
const controller = require('./controller');

router
    .post('/sendForm', controller.getUser)
    // .get('/', controller.getUser)

module.exports = router;