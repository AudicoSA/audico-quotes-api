const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/message', chatController.processMessage);
router.post('/start-session', chatController.startSession);

module.exports = router;