// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['student', 'admin'], required: true },
//   gender: { type: String, enum: ['male', 'female'], required: true},
//   collegeID: { type: String, required: true}, 
//   fathersName: { type: String, required: true}
// });
// // mongoes model
// module.exports = mongoose.model('User', userSchema);

// backend/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'student' },
  gender: String,
  collegeID: String,
  fathersName: String,
});

module.exports = mongoose.model('User', UserSchema);

