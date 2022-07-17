var express = require('express');
var router = express.Router();

let productController = require('../controllers/product');

router.get('/list', productController.productList);
router.post('/add', productController.addProduct);
router.put('/edit/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;