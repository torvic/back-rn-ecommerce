const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

UserSchema.pre('save', async function (next) {
  try {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } catch (err) {
    next(err);
  }
});

UserSchema.statics.authenticate = async (email, password) => {
  const user = await User.findOne({
    email,
  });
  if (user) {
    const result = await bcrypt.compare(password, user.password);
    return result === true ? user : null;
  }

  return null;
};

const User = mongoose.model('user', UserSchema);
module.exports = User;
