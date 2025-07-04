const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  serviceName: String,
  description: String,
  pricing: Number,
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);