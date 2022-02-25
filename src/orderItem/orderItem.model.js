const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  option: {
    type: String,
  },
  product: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'product',
  },
  order: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'order',
  },
}, {
  timestamps: true,
});

const OrderItem = mongoose.model('orderItem', OrderItemSchema);

module.exports = OrderItem;
