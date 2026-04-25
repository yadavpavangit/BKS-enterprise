import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connect successfully");
  } catch (error) {
    console.error("Failed to connect", error);
  }
}

export default connectDB;
