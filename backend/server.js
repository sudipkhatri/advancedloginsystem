import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./Routes/userRoute.js";
import cookieParser from "cookie-parser";
import "dotenv/config.js"

const app = express();

app.use(express.json());
app.use(
  cors(
    // origin: "http://localhost:5173/", //only accept access from this url
    {
      origin: "http://localhost:5173",
      credentials: true,
    }
  )
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRouter);
const port = 5001;

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log("listening to port:", port);
    });
  })
  .catch((error) => console.log(error));
