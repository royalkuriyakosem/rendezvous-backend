const Payment = require('../models/Payment');

exports.getAllPayments = async (req, res) => {
  const payments = await Payment.find();
  res.json(payments);
};

exports.getPaymentById = async (req, res) => {
  const payment = await Payment.findById(req.params.id);
  res.json(payment);
};

exports.createPayment = async (req, res) => {
  const payment = new Payment(req.body);
  await payment.save();
  res.status(201).json(payment);
};

exports.updatePayment = async (req, res) => {
  const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(payment);
};

exports.deletePayment = async (req, res) => {
  await Payment.findByIdAndDelete(req.params.id);
  res.status(204).end();
};