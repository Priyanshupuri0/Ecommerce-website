const express = require('express'); // Include ExpressJS
const bodyParser = require('body-parser'); // Middleware
const router = require('./Database/router');
const connectDB = require('./Database/db');
const cors = require('cors');
const app = express()// Create an ExpressJS app
const auth = require('./auth');


connectDB;
app.use('/', express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

app.use('/', router);

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
  response.json({ message: "You are authorized to access me" });
});

app.listen(8080);