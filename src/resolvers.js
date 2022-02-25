const { addNewOrderItemHandler, getAllOrderItemNotCompleteHandler } = require('./orderItem/orderItem.controller');
const {
  getAllProductsHandler, addNewProductHandler, updateProductHandler, deleteProductHandler,
} = require('./product/product.controller');
const { createAccountHandler, logInUserHandler } = require('./user/user.controller');

const resolvers = {
  Query: {
    allProducts: getAllProductsHandler,
    getAllOrderItemNotComplete: getAllOrderItemNotCompleteHandler,
  },
  Mutation: {
    createAccount: createAccountHandler,
    logInUser: logInUserHandler,
    addProduct: addNewProductHandler,
    updateProduct: updateProductHandler,
    deleteProduct: deleteProductHandler,
    addNewOrderItem: addNewOrderItemHandler,
  },
};

module.exports = resolvers;
