const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// yeah, the Middleware
app.use(cors());
app.use(express.json());

// these are Routes placeholder
app.get('/', (req, res) => {
  res.send('Decreasr API is running!');
});

// this is for connection with mongoDb
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
