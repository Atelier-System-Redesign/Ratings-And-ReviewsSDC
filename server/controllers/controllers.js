const models = require('../models/models');

exports.postReview = async (req, res) => {
  const postDataReviews = {
    product_id: req.body.product_id,
    rating: req.body.rating,
    summary: req.body.summary,
    body: req.body.body,
    recommend: req.body.recommend,
    name: req.body.name,
    email: req.body.email,
  };

  let reviewId;

  // const postDataPhotos = req.body.photos;

  // const postDataCharacteristics = req.body.characteristics;

  // const {
  //   product_id,
  //   rating,
  //   summary,
  //   body,
  //   recommend,
  //   name,
  //   email,
  //   photos,
  //   characteristics,
  // } = req.body;

  models.postReview(postDataReviews)
    .then((result) => {
      reviewId = result.id;
      console.log(reviewId);
      req.body.photos.forEach((url) => {
        models.postReviewPhotos(reviewId, url)
          .catch((err) => {
            console.error('Failed to add photo: ', err);
          });
      });
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.error('Failed to add review: ', err);
    });

  // const savedPhotos = await Promise.all(photos.map(async (photo) => {
  //   const newPhoto = new db.ReviewPhoto({ review_id: savedReview._id, url: photo.url });
  //   return newPhoto.save();
  // }));

  // const savedCharacteristics = await Promise.all(characteristics.map(async (char) => {
  //   const newCharacteristic = new Characteristic({ name: char.name, value: char.value });
  //   return await newCharacteristic.save();
  // }));
};
