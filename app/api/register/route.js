import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const userId = session.user.id;
    const userRef = doc(db, "users", userId);

    const dataToUpdate = {
      ...body,
      onboardingComplete: true,
    };

    await updateDoc(userRef, dataToUpdate);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}
