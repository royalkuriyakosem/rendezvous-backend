const Service = require('../models/Service');

exports.getAllServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

exports.getServiceById = async (req, res) => {
  const service = await Service.findById(req.params.id);
  res.json(service);
};

exports.createService = async (req, res) => {
  const service = new Service(req.body);
  await service.save();
  res.status(201).json(service);
};

exports.updateService = async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(service);
};

exports.deleteService = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.status(204).end();
};