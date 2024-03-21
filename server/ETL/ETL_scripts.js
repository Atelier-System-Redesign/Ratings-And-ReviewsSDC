const fs = require('fs');
const connection = require('../db/database.js');
require('dotenv').config();

const tableName = 'reviews';
const filePath = process.env.REVIEWSCSV;

const copyQuery = `
  COPY ${tableName}(id, product_id, rating,  unix_timestamp, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) FROM ${filePath} CSV HEADER
`;

// const stream = fs.createReadStream(filePath);

// stream.on('error', (err) => {
//   console.error('Error reading file:', err);
// });

connection.query(copyQuery)
  .then(() => {
    console.log('COPY operation completed successfully');

    // update the primary key start value
    connection.query("SELECT setval('serial', max(id)) FROM reviews")
      .then(() => {
        console.log('serial update completed successfully');
      })
      .catch((err) => {
        console.error('Error executing serial update:', err);
      });
  })
  .catch((err) => {
    console.error('Error executing COPY query:', err);
  });
