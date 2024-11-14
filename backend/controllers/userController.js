// const User = require('../models/User');

// exports.getProfile = (req, res) => {
//   res.json(req.user);
// };

// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// backend/controllers/userController.js
exports.getProfile = (req, res) => {
  res.json(req.user);
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
