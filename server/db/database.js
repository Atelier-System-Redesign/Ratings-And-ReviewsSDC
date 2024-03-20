require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.PORT}/review`);

const { Schema } = mongoose;

const reviewSchema = new Schema({
  product_id: { type: Number, unique: true },
  rating: { type: Number, required: true },
  summary: String,
  body: { type: String, required: true },
  recommend: { type: Boolean, default: false },
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now },
  response: { type: String, default: null },
  helpfulness: { type: Number, default: 0 },
  reported: { type: Boolean, default: false },
});

const reviewPhotoSchema = new mongoose.Schema({
  review_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' },
  url: String,
});

const characteristicSchema = new mongoose.Schema({
  name: { type: String, unique: true },
});

const reviewCharacteristicSchema = new mongoose.Schema({
  review_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' },
  characteristic_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Characteristic' },
  value: Number,
});

const Review = mongoose.model('Review', reviewSchema);
const ReviewPhoto = mongoose.model('ReviewPhoto', reviewPhotoSchema);
const Characteristic = mongoose.model('Characteristic', characteristicSchema);
const ReviewCharacteristic = mongoose.model('ReviewCharacteristic', reviewCharacteristicSchema);

module.exports = {
  Review, ReviewPhoto, Characteristic, ReviewCharacteristic,
};
