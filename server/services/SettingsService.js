const bcrypt = require('bcrypt');
const User = require('../models/User');
const FileService = require('./FileService');
const ApiError = require('../exceptions/ApiError');
const GeneralService = require('./GeneralService');

class SettingsService {
  async changeProperties(userId, body, avatar) {
    const user = await User.findById(userId);

    const data = GeneralService.filterObjEmptyFields(body);

    if (data.newPassword && data.currentPassword) {
      const isMatch = await bcrypt.compare(data.currentPassword, user.password);
      if (!isMatch) throw ApiError.BadRequest('Invalid email or password');

      const hashedPassword = await bcrypt.hash(body.newPassword, 8);

      data.password = hashedPassword;
      delete data.currentPassword;
      delete data.newPassword;
      delete data.newPasswordCheck;
    }

    if (avatar) {
      data.avatar = FileService.saveFile(avatar);
    }

    await user.update(data);
  }
}

module.exports = new SettingsService();
