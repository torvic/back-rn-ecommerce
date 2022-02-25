/* eslint-disable no-underscore-dangle */
const OrderItem = require('./orderItem.model');

function updateOrderItem(id, info) {
  return OrderItem.findByIdAndUpdate(id, info, { new: true });
}

function deleteOrderItem(id) {
  return OrderItem.findByIdAndDelete(id);
}

function getAllOrderItemByOrderId(orderId) {
  const orderItems = OrderItem.find({ order: orderId }).populate('product').populate('order');
  return orderItems;
}

async function addNewOrderItem(orderItem) {
  const orderItemCreated = await OrderItem.create(orderItem);
  console.log('order item created', orderItemCreated);
  return {
    quantity: orderItemCreated.quantity,
    option: orderItemCreated.option,
    product: orderItemCreated.product,
    order: orderItemCreated.order._id,
    _id: orderItemCreated._id,
    createdAt: orderItemCreated.createdAt,
    updatedAt: orderItemCreated.updatedAt,
  };
}

module.exports = {
  getAllOrderItemByOrderId,
  addNewOrderItem,
  updateOrderItem,
  deleteOrderItem,
};
