const PaginationService = require('./PaginationService');
const User = require('../models/User');
const UserDto = require('../dtos/UserDto');

class UserService {
  async getUsers(userId, page, limit, query) {
    const arrQuery = query.split(' ');

    console.log(arrQuery);

    const options = query ? {
      _id: { $ne: userId },
      $or: [{ firstName: { $in: arrQuery } }, { lastName: { $in: arrQuery } }],
    } : { _id: { $ne: userId } };
    console.log('options ==>', options);

    const userList = await PaginationService.getPaginatedData(User, options, page, limit);
    console.log('userЫList -->', userList);

    return userList;
  }

  async getUser(userId) {
    const user = await User.findById(userId);
    const userDto = new UserDto(user);
    return userDto;
  }
}

module.exports = new UserService();
