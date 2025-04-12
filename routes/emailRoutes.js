const express = require("express");
const {
  sendEmail,
  getEmailHistory,
} = require("../controllers/emailController");

const router = express.Router();

router.post("/send", sendEmail);
router.get("/:userId", getEmailHistory);

module.exports = router;
