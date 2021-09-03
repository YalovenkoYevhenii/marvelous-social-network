const FriendsService = require('../services/FriendsService');

class FriendsController {
  async getFriends(req, res, next) {
    try {
      const { userId } = req.user;
      const { page = 1, limit = 5 } = req.query;
      const friendsList = await FriendsService.getFriends(userId, page, limit);
      res.status(200).json(friendsList);
    } catch (e) {
      next(e);
    }
  }

  async addFriend(req, res, next) {
    try {
      const { userId } = req.user;
      const { friendId } = req.body;

      await FriendsService.addFriend(userId, friendId);
      res.status(201).send('User has been added to friends list');
    } catch (e) {
      next(e);
    }
  }

  async removeFriend(req, res, next) {
    try {
      const { userId } = req.user;
      const { friendId } = req.body;

      await FriendsService.removeFriend(userId, friendId);
      res.status(200).send('User has been removed from friends list');
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new FriendsController();
