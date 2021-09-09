const User = require('../models/User');

class SettingsController {
  async changeProperties(req, res, next) {
    try {
      const { userId } = req.user;
      
      console.log('req.body', req.body);
      console.log('req.files', req.files);


      res.status(200).send('changed');
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new SettingsController();
