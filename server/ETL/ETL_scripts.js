const connection = require('../db/database.js');
require('dotenv').config();

const tables = [`${process.env.TABLE1}`, `${process.env.TABLE2}`, `${process.env.TABLE3}`, `${process.env.TABLE4}`];

const filePaths = [
  process.env.TABLE1_CSV,
  process.env.TABLE2_CSV,
  process.env.TABLE3_CSV,
  process.env.TABLE4_CSV,
];

// Define the COPY queries for each table
const copyQueries = tables.map((table, index) => {
  const filePath = filePaths[index];
  return `
    COPY ${table} FROM '${filePath}' CSV HEADER
  `;
});

// Execute COPY queries for each table
Promise.all(copyQueries.map((query) => connection.query(query)))
  .then(() => {
    console.log('All tables loaded!');

    // Update primary key start value for each table
    Promise.all(tables.map((table) => connection.query(`
        SELECT setval((SELECT pg_get_serial_sequence('${table}', 'id')), max(id)) FROM ${table}
      `)))
      .then(() => {
        console.log('Serial update for all tables completed successfully');
      })
      .catch((err) => {
        console.error('Error running serial update for tables:', err);
      });
  })
  .catch((err) => {
    console.error('Error loading tables:', err);
  });
