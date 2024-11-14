// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require('../models/User');

// exports.register = async (req, res) => {
//   const { username, fatherName, gender, collegeID, password, role } = req.body;

//   // Check if all required fields are provided
//   if (!username || !fatherName || !gender || !collegeID || !password || !role) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     // Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const user = new User({
//       username,
//       fatherName,
//       gender,
//       collegeID,
//       password: hashedPassword,
//       role,
//     });

//     await user.save();
//     res.status(201).json(user);  // Send back the created user
//   } catch (error) {
//     console.error('Error during registration:', error);
//     res.status(500).json({ message: 'Error during registration' });
//   }
// };

// exports.login = async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username });

//   if (user && await bcrypt.compare(password, user.password)) {
//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } else {
//     res.status(400).json({ message: 'Invalid credentials' });
//   }
// };


// backend/controllers/authController.js
const User = require('../models/User');

// Hardcoded users for now, can be replaced with database queries later.
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' },
  { username: 'user4', password: 'password4' },
  { username: 'user5', password: 'password5' },
];

// POST route for login
exports.loginUser = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
};

// POST route for registration
exports.registerUser = async (req, res) => {
  const { username, password, role, gender, collegeID, fathersName } = req.body;

  try {
    const newUser = new User({ username, password, role, gender, collegeID, fathersName });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
