var express = require('express');
var router = express.Router();

let questionController = require('../controllers/question');

router.get('/list', questionController.questionList);
router.get('/get/:id', productController.getOneProduct);
router.post('/add', questionController.addQuestion);
router.put('/reply/:id', questionController.reply);

module.exports = router;