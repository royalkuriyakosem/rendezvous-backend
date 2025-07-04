    const ServiceCategory = require('../models/ServiceCategory');

exports.getAllServiceCategories = async (req, res) => {
  const categories = await ServiceCategory.find();
  res.json(categories);
};

exports.getServiceCategoryById = async (req, res) => {
  const category = await ServiceCategory.findById(req.params.id);
  res.json(category);
};

exports.createServiceCategory = async (req, res) => {
  const category = new ServiceCategory(req.body);
  await category.save();
  res.status(201).json(category);
};

exports.updateServiceCategory = async (req, res) => {
  const category = await ServiceCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(category);
};

exports.deleteServiceCategory = async (req, res) => {
  await ServiceCategory.findByIdAndDelete(req.params.id);
  res.status(204).end();
};