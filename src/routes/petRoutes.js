const express = require('express');
const petController = require('../controllers/petController');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

router.use(authMiddleware);
router.post('/create', petController.create);
router.get('/get/:id', petController.getOne);
router.put('/update/:id', petController.update);
router.delete('/delete/:id', petController.delete);

module.exports = router;