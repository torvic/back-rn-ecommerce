/* eslint-disable no-underscore-dangle */
const { updateOrder } = require('../order/order.service');
const Address = require('./address.model');

function getAllAddresses() {
  return Address.find();
}

function addNewAddress(address) {
  return Address.create(address);
}

function updateAddress(id, info) {
  return Address.findByIdAndUpdate(id, info, { new: true });
}

function deleteAddress(id) {
  return Address.findByIdAndDelete(id);
}

async function addNewAddressToOrder(address, orderId) {
  // add new address
  const newAddress = await addNewAddress(address);
  // update order
  const info = {
    address: newAddress._id,
  };
  await updateOrder(orderId, info);
  // return order
  return newAddress;
}

module.exports = {
  getAllAddresses,
  addNewAddress,
  updateAddress,
  deleteAddress,
  addNewAddressToOrder,
};
