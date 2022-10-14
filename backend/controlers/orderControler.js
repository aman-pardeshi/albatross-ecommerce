import Order from '../models/orderModel.js';
import asyncHandler from 'express-async-handler';

// @Description: Create new order
// @Route : POST /api/orders
// @Access : private
const createNewOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  orderItems.length = 0

  if (Array.isArray(orderItems) && !orderItems.length) {
    return res.status(400).json({
      success: false,
      msg: 'Order items empty',
      data: null
    });
  } 
  
  const order = new Order({
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    user: req.user._id,
  });

  const createdOrder = await order.save();

  return res.status(201).json({
    success: true,
    msg: 'Order found',
    data: createdOrder
  });

});

// @Description: Get order by ID
// @Route : GET /api/orders
// @Access : private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (order) {
    return res.json({
      success: true,
      msg: 'Order found',
      data: order
    });
  }

  return res.status(404).json({
    success: false,
    msg: 'Order not found',
    data: null
  })

});

export { createNewOrder, getOrderById };
