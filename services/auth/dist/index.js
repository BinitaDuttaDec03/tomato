import "dotenv/config";
import express from "express";
import connectDb from "./config/db.js";
import authRoutes from "./routes/auth.js";
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
    console.log(`Auth service is running on port ${PORT}`);
    connectDb();
});
