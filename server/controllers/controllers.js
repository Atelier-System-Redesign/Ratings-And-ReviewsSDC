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

exports.getReview = async (req, res) => {
  const productId = req.query.product_id;
  const count = req.query.count || 5;
  const sort = req.query.sort || 'relevance';
  const page = req.query.page || 0;
  models.getReviews(productId, page, count, sort)
    .then((reviews) => {
      res.send({
        product: productId,
        page: parseInt(page, 10),
        count: parseInt(count, 10),
        results: reviews,
      });
    })
    .catch((err) => {
      res.sendStatus(500);
      console.error('Failed to retrieve reviews: ', err);
    });
};

exports.reportReview = async (req, res) => {
  const productId = req.params.review_id;
  models.reportReview(productId)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.error('Failed to report review: ', err);
    });
};

exports.markHelpful = async (req, res) => {
  const productId = req.params.review_id;
  models.markHelpful(productId)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.error('Failed to mark review as helpful: ', err);
    });
};
