const express = require('express');
const serviceCategoryController = require('../controllers/serviceCategoryController');
const router = express.Router();

router.get('/', serviceCategoryController.getAllServiceCategories);
router.get('/:id', serviceCategoryController.getServiceCategoryById);
router.post('/', serviceCategoryController.createServiceCategory);
router.put('/:id', serviceCategoryController.updateServiceCategory);
router.delete('/:id', serviceCategoryController.deleteServiceCategory);

module.exports = router;