const express = require('express');
const serviceController = require('../controllers/serviceController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getServiceById);
router.post('/', auth(['vendor']), serviceController.createService); // Only vendor
router.put('/:id', auth(['vendor', 'admin']), serviceController.updateService);
router.delete('/:id', auth(['admin']), serviceController.deleteService);

module.exports = router;