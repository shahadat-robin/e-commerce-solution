import dotenv from "dotenv";
import express, { Express } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import routes from "./routes";

// Configurations
dotenv.config();
const app: Express = express();

// Routes
app.use("/products", routes.productRoutes);

// Mongoose Setup
const port = process.env.PORT || 8000;

mongoose
  .connect(`${process.env.DB_Uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("Server Crashed!!!!!");
  });
