/* eslint-disable no-underscore-dangle */
const Order = require('./order.model');

function updateOrder(id, info) {
  return Order.findByIdAndUpdate(id, info, { new: true });
}

async function getOrCreateOrder(order) {
  const orderFind = await Order.find(order);

  if (!orderFind.length) {
    const orderCreate = await Order.create(order);
    return {
      complete: orderCreate.complete,
      user: orderCreate.user._id,
      _id: orderCreate._id,
      createdAt: orderCreate.createdAt,
      updatedAt: orderCreate.updatedAt,
    };
  }

  return orderFind[0];
}

module.exports = {
  getOrCreateOrder,
  updateOrder,
};
