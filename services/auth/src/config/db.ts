import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "tomato",
    });

    console.log("Connected to Database");
  } catch (error) {
    console.error(error);
  }
};

export default connectDb;
