import { Request, Response } from "express";
import { db } from "../../db";
import { productTable } from "../../db/productSchema";
import { DrizzleError, eq } from "drizzle-orm";
import _ from "lodash";
import { createProductSchema } from "../../db/productSchema";

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await db.select().from(productTable);
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json((e as DrizzleError).message);
  }
}
export async function getProductById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const [product] = await db
      .select()
      .from(productTable)
      .where(eq(productTable.id, Number(id)));
    if (!product) {
      res.status(404).send({ message: "Product not found" });
    } else {
      res.status(200).json(product);
    }
  } catch (e) {
    res.status(500).json((e as DrizzleError).message);
  }
}
export async function createProduct(req: Request, res: Response) {
  try {
    const data: Pick<String, any> = _.pick(
      req.body,
      Object.keys(createProductSchema.shape)
    );
    // const { id, ...rest } = req.body;
    const [product] = await db
      .insert(productTable)
      .values(req.cleanBody)
      .returning();
    res.status(201).json(product);
  } catch (e) {
    res.status(500).json((e as DrizzleError).message);
  }
}
export async function updateProduct(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const [updatedProduct] = await db
      .update(productTable)
      .set(req.cleanBody)
      .where(eq(productTable.id, id))
      .returning();
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (e) {
    res.status(500).json({ message: (e as DrizzleError).message });
  }
}
export async function deleteProduct(req: Request, res: Response) {
  try {
    const [deletedProduct] = await db
      .delete(productTable)
      .where(eq(productTable.id, Number(req.params.id)))
      .returning();
    if (deletedProduct) {
      res.send(204);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (e) {
    res.status(500).json({ message: (e as DrizzleError).message });
  }
}
