const ApiError = require('../exceptions/ApiError');
const TokenService = require('../services/TokenService');

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) next(ApiError.UnautorizedError());

    const accessToken = authHeader.split(' ')[1];
    if (!accessToken) next(ApiError.UnautorizedError());

    const userData = TokenService.validateAccessToken(accessToken);
    if (!userData) next(ApiError.UnautorizedError());
    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.UnautorizedError());
  }
};
