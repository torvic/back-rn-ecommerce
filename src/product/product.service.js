const Product = require('./product.model');

function getAllProducts() {
  return Product.find();
}

function getProductById(id) {
  return Product.findById(id);
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
  getProductById,
  addNewProduct,
  updateProduct,
  deleteProduct,
};
