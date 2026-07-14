const mongoose = require('mongoose');

const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    // MongoDB Atlas connection string
    const connString = "mongodb+srv://kirannarapureddy:#kiran@2007@cluster0.btibyn9.mongodb.net/";
    
    await mongoose.connect(connString);
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
