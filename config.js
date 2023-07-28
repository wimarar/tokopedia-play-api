// config.js
const dotenv = require('dotenv');

dotenv.config();

const config = {
  port: process.env.PORT,
  mongoString: process.env.MONGODB_URI,
};

module.exports = config;
