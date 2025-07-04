const express = require('express');
const attendeeController = require('../controllers/attendeeController');
const router = express.Router();

router.get('/', attendeeController.getAllAttendees);
router.get('/:id', attendeeController.getAttendeeById);
router.post('/', attendeeController.createAttendee);
router.put('/:id', attendeeController.updateAttendee);
router.delete('/:id', attendeeController.deleteAttendee);

module.exports = router;