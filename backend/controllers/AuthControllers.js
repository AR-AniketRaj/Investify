const User = require("../model/userModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
// const transporter = require("../config/mail");
const resend = require("../config/resend");

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

    //  Verified user already exists
    if (existingUser && existingUser.isVerified) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = Date.now() + 5 * 60 * 1000;

    let userToNotify;

    //  Unverified user exists — update karo, naya mat banao
    if (existingUser && !existingUser.isVerified) {
      console.log("UPDATING EXISTING UNVERIFIED USER:", email);
      existingUser.otp = otp;
      existingUser.otpExpiry = otpExpiry;
      existingUser.password = password; // updated password bhi save karo
      await existingUser.save();
      userToNotify = existingUser;
    } else {
      //  Brand new user
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

    //  OTP send karo
    try {
      console.log("USING RESEND");
      const response = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Email Verification OTP",
        html: `<h2>Your OTP is ${otp}</h2>`,
      });

      console.log("RESEND RESPONSE:", response);
    } catch (mailError) {
      console.error("RESEND ERROR:", mailError);

      if (!existingUser) {
        await User.deleteOne({ _id: userToNotify._id });
      }

      return res.status(500).json({
        success: false,
        message: mailError.message,
        code: mailError.code,
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

//VerifyOtp
module.exports.VerifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (user.otpExpiry < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    user.isVerified = true;
    user.otp = null;
    user.otpExpiry = null;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    console.log("VERIFY OTP ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Login
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    if (!user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Please verify your email first",
      });
    }

    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user,
    });
  } catch (error) {
    console.log("LOGIN ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Logout
module.exports.Logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};
