const express = require("express");
const passport = require("passport");
const {
  googleAuthSuccess,
  googleAuthFailure,
  logout,
} = require("../controllers/authController");

const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/dashboard",
    failureRedirect: "/auth/failure",
  })
);

router.get("/success", googleAuthSuccess);
router.get("/failure", googleAuthFailure);
router.get("/logout", logout);
router.get("/user", (req, res) => res.send(req.user));

module.exports = router;
