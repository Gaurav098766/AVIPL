const mongoose = require('mongoose');
// const Schema = new mongoose.Schema

const reviewSchema = new mongoose.Schema({
    rating: Number,
    review: {
        type: String,
    },
    teacher: {
        type: String,
    },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;