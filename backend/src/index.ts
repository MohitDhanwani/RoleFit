import express from "express";
import cookieParser from "cookie-parser";
import route from "./routes/user.js";
import dotenv from "dotenv";
dotenv.config() 

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/", route);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});