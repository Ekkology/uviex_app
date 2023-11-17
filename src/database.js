import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost/uviexdatabase");
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
