var express = require('express');
var router = express.Router();

let questionController = require('../controllers/question');

//router.post('/list', questionController.questionList);
router.post('/add', questionController.addQuestion);
router.put('/reply/:id', questionController.reply);

module.exports = router;