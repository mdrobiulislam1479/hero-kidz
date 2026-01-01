"use server";
import { dbconnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { email, password, name } = await payload;

  //check payload
  if (!email || !password) return null;

  //check user
  const isExist = await dbconnect("users").findOne({ email });
  if (isExist) return null;

  //create user
  const newUser = {
    provider: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 14),
    role: "user",
  };

  //insert user
  const result = await dbconnect("users").insertOne(newUser);
  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};
