import React from "react";
import "./forget-password.css";
import Link from "next/link";

export default function page() {
  return (
    <section className="forget_password auth_bg ">
      <div className="container  p-4 bg_white">
        <div className="">
          <h1 className="auth_heading">Forgot your Password?</h1>
          <p className="auth_para mt-3">
            Enter your number so that we can send you password reset OTP
          </p>
          <form>
            <div>
              <label htmlFor="phone_num" className="label_auth">
                Phone Number
              </label>
            </div>

            <br />
            <input
              type="text"
              id="phone_num"
              placeholder="Phone Number"
              className="input_auth"
            />
            <br />
            <Link href="/otp" passHref>
              <button className="sign_in">Continue</button>
            </Link>
          </form>
        </div>
        <div className="logo_div mt-3">
          <img src="/assets/logo_header.png" alt="" className="logo" />
          <p id="head">AYA SIR G!</p>
          <p id="descri">YOUR TRUSTED EVERYWHERE</p>
        </div>
      </div>
    </section>
  );
}
