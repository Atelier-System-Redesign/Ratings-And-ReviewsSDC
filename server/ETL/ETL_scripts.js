const connection = require('../db/database.js');
require('dotenv').config();

const tableName = 'reviews';
const filePath = process.env.REVIEWSCSV;

const loadReviews = `
  COPY ${tableName}(id, product_id, rating,  unix_timestamp, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) FROM ${filePath} CSV HEADER
`;

// const stream = fs.createReadStream(filePath);

// stream.on('error', (err) => {
//   console.error('Error reading file:', err);
// });

connection.query(loadReviews)
  .then(() => {
    console.log('Reviews loaded successfully');

    // update the primary key start value
    connection.query("SELECT setval((SELECT pg_get_serial_sequence('reviews', 'id')), max(id)) FROM reviews")
      .then(() => {
        console.log('serial update for reviews completed successfully');
      })
      .catch((err) => {
        console.error('Error executing serial update for reviews:', err);
      });
  })
  .catch((err) => {
    console.error('Error executing COPY query:', err);
  });
