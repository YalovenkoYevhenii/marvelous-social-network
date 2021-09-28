require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const generalRouter = require('./routes');

const ErrorMiddleware = require('./middlewares/ErrorMiddleware');

const app = express();

app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL,
}));
app.use(express.json({ extended: true }));
app.use(express.static('static'));
app.use(fileUpload());
app.use(cookieParser());

generalRouter(app);

app.use(ErrorMiddleware);

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => console.log('I am alive at ', __dirname));
  } catch (err) {
    process.exit(1);
  }
}

start();
