const db = require('../db/database');

exports.postReview = async (req, res) => {
  const {
    product_id,
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    characteristics,
  } = req.body;

  const newReview = new db.Review({
    product_id,
    rating,
    summary,
    body,
    recommend,
    name,
    email,
  });

  newReview.save();

  const savedPhotos = await Promise.all(photos.map(async (photo) => {
    const newPhoto = new db.ReviewPhoto({ review_id: savedReview._id, url: photo.url });
    return newPhoto.save();
  }));

  const savedCharacteristics = await Promise.all(characteristics.map(async (char) => {
    const newCharacteristic = new Characteristic({ name: char.name, value: char.value });
    return await newCharacteristic.save();
  }));
};
