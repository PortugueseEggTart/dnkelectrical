const Order = require('../models/Order');

// Create a new order
exports.createOrder = async (req, res) => {
  const { products, totalAmount } = req.body;
  const newOrder = new Order({
    user: req.user._id,
    products,
    totalAmount
  });
  await newOrder.save();
  res.json(newOrder);
};

// Get orders for a user
exports.getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};