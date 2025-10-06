import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // Create a hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "FORGOT") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }
    // Create a transporter
    var transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST as string,
      port: parseInt(process.env.SMTP_PORT || "2525"),
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
      },
    } as any);

    const mailOptions = {
      from: "<your-email@example.com>",
      to: email,
      subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
          or copy and paste the link below in your browser. <br> ${
            process.env.DOMAIN
          }/verifyemail?token=${hashedToken}
          </p>`,
    };

    // Send the email
    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;

  } catch (error: any) {
    throw new Error(error.message);
  }
};
