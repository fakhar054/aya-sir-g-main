import React from "react";
import "./reset-password.css";

export default function page() {
  return (
    <section className="reset_password auth_bg">
      <div className="container p-4 bg_white">
        <h1 className="auth_heading">Reset Password</h1>
        <p className="auth_para mt-3">
          Enter the 6 digit OTP send to your +92 3** *******
        </p>

        <form>
          <div>
            <label htmlFor="email" className="label_auth">
              New Password
            </label>
            <br />
            <input
              type="text"
              className="input_auth"
              placeholder="Email"
              id="email"
              name="email"
            />
            <br />
          </div>
          <div>
            <label htmlFor="" className="label_auth">
              Password
            </label>
            <br />

            <input
              type="password"
              className="input_auth"
              placeholder="Password"
            />
            <br />
          </div>
          <button className="sign_in">Submit</button>
        </form>
        <div className="logo_div mt-3">
          <img src="/assets/logo_header.png" alt="" className="logo" />
          <p id="head">AYA SIR G!</p>
          <p id="descri">YOUR TRUSTED EVERYWHERE</p>
        </div>
      </div>
    </section>
  );
}
