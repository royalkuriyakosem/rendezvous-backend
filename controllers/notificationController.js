const Notification = require('../models/Notification');

exports.getAllNotifications = async (req, res) => {
  const notifications = await Notification.find();
  res.json(notifications);
};

exports.getNotificationById = async (req, res) => {
  const notification = await Notification.findById(req.params.id);
  res.json(notification);
};

exports.createNotification = async (req, res) => {
  const notification = new Notification(req.body);
  await notification.save();
  res.status(201).json(notification);
};

exports.updateNotification = async (req, res) => {
  const notification = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(notification);
};

exports.deleteNotification = async (req, res) => {
  await Notification.findByIdAndDelete(req.params.id);
  res.status(204).end();
};