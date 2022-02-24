const { getAllProductsHandler } = require('./product/product.controller');
const { createAccountHandler, logInUserHandler } = require('./user/user.controller');

const resolvers = {
  Query: {
    allProducts: getAllProductsHandler,
  },
  Mutation: {
    createAccount: createAccountHandler,
    logInUser: logInUserHandler,
  },
};

module.exports = resolvers;
