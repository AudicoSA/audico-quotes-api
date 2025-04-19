const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Import routes
const productRoutes = require('./routes/products');
const quoteRoutes = require('./routes/quotes');
const chatRoutes = require('./routes/chat');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/chat', chatRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server configuration
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

// Start server
app.listen(PORT, HOST, () => {
  console.log(`Server running on port ${PORT}`);  // Note the backticks (`) not quotes
});