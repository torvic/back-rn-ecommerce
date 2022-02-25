const Product = require('./product.model');

function getAllProducts() {
  return Product.find();
}

function addNewProduct(product) {
  return Product.create(product);
}

function updateProduct(id, info) {
  return Product.findByIdAndUpdate(id, info, { new: true });
}

function deleteProduct(id) {
  return Product.findByIdAndDelete(id);
}

module.exports = {
  getAllProducts,
  addNewProduct,
  updateProduct,
  deleteProduct,
};
