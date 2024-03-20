require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect();

function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);
  return date.toISOString().slice(0, 19).replace('T', ' ');
}

for (let i = 0; i <= 100; i += 1) {
  const seedProduct = {
    product_id: 4000 + i,
  };

  const seedReview = {
    review_id: 30 + i,
    product_id: 4000 + i,
    rating: 5,
    summary: 'blah blah blah',
    recommend: 1,
    response: null,
    body: 'super duper',
    date: formatDateTime('2018-10-18T00:00:00.000Z'),
    name: 'John Doe',
    email: 'JohnDoe@email.com',
    helpfulness: 4,
    reported: 0,
  };

  const seedCharacteristic = {
    characteristic_id: 70 + i,
    question_id: 30 + i,
    body: 'Yes it comes in black, blue, sage green, red, and goldenrod.',
    date: formatDateTime('2018-10-18T00:00:00.000Z'),
    answerer_name: 'sillyguy',
    helpfulness: 6,
    answer_reported: 0,
  };

  const seedReviewPhoto = {
    photo_id: i,
    review_id: 70 + i,
    url: 'urlplaceholder/answer_5_photo_number_1.jpg',
  };

  connection.query('INSERT INTO products SET ?', seedProduct, (error) => {
    if (error) throw error;
  });

  connection.query('INSERT INTO questions SET ?', seedReview, (error) => {
    if (error) throw error;
  });

  connection.query('INSERT INTO answers SET ?', seedCharacteristic, (error) => {
    if (error) throw error;
  });

  connection.query('INSERT INTO reviewPhotos SET ?', seedReviewPhoto, (error) => {
    if (error) throw error;
  });
}
