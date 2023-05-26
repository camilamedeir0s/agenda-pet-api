const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

router.post('/register', userController.create);

router.use(authMiddleware);
router.get('/get/:id', userController.getOne);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', verifyId(), userController.delete);

module.exports = router;