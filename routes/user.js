


let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');

router.post('/register', usersController.register);

module.exports = router;