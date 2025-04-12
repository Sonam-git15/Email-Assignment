const postmark = require("postmark");
const Email = require("../models/Email");

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

const sendEmail = async (req, res) => {
  const { to, subject, body, userId } = req.body;

  try {
    await client.sendEmail({
      From: "you@example.com", // Replace with your verified sender email
      To: to,
      Subject: subject,
      HtmlBody: body,
    });

    await Email.create({ userId, to, subject, body });
    res.status(200).send("Email sent");
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).send("Failed to send email");
  }
};

const getEmailHistory = async (req, res) => {
  try {
    const history = await Email.find({ userId: req.params.userId }).sort({ sentAt: -1 });
    res.status(200).json(history);
  } catch (error) {
    console.error("Fetch history error:", error);
    res.status(500).send("Failed to retrieve email history");
  }
};

module.exports = {
  sendEmail,
  getEmailHistory,
};
