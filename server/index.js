const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;

async function start() {
  try {
    const uri = 'mongodb+srv://yevhenii:eXimia3313163999@clustermsn.bgym6.mongodb.net/MSN?retryWrites=true&w=majority';
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log('I am alive'));
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}

start();
