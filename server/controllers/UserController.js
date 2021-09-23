const UserService = require('../services/UserService');

class UserController {
  async getUsers(req, res, next) {
    try {
      console.log('check if it works');
      const { userId } = req.user;
      const { page = 1, limit = 5, query = false } = req.query;
      const users = await UserService.getUsers(userId, page, limit, query);
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
