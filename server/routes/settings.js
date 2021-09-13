const { Router } = require('express');

const AuthMiddleware = require('../middlewares/AuthMiddleware');
const SettingsController = require('../controllers/SettingsController');

const settingsRouter = Router();

settingsRouter.delete('/delete_avatar', AuthMiddleware, SettingsController.deleteAvatar);
settingsRouter.patch('/', AuthMiddleware, SettingsController.changeProperties);

module.exports = settingsRouter;
