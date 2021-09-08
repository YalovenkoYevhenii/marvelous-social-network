class SettingsController {
  async changeProperties(req, res, next) {
    try {
      console.log('req.body ===> ', req.body);
      console.log('req.files ===> ', req.files);
      res.status(200).send('server got request');
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new SettingsController();
