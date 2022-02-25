/* eslint-disable no-underscore-dangle */
const { getOrCreateOrder } = require('../order/order.service');
const { addNewAddressToOrder } = require('./address.service');

async function addNewAddressHandler(parent, args, context) {
  const { currentUser } = context;
  const order = await getOrCreateOrder({ user: currentUser, complete: false });
  const newAddress = args.input;
  const address = await addNewAddressToOrder(newAddress, order._id);
  return address;
}

module.exports = {
  addNewAddressHandler,
};
