const { Router } = require('express');

const UserController = require('../controllers/UserController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const userRouter = Router();

userRouter.get('/users', AuthMiddleware, UserController.getUsers);
userRouter.get('/:userId', AuthMiddleware, UserController.getUser);

module.exports = userRouter;
