const mongoose = require('mongoose');

const serviceCategorySchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('ServiceCategory', serviceCategorySchema);