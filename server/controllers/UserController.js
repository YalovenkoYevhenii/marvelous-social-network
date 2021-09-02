const UserService = require('../services/UserService');

class UserController {
  async getUsers(req, res, next) {
    try {
      const { userId } = req.user;
      const users = await UserService.getUsers(userId);
      return res.status(200).json(users);
    } catch (e) {
      next(e);
    }
  }

  async getUser(req, res, next) {
    try {
      const userId = req.params.userId === 'current' ? req.user.userId : req.params.userId;
      const user = await UserService.getUser(userId);
      return res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
