const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// Create a new product (Admin only)
router.post('/', async (req, res) => {
    const { name, description, price, category, stock, images } = req.body;
    const newProduct = new Product({ name, description, price, category, stock, images });
    await newProduct.save();
    res.json(newProduct);
});

module.exports = router;