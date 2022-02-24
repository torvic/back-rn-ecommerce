const { getAllProducts } = require('./product.service');

async function getAllProductsHandler() {
  const products = await getAllProducts();
  return products;
}

module.exports = {
  getAllProductsHandler,
};
