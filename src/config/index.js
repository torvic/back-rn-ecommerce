require('dotenv').config();

const config = {
  port: process.env.PORT || 5000,
  jwtsecret: process.env.JWT_SECRET,
  database: process.env.DATABASE_URI,
};

module.exports = config;
