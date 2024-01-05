// accepting POST requests to this endpoint
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export const POST = async (request) => {
  try {
    const { name, email, password } = await request.json();
    // will do validation of email type & password characters here
    //   will use zodd to validate this data
    console.log({ name, email, password });
    const hashedPassword = await hash(password, 10);
    const response = await sql`
    INSERT INTO users (email, password, name)
    VALUES (${email}, ${hashedPassword}, ${name})
      `;
  } catch (e) {}

  return NextResponse.json({ message: "success" });
};
