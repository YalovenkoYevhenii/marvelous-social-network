const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  body: { type: String, required: true },
  time: { type: String, required: true },
});

module.exports = model('Post', PostSchema);
