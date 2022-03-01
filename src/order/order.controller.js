/* eslint-disable no-underscore-dangle */
const { updateOrder, getOrCreateOrder } = require('./order.service');

async function updateOrderHandler(_, args, context) {
  const { currentUser } = context;
  const order = await getOrCreateOrder({ user: currentUser, complete: false });
  // make payment - change order to completed
  const info = args.input;
  const newOrder = await updateOrder(order._id, info);
  return newOrder;
}

module.exports = {
  updateOrderHandler,
};
