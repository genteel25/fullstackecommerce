import express, { Router } from "express";
import productRouter from "./routes/products";

const app = express();
const port = 5001;

app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
