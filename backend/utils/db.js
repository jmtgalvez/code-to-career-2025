import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_URL = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL).then((data) => {
      console.log(`Database connected ${data.connection.host}`);
    });
  } catch (err) {
    console.log(err);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
