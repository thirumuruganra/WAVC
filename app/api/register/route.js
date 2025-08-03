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

    // If it's a club, set isVerified to false and send verification email
    if (body.role === 'club') {
      dataToUpdate.isVerified = false;
      
      // Send verification email to admin
      try {
        await fetch(`${process.env.NEXTAUTH_URL}/api/send-verification-email`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId,
            clubData: body,
            userEmail: session.user.email,
            userName: session.user.name,
          }),
        });
      } catch (emailError) {
        console.error("Error sending verification email:", emailError);
      }
    } else {
      // Students are automatically verified
      dataToUpdate.isVerified = true;
    }

    await updateDoc(userRef, dataToUpdate);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}
