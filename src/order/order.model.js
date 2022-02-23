const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  address: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'address',
  },
  complete: {
    type: Boolean,
    required: true,
    default: false,
  },
  transactionId: {
    type: String,
  },
}, {
  timestamps: true,
});

const Order = mongoose.model('order', OrderSchema);

module.exports = Order;
