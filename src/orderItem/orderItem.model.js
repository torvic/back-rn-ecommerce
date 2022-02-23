const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  option: {
    type: String,
  },
  products: [{
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'product',
  }],
}, {
  timestamps: true,
});

const OrderItem = mongoose.model('orderItem', OrderItemSchema);

module.exports = OrderItem;
