/* eslint-disable no-underscore-dangle */
const { getOrCreateOrder } = require('../order/order.service');
const {
  addNewOrderItem, getAllOrderItemByOrderId, updateOrderItem, deleteOrderItem,
} = require('./orderItem.service');

async function updateOrderItemHandler(_, args) {
  const { id } = args;
  const info = args.input;
  const orderItem = await updateOrderItem(id, info);
  return orderItem;
}

async function deleteOrderItemHandler(_, args) {
  const { id } = args;
  const address = await deleteOrderItem(id);
  return { message: 'Product deleted successfully', address };
}

async function getAllOrderItemNotCompleteHandler(_, args, context) {
  const { currentUser } = context;
  if (!currentUser) {
    throw new Error('user must logged in');
  }
  // get order with complete false
  const order = await getOrCreateOrder({ user: currentUser, complete: false });
  // get orderItem by order Id
  const orderItems = await getAllOrderItemByOrderId(order._id);
  return orderItems;
}

async function addNewOrderItemHandler(_, args, context) {
  const { currentUser } = context;
  if (!currentUser) {
    throw new Error('user must logged in');
  }
  // create the order
  const order = await getOrCreateOrder({ user: currentUser, complete: false });
  // create orderItem
  const orderItem = args.input;
  const newOrderItem = await addNewOrderItem({ ...orderItem, order });
  return newOrderItem;
}

module.exports = {
  getAllOrderItemNotCompleteHandler,
  addNewOrderItemHandler,
  updateOrderItemHandler,
  deleteOrderItemHandler,
};
