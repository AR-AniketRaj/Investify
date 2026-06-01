const { Signup, Login, Logout } = require("../controllers/AuthControllers");
const { userVerification } = require("../Middlewares/authMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
router.post("/", userVerification);

module.exports = router;
