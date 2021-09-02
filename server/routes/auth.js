require('dotenv').config();
const { Router } = require('express');
const { check } = require('express-validator');

const AuthController = require('../controllers/AuthController');

const authRouter = Router();

authRouter.post('/sign_up',
  [
    check('email', 'Incorrect email').isEmail().normalizeEmail(),
    check('password', 'Incorrect password').trim().isLength({ min: 8, max: 24 }),
  ],
  AuthController.signUp);

authRouter.post('/sign_in',
  [
    check('email', 'Invalid email entry').isEmail().normalizeEmail(),
    check('password', 'Invalid password entry').exists().trim(),
  ],
  AuthController.signIn);

authRouter.delete('/sign_out', AuthController.signOut);
authRouter.get('/activate/:link', AuthController.activate);
authRouter.get('/refresh', AuthController.refresh);

module.exports = authRouter;
