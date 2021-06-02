const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

var selectedDatabase;

if (process.env.PORT) {
  selectedDatabase = db;
} else {
  selectedDatabase = "mongodb://localhost:27017";
}

const connectDB = async () => {
  try {
    await mongoose.connect(selectedDatabase, {
      dbName: "Social_media_database",
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected");
  } catch (error) {
    console.log(error.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
