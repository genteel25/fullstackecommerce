import express, { json, urlencoded } from "express";
import productRouter from "./routes/products";

const app = express();
const port = process.env.PORT;

app.use(urlencoded({ extended: true }));

app.use(json());

app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
