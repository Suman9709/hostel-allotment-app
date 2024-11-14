// const express = require('express');
// const router = express.Router();
// const { register, login } = require('../controllers/authcontroller');

// router.post('/register', register);
// router.post('/login', login);

// module.exports = router;


// // backend/routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/authcontroller.js');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;

