import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    const token = searchParams.get('token');

    // Verify the token (simple base64 check for demo - in production use proper JWT)
    const expectedToken = Buffer.from(userId).toString('base64');
    if (token !== expectedToken) {
      return new Response(
        `<html><body><h1>Invalid verification link</h1><p>This verification link is invalid or has expired.</p></body></html>`,
        { headers: { 'Content-Type': 'text/html' } }
      );
    }

    // Update the user's verification status
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) {
      return new Response(
        `<html><body><h1>User not found</h1><p>The user associated with this verification link was not found.</p></body></html>`,
        { headers: { 'Content-Type': 'text/html' } }
      );
    }

    await updateDoc(userRef, {
      isVerified: true,
      verifiedAt: new Date().toISOString(),
    });

    const userData = userSnap.data();

    return new Response(
      `<html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
          <div style="text-align: center; background-color: #f0f8f0; padding: 30px; border-radius: 8px;">
            <h1 style="color: #4CAF50; margin-bottom: 20px;">✓ Club Verified Successfully!</h1>
            <p style="font-size: 18px; margin-bottom: 10px;"><strong>${userData.clubName}</strong> has been verified.</p>
            <p style="color: #666;">The club can now access all features of the WAVC platform.</p>
            <div style="margin-top: 30px; padding: 20px; background-color: white; border-radius: 4px;">
              <h3>Verified Club Details:</h3>
              <p><strong>Club Name:</strong> ${userData.clubName}</p>
              <p><strong>Club Head:</strong> ${userData.name}</p>
              <p><strong>Email:</strong> ${userData.email}</p>
              <p><strong>Instagram:</strong> @${userData.instaId}</p>
              <p><strong>Type:</strong> ${userData.clubType}</p>
            </div>
          </div>
        </body>
      </html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );

  } catch (error) {
    console.error("Error verifying club:", error);
    return new Response(
      `<html><body><h1>Verification Error</h1><p>An error occurred while verifying the club. Please try again.</p></body></html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
}
