var express = require('express');
var router = express.Router();

let productController = require('../controllers/product');

router.get('/list', productController.productList);
router.post('/add', productController.addProduct);
router.put('/edit', productController.updateProduct);
router.delete('/delete', productController.deleteProduct);

module.exports = router;