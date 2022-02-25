const {
  getAllProducts, addNewProduct, updateProduct, deleteProduct,
} = require('./product.service');

async function addNewProductHandler(parent, args) {
  // validate with context
  const newProduct = args.input;
  const product = await addNewProduct(newProduct);
  return product;
}

async function getAllProductsHandler() {
  const products = await getAllProducts();
  return products;
}

async function updateProductHandler(_, args) {
  const { id } = args.input;
  const info = args.input;
  const product = await updateProduct(id, info);
  return product;
}

async function deleteProductHandler(_, args) {
  const { id } = args;
  const product = await deleteProduct(id);
  return { message: 'Product deleted successfully', product };
}

module.exports = {
  getAllProductsHandler,
  addNewProductHandler,
  updateProductHandler,
  deleteProductHandler,
};
