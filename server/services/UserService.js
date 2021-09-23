const PaginationService = require('./PaginationService');
const User = require('../models/User');
const UserDto = require('../dtos/UserDto');

class UserService {
  async getUsers(userId, page, limit, query) {
    const arrQuery = query.split(' ');
    const first = arrQuery[0];
    const second = arrQuery[1] || '';

    const options = query ? {
      _id: { $ne: userId },
      $expr: {
        $regexMatch: {
          input: { $concat: ['$firstName', ' ', '$lastName'] },
          regex: `(${first}|${second})`,
          options: 'i',
        },
      },
    } : { _id: { $ne: userId } };
    console.log('options ==>', options);

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
