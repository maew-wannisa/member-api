const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://maewwannisa18:9QmgQNdHznVNW6y5@data.orxpb.mongodb.net/projects"
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
