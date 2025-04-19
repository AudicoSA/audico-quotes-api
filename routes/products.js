const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/search', productController.searchProducts);
router.get('/category/:category', productController.getByCategory);
router.get('/:id', productController.getById);

module.exports = router;