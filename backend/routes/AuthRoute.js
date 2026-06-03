const {
  Signup,
  Login,
  Logout,
  VerifyOtp,
} = require("../controllers/AuthControllers");

console.log({
  Signup,
  Login,
  Logout,
  VerifyOtp,
});
const { userVerification } = require("../Middlewares/authMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
router.post("/verify-otp", VerifyOtp);
router.post("/", userVerification);

module.exports = router;
