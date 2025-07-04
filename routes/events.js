const express = require('express');
const eventController = require('../controllers/eventController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);
router.post('/', auth(), eventController.createEvent); // Protected
router.put('/:id', auth(), eventController.updateEvent); // Protected
router.delete('/:id', auth(['admin']), eventController.deleteEvent); // Only admin

module.exports = router;