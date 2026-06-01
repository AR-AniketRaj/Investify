import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:4000/verify-otp", {
        email,
        otp,
      });

      if (data.success) {
        alert(data.message);

        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Verification Failed");
    }
  };

  return (
    <div className="auth_page">
      <div className="form_container">
        <h2>Verify OTP</h2>

        <p>{email}</p>

        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button type="submit">Verify OTP</button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
