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

  models.postReview(postDataReviews)
    .then((result) => {
      reviewId = result.id;
      req.body.photos.forEach((url) => {
        models.postReviewsPhotos(reviewId, url)
          .catch((err) => {
            console.error('Failed to add photo: ', err);
          });
      });
    })
    .then(() => {
      Object.keys(req.body.characteristics).forEach((key) => {
        models.postReviewsCharacteristics(key, reviewId, req.body.characteristics[key])
          .catch((err) => {
            console.error('Failed to add review characteristic: ', err);
          });
      });
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.error('Failed to add review: ', err);
    });
};
