const { Schema, model } = require('mongoose');

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
  avatar: { type: String, default: '' },
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  incomingFriendsRequests: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  outgoingFriendsRequests: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  profession: { type: String, required: false, default: '' },
  education: { type: String, required: false, default: '' },
  city: { type: String, required: false, default: '' },
  birthday: { type: String, required: false, default: '' },
});

module.exports = model('User', schema);
