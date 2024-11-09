import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("List of Products").status(200);
}
export function getProductById(req: Request, res: Response) {
  res.send("Get Product by Id").status(200);
}
export function createProduct(req: Request, res: Response) {
  res.send("Create Product").status(200);
}
export function updateProduct(req: Request, res: Response) {
  res.send("Update Product").status(200);
}
export function deleteProduct(req: Request, res: Response) {
  res.send("Delete Product").status(200);
}
