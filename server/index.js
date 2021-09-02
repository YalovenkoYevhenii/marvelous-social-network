require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');
const friendsRouter = require('./routes/friends');
const userRouter = require('./routes/user');
const ErrorMiddleware = require('./middlewares/ErrorMiddleware');
const AuthMiddleware = require('./middlewares/AuthMiddleware');
const SettingsService = require('./services/SettingsService');

const app = express();

app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL,
}));
/* app.use(cors());
app.options('*', cors()); */
app.use(express.json({ extended: true }));
app.use(express.static('static'));
app.use(fileUpload({}));
app.use(cookieParser());
app.use('/auth', authRouter);
app.use('/posts', postsRouter);
app.use('/friends', friendsRouter);
app.post('/settings', AuthMiddleware, SettingsService.changeProperties);
app.use('/', userRouter);
app.use(ErrorMiddleware);

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log('I am alive', __dirname));
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}

start();
