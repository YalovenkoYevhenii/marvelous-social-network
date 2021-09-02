const ApiError = require('../exceptions/ApiError');

module.exports = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ messsage: err.message, errors: err.errors });
  }

  return res.status(400).json({ message: 'Something went wrong' });
};
