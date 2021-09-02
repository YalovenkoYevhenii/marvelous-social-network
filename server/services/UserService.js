const User = require('../models/User');
const UserDto = require('../dtos/UserDto');

class UserService {
  async getUsers(userId) {
    const users = await User.find({ _id: { $ne: userId } });
    return users.map(user => new UserDto(user));
  }

  async getUser(userId) {
    const user = await User.findById(userId);
    const userDto = new UserDto(user);
    return userDto;
  }
}

module.exports = new UserService();
