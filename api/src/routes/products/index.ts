import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("List of products").status(200);
});

router.get("/:id", (req, res) => {
  console.log("params", req.params);
  res.send("Product details").status(200);
});

router.post("/", (req, res) => {
  res.send("Product created").status(201);
});

export default router;