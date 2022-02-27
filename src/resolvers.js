const { addNewAddressHandler } = require('./address/address.controller');
const {
  addNewOrderItemHandler,
  getAllOrderItemNotCompleteHandler,
  updateOrderItemHandler,
  deleteOrderItemHandler,
} = require('./orderItem/orderItem.controller');
const {
  getAllProductsHandler,
  addNewProductHandler,
  updateProductHandler,
  deleteProductHandler,
  getProductByIdHandler,
} = require('./product/product.controller');
const { createAccountHandler, logInUserHandler } = require('./user/user.controller');

const resolvers = {
  Query: {
    allProducts: getAllProductsHandler,
    getAllOrderItemNotComplete: getAllOrderItemNotCompleteHandler,
    getProductById: getProductByIdHandler,
  },
  Mutation: {
    createAccount: createAccountHandler,
    logInUser: logInUserHandler,
    addProduct: addNewProductHandler,
    updateProduct: updateProductHandler,
    deleteProduct: deleteProductHandler,
    addNewOrderItem: addNewOrderItemHandler,
    updateOrderItem: updateOrderItemHandler,
    deleteOrderItem: deleteOrderItemHandler,
    addNewAddress: addNewAddressHandler,
  },
};

module.exports = resolvers;
