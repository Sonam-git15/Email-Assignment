const googleAuthSuccess = (req, res) => {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "User authenticated successfully",
        user: req.user,
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }
  };
  
  const googleAuthFailure = (req, res) => {
    res.status(401).json({
      success: false,
      message: "Google authentication failed",
    });
  };
  
  const logout = (req, res) => {
    req.logout(err => {
      if (err) return res.status(500).send("Logout error");
      res.send("Logged out");
    });
  };
  
  module.exports = {
    googleAuthSuccess,
    googleAuthFailure,
    logout,
  };
  