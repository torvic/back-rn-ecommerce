const Product = require('./product.model');

function getAllProducts() {
  return Product.find();
}

module.exports = {
  getAllProducts,
};
