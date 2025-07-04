const express = require('express');
const eventCategoryController = require('../controllers/eventCategoryController');
const router = express.Router();

router.get('/', eventCategoryController.getAllEventCategories);
router.get('/:id', eventCategoryController.getEventCategoryById);
router.post('/', eventCategoryController.createEventCategory);
router.put('/:id', eventCategoryController.updateEventCategory);
router.delete('/:id', eventCategoryController.deleteEventCategory);

module.exports = router;