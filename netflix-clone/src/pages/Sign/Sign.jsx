import React from "react";
import "./Sign.css";

const Sign = () => {
  return (
    <div className="sign">
      <div className="sign_wrapper">
        <div className="Sign_list">
          <div className="title">Sign In</div>
          <div className="email">
            <input
              pattern="^[A-Za-z0-9]{3,16}$"
              type="text"
              placeholder="Email or phone number"
            />
            <p className="msg">Please enter a valid email or phone number.</p>
          </div>
          <div className="password">
            <input
              type="password"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
            />
            <p className="msg">Your password must contain between 4 and 60 characters.</p>
          </div>

          <div className="sign-btn">
            <button>Sign In</button>
            <div className="btn-bottom">
              <div className="left">
                <input type="checkbox" />
                Remember me
              </div>
              <div className="right">Need help?</div>
            </div>
          </div>
          <div className="bottom">
            <p>New to Netflix? <span>Sign up now</span> </p>
            <p className="more">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">link here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
