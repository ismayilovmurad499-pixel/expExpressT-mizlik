import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config({
    path: "config/config.env"
});

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

connectDatabase();
app.use(express.json());
app.use(cookieParser());
app.use(errorsMiddleware);
app.listen(process.env.PORT, () => console.log("Server " + process.env.PORT + " - ci portda calisir..."));
