"use server";

import { dbconnect } from "@/lib/dbConnect";

export const getProducts = async () => {
  const products = await dbconnect("products").find().toArray();
  return products;
};
