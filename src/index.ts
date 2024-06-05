import express, { Request, Response, Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { bookRouter } from "./controllers/bookRoute";

dotenv.config();
const { DB_USERNAME, DB_PASSWORD, DB_NAME, PORT } = process.env;
mongoose
  .connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@testclaster.jnzonwj.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=testClaster`,
  )
  .then(() => {
    console.log("connected to the database...");
  })
  .catch((err) => {
    console.error(err);
  });
const app: Application = express();
app.use(express.json());
app.use("/books", bookRouter);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'use the "/book" route to access the main functionality',
  });
});

app
  .listen(PORT || 1337, () => {
    console.log("Server is listening on port:", process.env.PORT);
  })
  .on("error", (err) => {
    console.error(err);
  });
