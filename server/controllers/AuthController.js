const { validationResult } = require('express-validator');

const config = require('../config');
const AuthService = require('../services/AuthService');
const ApiError = require('../exceptions/ApiError');

class UserController {
  async signUp(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest(config.s400invalidEntriesSignUp, errors.array()));
      }

      const {
        firstName, lastName, email, password,
      } = req.body;

      const userData = await AuthService.signUp(firstName, lastName, email, password);
      res.cookie('refreshToken', userData.refreshToken, config.refreshTokenCookieConfig);
      return res.status(201).json({ user: userData.user, accessToken: userData.accessToken });
    } catch (e) {
      next(e);
    }
  }

  async signIn(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest(config.s400invalidEntriesSignIn, errors.array()));
      }

      const { email, password } = req.body;
      const userData = await AuthService.signIn(email, password);

      res.cookie('refreshToken', userData.refreshToken, config.refreshTokenCookieConfig);
      return res.status(201).json({ user: userData.user, accessToken: userData.accessToken });
    } catch (e) {
      next(e);
    }
  }

  async signOut(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await AuthService.signOut(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await AuthService.activate(activationLink);

      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;

      const userData = await AuthService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, config.refreshTokenCookieConfig);
      return res.status(201).json({ user: userData.user, accessToken: userData.accessToken });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
