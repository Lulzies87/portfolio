import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import { json } from "body-parser";

const app = express();

app.use(cors());
app.use(json());

app.get("/api/check", (_, res) => {
  res.status(200).json({ message: "Hello" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact form submission from ${name}`,
      text: `
Phone: ${phone}
Message: ${message}
`,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email." });
  }
});

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
