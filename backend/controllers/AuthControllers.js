const User = require("../model/userModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const transporter = require("../config/mail");

// SIGNUP
module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    console.log("SIGNUP BODY:", req.body);

    if (!email || !password || !username) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    let existingUser = await User.findOne({ email });
    console.log("EXISTING USER:", existingUser);

    // ✅ Verified user already exists
    if (existingUser && existingUser.isVerified) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = Date.now() + 5 * 60 * 1000;

    let userToNotify;

    // ✅ Unverified user exists — update karo, naya mat banao
    if (existingUser && !existingUser.isVerified) {
      console.log("UPDATING EXISTING UNVERIFIED USER:", email);
      existingUser.otp = otp;
      existingUser.otpExpiry = otpExpiry;
      existingUser.password = password; // updated password bhi save karo
      await existingUser.save();
      userToNotify = existingUser;
    } else {
      // ✅ Brand new user
      console.log("CREATING USER:", email);
      userToNotify = await User.create({
        email,
        password,
        username,
        otp,
        otpExpiry,
        isVerified: false,
      });
      console.log("USER CREATED:", email);
    }

    // ✅ OTP send karo
    try {
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "Email Verification OTP",
        text: `Your OTP is ${otp}`,
      });
    } catch (mailError) {
      console.error("SMTP ERROR:", mailError);
      // Sirf naye user ko delete karo, existing ko nahi
      if (!existingUser) {
        await User.deleteOne({ _id: userToNotify._id });
      }
      return res.status(500).json({
        success: false,
        message: "Failed to send OTP email",
      });
    }

    return res.status(201).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.error("SIGNUP ERROR FULL:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
      code: error.code,
      keyValue: error.keyValue,
    });
  }
};
