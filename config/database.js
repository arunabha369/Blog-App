const mongoose = require('mongoose');
require('dotenv').config();

const connectWithDb = () => {
  mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
      console.log('Database connected successfully');
    })
    .catch((error) => {
      console.error('Error connecting to the database:');
      console.error(error);
      process.exit(1); // Exit the process with failure
    });
};

module.exports = connectWithDb;