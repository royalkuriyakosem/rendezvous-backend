const Booking = require('../models/Booking');

exports.getAllBookings = async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
};

exports.getBookingById = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  res.json(booking);
};

exports.createBooking = async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.status(201).json(booking);
};

exports.updateBooking = async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(booking);
};

exports.deleteBooking = async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.status(204).end();
};