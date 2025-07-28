import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, subject, message, phone } = body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or another service like 'outlook', 'yahoo', etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Use an app password if using Gmail
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER, // Where you want to receive emails
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      // Optional: Set reply-to to the sender's email
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
