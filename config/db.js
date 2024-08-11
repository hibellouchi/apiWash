const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URI).then((conn) => {
    console.log(`Database Connected: ${conn.connection.host}`);
  });
};
module.exports = connectDB;
