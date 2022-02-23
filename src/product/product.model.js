const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  avgRating: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
  },
}, {
  timestamps: true,
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
