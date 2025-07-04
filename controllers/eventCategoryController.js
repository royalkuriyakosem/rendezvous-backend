const EventCategory = require('../models/EventCategory');

exports.getAllEventCategories = async (req, res) => {
  const categories = await EventCategory.find();
  res.json(categories);
};

exports.getEventCategoryById = async (req, res) => {
  const category = await EventCategory.findById(req.params.id);
  res.json(category);
};

exports.createEventCategory = async (req, res) => {
  const category = new EventCategory(req.body);
  await category.save();
  res.status(201).json(category);
};

exports.updateEventCategory = async (req, res) => {
  const category = await EventCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(category);
};

exports.deleteEventCategory = async (req, res) => {
  await EventCategory.findByIdAndDelete(req.params.id);
  res.status(204).end();
};