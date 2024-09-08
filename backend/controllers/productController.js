const Product = require('../models/Product');

// Get all products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

// Create a new product (Admin only)
exports.createProduct = async (req, res) => {
  const { name, description, price, category, stock, images } = req.body;
  const newProduct = new Product({ name, description, price, category, stock, images });
  await newProduct.save();
  res.json(newProduct);
};