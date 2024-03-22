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

exports.getReviews = (productId, page, count, sort) => new Promise((resolve, reject) => {
  let order;

  if (sort === 'newest') {
    order = 'date DESC';
  } else if (sort === 'helpful') {
    order = 'helpfulness DESC';
  } else if (sort === 'relevant') {
    order = 'helpfulness DESC, date DESC';
  } else {
    order = 'helpfulness DESC, date DESC';
  }

  connection.query(
    `SELECT
        r.id AS review_id,
        r.rating,
        r.summary,
        r.recommend,
        r.response,
        r.body,
        to_char(to_timestamp(r.unix_timestamp / 1000), 'YYYY-MM-DD"T"HH24:MI:SS.USZ') AS date,
        r.reviewer_name,
        r.helpfulness,
        r.reported,
        CASE
          WHEN rp.id IS NULL THEN '[]'
          ELSE json_agg(json_build_object('id', rp.id, 'url', rp.url))
        END photos
      FROM
        reviews AS r
      LEFT JOIN
        reviews_photos AS rp ON r.id = rp.review_id
      WHERE
        r.product_id = $1
      GROUP BY
        r.id, rp.id
      ORDER BY
        ${order}
      LIMIT
        $2
      OFFSET
        $3`,
    [productId, count, page * count],
    (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    },
  );
});

exports.reportReview = (reviewId) => new Promise((resolve, reject) => {
  connection.query(
    `UPDATE reviews
    SET reported = true
    WHERE id = ${reviewId}`,
    (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    },
  );
});

exports.markHelpful = (reviewId) => new Promise((resolve, reject) => {
  connection.query(
    `UPDATE reviews
    SET helpfulness = helpfulness + 1
    WHERE id = ${reviewId}`,
    (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    },
  );
});

exports.getMeta = (productId) => new Promise((resolve, reject) => {
  connection.query(
    `SELECT
    json_object_agg(rating::text, number::text) AS ratings,
    json_object_agg(recommend::text, rec_num::text) AS recommended
    FROM (
      SELECT rating, COUNT(*) AS number
      FROM reviews
      WHERE product_id = $1
      GROUP BY rating
    ) AS ratings_counts,
    (
      SELECT recommend, COUNT(*) AS rec_num
      FROM reviews
      WHERE product_id = $1
      GROUP BY recommend
    ) AS recommend_counts`,
    [productId],
    (error, results) => {
      if (error) {
        reject(error);
      } else {
        const metaData = {
          product_id: productId,
          ...results.rows[0],
        }
        resolve(metaData);
      }
    },
  );
});
