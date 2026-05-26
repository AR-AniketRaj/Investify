const { Signup } = require("../controllers/AuthControllers");
const { userVerification } = require("../Middlewares/authMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/", userVerification);

module.exports = router;
