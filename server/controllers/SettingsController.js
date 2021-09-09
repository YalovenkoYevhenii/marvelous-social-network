class SettingsController {
  async changeProperties(req, res, next) {
    try {
      console.log('req.body', req.body);
      console.log('req.files', req.files);
      console.log('req.headers', req.headers);
      res.status(200).send('it is okay');
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new SettingsController();
