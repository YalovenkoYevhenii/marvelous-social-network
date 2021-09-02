const { Router } = require('express');

const FriendsController = require('../controllers/FriendsController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const friendsRouter = Router();

friendsRouter.patch('/add_friend', AuthMiddleware, FriendsController.addFriend);
friendsRouter.patch('/remove_friend', AuthMiddleware, FriendsController.removeFriend);
friendsRouter.get('/', AuthMiddleware, FriendsController.getFriends);

module.exports = friendsRouter;
