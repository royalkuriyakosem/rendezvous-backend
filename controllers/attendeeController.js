const Attendee = require('../models/Attendee');

exports.getAllAttendees = async (req, res) => {
  const attendees = await Attendee.find();
  res.json(attendees);
};

exports.getAttendeeById = async (req, res) => {
  const attendee = await Attendee.findById(req.params.id);
  res.json(attendee);
};

exports.createAttendee = async (req, res) => {
  const attendee = new Attendee(req.body);
  await attendee.save();
  res.status(201).json(attendee);
};

exports.updateAttendee = async (req, res) => {
  const attendee = await Attendee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(attendee);
};

exports.deleteAttendee = async (req, res) => {
  await Attendee.findByIdAndDelete(req.params.id);
  res.status(204).end();
};