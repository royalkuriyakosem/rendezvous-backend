const Review = require('../models/Review');

exports.getAllReviews = async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
};

exports.getReviewById = async (req, res) => {
  const review = await Review.findById(req.params.id);
  res.json(review);
};

exports.createReview = async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.status(201).json(review);
};

exports.updateReview = async (req, res) => {
  const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.status(204).end();
};