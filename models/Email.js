const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  to: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Email", emailSchema);
