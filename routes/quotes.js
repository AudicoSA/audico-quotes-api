const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

router.post('/create', quoteController.createQuote);
router.put('/update/:id', quoteController.updateQuote);
router.post('/generate-pdf/:id', quoteController.generatePDF);
router.post('/email/:id', quoteController.emailQuote);
router.post('/add-to-cart/:id', quoteController.addToCart);

module.exports = router;