require('dotenv').config();
const express = require('express');
const path = require('path');
const router = require('./routes.js');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/reviews', router);

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
