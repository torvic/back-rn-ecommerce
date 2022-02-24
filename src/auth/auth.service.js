const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config');

// const SECRET = 'MAK3T1TR3AL!**';
const { jwtsecret } = config;

/**
  * Validate JWT
  * @param {String} token
  * @returns
  */
async function validateJwt(token) {
  try {
    const payload = await jwt.verify(token, jwtsecret);
    return payload;
  } catch (error) {
    throw new Error(error);
  }
}

/**
  * Returns a jwt token signed by the app secret
  * @param {String} id
  * @returns payload
  */
function signToken(id) {
  return jwt.sign({ id }, jwtsecret, {
    expiresIn: 60 * 60 * 24,
  });
}

function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

module.exports = {
  validateJwt,
  signToken,
  comparePassword,
};
