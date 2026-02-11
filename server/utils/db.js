import mongoose from "mongoose";

// const URI = "mongodb://127.0.0.1:27017/mern_admin_panel";

const connectDb = async () => {
  try {
    const URI = process.env.MONGODB_URI;
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection fail", error.message);
    process.exit(0);
  }
};

export default connectDb;