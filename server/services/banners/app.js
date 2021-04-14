const express = require('express');
const app = express();
const { connect } = require('./config/mongodb');
const cors = require('cors');
const router = require('./routes/index');

const PORT = process.env.PORT || 4002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connect()
  .then(async (db) => {
    console.log('MongoDB successfully connected!');
    app.use(router);
    app.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}...`);
    })
  })

module.exports = app;