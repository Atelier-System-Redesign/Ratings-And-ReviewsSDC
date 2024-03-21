const connection = require('../db/database.js');

exports.postReview = (postData) => new Promise((resolve, reject) => {
  connection.query(
    'INSERT INTO reviews (product_id, rating, summary, body, recommend, reviewer_name, reviewer_email) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id',
    [postData.product_id, postData.rating, postData.summary,
      postData.body, postData.recommend, postData.name, postData.email],
    (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows[0]);
      }
    },
  );
});

exports.postReviewsPhotos = (reviewId, url) => new Promise((resolve, reject) => {
  connection.query(
    'INSERT INTO reviews_photos (review_id, url) VALUES ($1, $2)',
    [reviewId, url],
    (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    },
  );
});

// exports.postCharacteristics = (productId, name) => new Promise((resolve, reject) => {
//   connection.query(
//     'INSERT INTO characteristics (product_id, name) VALUES ($1, $2)',
//     [productId, name],
//     (error, results) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results);
//       }
//     },
//   );
// });

exports.postReviewsCharacteristics = (characteristicId, reviewId, value) => new Promise((resolve, reject) => {
  connection.query(
    'INSERT INTO reviews_characteristics (characteristic_id, review_id, value) VALUES ($1, $2, $3)',
    [characteristicId, reviewId, value],
    (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    },
  );
});
