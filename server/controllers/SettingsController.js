const SettingsService = require('../services/SettingsService');

class SettingsController {
  async changeProperties(req, res, next) {
    try {
      const { userId } = req.user;
      const { body, files = null } = req;

      await SettingsService.changeProperties(userId, body, files?.avatar);

      res.status(200).json({ message: 'Your personal properties were successfully changed' });
    } catch (e) {
      next(e);
    }
  }

  async deleteAvatar(req, res, next) {
    try {
      const { userId } = req.user;
      const { avatar } = req.body;

      await SettingsService.deleteAvatar(userId, avatar);

      res.status(200).json({ message: 'Your avatar has been deleted' });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new SettingsController();
