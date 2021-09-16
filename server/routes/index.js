const authRouter = require('./auth');
const postsRouter = require('./posts');
const friendsRouter = require('./friends');
const userRouter = require('./user');
const settingsRouter = require('./settings');

const generalRouter = (app) => {
  app.use('/auth', authRouter);
  app.use('/posts', postsRouter);
  app.use('/friends', friendsRouter);
  app.use('/settings', settingsRouter);
  app.use('/', userRouter);
};

module.exports = generalRouter;
