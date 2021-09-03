const User = require('../models/User');
const PaginationService = require('./PaginationService');

class FriendsService {
  async getFriends(userId, page, limit) {
    const { friends } = await User.findById(userId);
    const options = { _id: { $in: friends } };

    const friendsList = await PaginationService
      .getPaginatedData(User, options, page, limit);
    return friendsList;
  }

  async addFriend(userId, friendId) {
    const user = await User.findById(userId);
    user.friends.push(friendId);

    const friend = await User.findById(friendId);
    friend.friends.push(userId);

    await user.save();
    await friend.save();
  }

  async removeFriend(userId, friendId) {
    const user = await User.findById(userId);
    user.friends.pull(friendId);

    const friend = await User.findById(friendId);
    friend.friends.pull(userId);

    await user.save();
    await friend.save();
  }
}

module.exports = new FriendsService();
