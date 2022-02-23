const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Address = mongoose.model('address', AddressSchema);

module.exports = Address;
