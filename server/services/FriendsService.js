const User = require('../models/User');
const PaginationService = require('./PaginationService');

class FriendsService {
  async getFriends(userId, page, limit, query) {
    const { friends } = await User.findById(userId);
    const options = query ? {
      _id: { $in: friends },
      $or: [{ firstName: { $search: query } }, { lastName: { $search: query } }],
    } : {
      _id: { $in: friends },
    };

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

  async sendFriendsRequest(userId, friendId) {
    const user = await User.findById(userId);
    user.outgoingFriendsRequests.push(friendId);

    const friend = await User.findById(friendId);
    friend.incomingFriendsRequests.push(userId);

    await user.save();
    await friend.save();
  }

  async declineFriendsRequest(userId, friendId) {
    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

    const doCancelMyRequest = user.outgoingFriendsRequests.find(id => id === friendId);
    if (doCancelMyRequest) {
      user.outgoingFriendsRequests.pull(friendId);
      friend.incomingFriendsRequests.pull(userId);
    }
    if (!doCancelMyRequest) {
      user.incomingFriendsRequests.pull(friendId);
      friend.outgoingFriendsRequests.pull(userId);
    }

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
