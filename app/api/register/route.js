import { users } from "@/lib/mock-data";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, ...details } = await req.json();

    const userIndex = users.findIndex((user) => user.email === email);

    if (userIndex === -1) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Update user with new details
    users[userIndex] = { ...users[userIndex], ...details, registered: true };

    return NextResponse.json(users[userIndex]);
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
}
