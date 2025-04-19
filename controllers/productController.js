const pool = require('../config/database');

const productController = {
  // Search products
  searchProducts: async (req, res) => {
    try {
      const { query } = req.query;
      const [rows] = await pool.query(
        `SELECT * FROM quotes_products 
         WHERE name LIKE ? OR description LIKE ?`,
        [`%${query}%`, `%${query}%`]
      );
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get by category
  getByCategory: async (req, res) => {
    try {
      const { category } = req.params;
      const [rows] = await pool.query(
        'SELECT * FROM quotes_products WHERE categories LIKE ?',
        [`%${category}%`]
      );
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get by ID
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query(
        'SELECT * FROM quotes_products WHERE product_id = ?',
        [id]
      );
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = productController;