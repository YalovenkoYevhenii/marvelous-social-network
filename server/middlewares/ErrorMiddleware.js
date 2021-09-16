const ApiError = require('../exceptions/ApiError');
const config = require('../config');

module.exports = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message, errors: err.errors });
  }

  return res.status(400).json({ message: config.s400defaultErrorMessage });
};
