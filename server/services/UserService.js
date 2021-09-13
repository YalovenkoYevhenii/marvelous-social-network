const PaginationService = require('./PaginationService');
const User = require('../models/User');
const UserDto = require('../dtos/UserDto');

class UserService {
  async getUsers(userId, page, limit, query) {
    const options = query ? {
      _id: { $ne: userId },
      $or: [{ firstName: { $search: query } }, { lastName: { $search: query } }],
    } : { _id: { $ne: userId } };

    const userList = await PaginationService.getPaginatedData(User, options, page, limit);

    return userList;
  }

  async getUser(userId) {
    const user = await User.findById(userId);
    const userDto = new UserDto(user);
    return userDto;
  }
}

module.exports = new UserService();
