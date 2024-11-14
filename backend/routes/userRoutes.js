// const express = require('express');
// const router = express.Router();
// const { getProfile, getAllUsers } = require('../controllers/userController');
// const { authMiddleware, adminOnly } = require('../middlewares/authMiddleware');

// router.get('/profile', authMiddleware, getProfile);
// router.get('/all', authMiddleware, adminOnly, getAllUsers);  // Only accessible to admins

// module.exports = router;


// backend/routes/userRoutes.js
const express = require('express');
const { getProfile, getAllUsers } = require('../controllers/userController');
const { authMiddleware, adminOnly } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/profile', authMiddleware, getProfile);
router.get('/all', authMiddleware, adminOnly, getAllUsers);  // Only accessible to admins

module.exports = router;
