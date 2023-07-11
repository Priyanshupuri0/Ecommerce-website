const express = require('express'); // Include ExpressJS
const bodyParser = require('body-parser'); // Middleware
const router = require('./Database/router');
const connectDB = require('./Database/db');
const cors = require('cors');
const app = express()// Create an ExpressJS app

connectDB;
app.use('/', express.static('public'));
app.use('/Admin', express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post('/sendForm', router);

app.listen(8080);