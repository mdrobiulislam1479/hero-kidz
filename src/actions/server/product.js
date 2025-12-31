"use server";

import { dbconnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const products = await dbconnect("products").find().toArray();
  return products;
};

export const getSingleProducts = async (id) => {
  if (id.length != 24) {
    return;
  }
  const quary = { _id: new ObjectId(id) };
  const products = await dbconnect("products").findOne(quary);
  return { ...products, _id: products._id.toString() } || {};
};
