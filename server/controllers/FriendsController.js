const FriendsService = require('../services/FriendsService');
const config = require('../config');

class FriendsController {
  async getFriends(req, res, next) {
    try {
      const { userId } = req.user;
      const { page = 1, limit = 5, query = false } = req.query;

      const friendsList = await FriendsService.getFriends(userId, page, limit, query);

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

      res.status(201).send(config.s201friendsUserAdded);
    } catch (e) {
      next(e);
    }
  }

  async sendFriendsRequest(req, res, next) {
    try {
      const { userId } = req.user;
      const { friendId } = req.body;

      await FriendsService.sendFriendsRequest(userId, friendId);

      res.status(200).send(config.s200friendsSendRequest);
    } catch (e) {
      next(e);
    }
  }

  async declineFriendsRequest(req, res, next) {
    try {
      const { userId } = req.user;
      const { friendId } = req.body;

      await FriendsService.declineFriendsRequest(userId, friendId);

      res.status(200).send(config.s200friendsDeclineRequest);
    } catch (e) {
      next(e);
    }
  }

  async removeFriend(req, res, next) {
    try {
      const { userId } = req.user;
      const { friendId } = req.body;

      await FriendsService.removeFriend(userId, friendId);

      res.status(200).send(config.s200friendsUserDeleted);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new FriendsController();
