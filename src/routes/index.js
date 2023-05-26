const express = require('express');
const router = express.Router();

router.use('/user', require('./userRoutes'));
router.use('/pet', require('./petRoutes'));

module.exports = router;