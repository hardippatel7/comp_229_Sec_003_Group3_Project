


let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');

router.post('/register', usersController.register);
router.post('/login', usersController.login);

module.exports = router;