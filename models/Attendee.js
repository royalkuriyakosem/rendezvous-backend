const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  name: String,
  email: String,
  status: { type: String, enum: ['registered', 'checked_in', 'cancelled'], default: 'registered' },
  registrationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Attendee', attendeeSchema);