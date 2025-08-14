import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    try {
      await resend.emails.send({
        from: "Portfolio Contact <noreply@yourdomain.com>", // Replace with your verified domain
        to: ["your-email@example.com"], // Replace with your actual email
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #374151;">Message:</h3>
              <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #0d9488; border-radius: 4px;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
              <p>This email was sent from your portfolio contact form.</p>
              <p>Reply directly to this email to respond to ${name}.</p>
            </div>
          </div>
        `,
        replyTo: email, // This allows you to reply directly to the sender
      })

      console.log("Email sent successfully for:", { name, email, subject })
    } catch (emailError) {
      console.error("Failed to send email:", emailError)
      // Still return success to user, but log the error
      // You might want to implement a fallback notification system
    }

    return NextResponse.json(
      {
        message: "Message sent successfully! I'll get back to you soon.",
        success: true,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 })
  }
}
