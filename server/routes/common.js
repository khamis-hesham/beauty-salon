const commonRouter = require('express').Router();
const { signinValidation } = require('../utilis/validation');
const {
  signUp, signin, servicesHandler, getBookingsByDate, contactusHandler,
} = require('../controller');

commonRouter.get('/services', servicesHandler);
commonRouter.post('/contact-us', contactusHandler);
commonRouter.post('/signin', signinValidation, signin);
commonRouter.post('/signup', signUp);
commonRouter.get('/bookings/:date', getBookingsByDate);

module.exports = commonRouter;
