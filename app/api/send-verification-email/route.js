import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { userId, clubData, userEmail, userName } = await req.json();

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // For testing without Gmail, you can use this instead:
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.ethereal.email',
    //   port: 587,
    //   auth: {
    //     user: 'ethereal.user@ethereal.email',
    //     pass: 'verysecret'
    //   }
    // });

    const verificationLink = `${process.env.NEXTAUTH_URL}/api/verify-club?userId=${userId}&token=${Buffer.from(userId).toString('base64')}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'a4pprojects@gmail.com',
      subject: `Club Verification Request - ${clubData.clubName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Club Verification Request</h2>
          
          <p>A new club has registered and requires verification:</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Club Details:</h3>
            <p><strong>Club Name:</strong> ${clubData.clubName}</p>
            <p><strong>Club Head Name:</strong> ${userName}</p>
            <p><strong>Club Head Email:</strong> ${userEmail}</p>
            <p><strong>Instagram ID:</strong> @${clubData.instaId}</p>
            <p><strong>Club Type:</strong> ${clubData.clubType}</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationLink}" 
               style="background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">
              Verify Club
            </a>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            Click the "Verify Club" button above to approve this club and allow them to use the WAVC platform.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending verification email:", error);
    return NextResponse.json({ error: "Failed to send verification email" }, { status: 500 });
  }
}
