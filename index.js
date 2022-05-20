// Require
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express, json());

// Home
app.get('/', (req, res) => {
  res.send('Green Grocery Delivery Server Started..');
});

// Port
app.listen(port, () => {
  console.log(`Green Grocery Delivery Server Started.. ${port}`);
});
