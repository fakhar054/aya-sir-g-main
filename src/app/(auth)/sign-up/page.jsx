import React from "react";
import "./sign-up.css";

export default function page() {
  return (
    <div className="sign_up auth_bg">
      <div className="container p-3 bg_white">
        <h1 className="auth_heading margin_bottom">Sign Up</h1>
        <form>
          <div>
            <input
              type="text"
              className="input_auth"
              placeholder="Full Name"
              id="email"
              name="email"
            />
          </div>
          <div>
            <input
              type="text"
              className="input_auth"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              type="text"
              className="input_auth"
              placeholder="Email Address"
            />
          </div>
          <div>
            <input
              type="password"
              className="input_auth"
              placeholder="Create Password"
            />
          </div>
          <div>
            <input
              type="password"
              className="input_auth"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <input type="password" className="input_auth" placeholder="City" />
          </div>
          <div>
            <input
              type="password"
              className="input_auth"
              placeholder="Address"
            />
          </div>
          <button className="sign_in">Sign Up</button>
          <div className="checkbox_field mt-2">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="custom-checkbox">
              I agree with the{" "}
              <span className="terms">Terms & Conditions </span>
              of Clarity
            </label>
          </div>
        </form>
        {/* <div className="logo_div mt-3">
          <img src="/assets/logo_header.png" alt="" className="logo" />
          <p id="head">AYA SIR G!</p>
          <p id="descri">YOUR TRUSTED EVERYWHERE</p>
        </div> */}
      </div>
    </div>
  );
}
