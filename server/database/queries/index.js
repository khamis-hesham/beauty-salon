const postMessage = require('./contactus');
const checkUserByEmail = require('./checkUserByEmail');
const getServices = require('./services');
const signupUser = require('./signup');
const bookingsQuery = require('./bookingsQuery');

module.exports = {
  getServices,
  signupUser,
  postMessage,
  checkUserByEmail,
  bookingsQuery,
};
