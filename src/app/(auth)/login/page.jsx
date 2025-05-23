import Link from "next/link";
import React from "react";
import "./login.css";
import Button from "react-bootstrap/Button";

export default function page() {
  return (
    <section className="auth_bg login ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 left_div p-3">
            <h1 className="login_heading ">Login</h1>
            <form>
              <div>
                <label htmlFor="email" className="label_auth">
                  Email Address
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
              <button className="sign_in">Sign in</button>
              <div className="check_forget mt-2">
                <div className="checkbox_field">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember" className="custom-checkbox">
                    Remember Me
                  </label>
                </div>
                <Link href="/forgot-password" passHref id="forget">
                  <p id="forgot">Forgot Password</p>
                </Link>
              </div>
              <div className="create_new_account">
                <hr />
                <Link href="/sign-up" id="sign_p">
                  <p className="text-center mt-2">Sign Up for a New Account</p>
                </Link>
                <hr />
              </div>
              <div className="logo_div mt-3">
                <img src="/assets/logo_header.png" alt="" className="logo" />
                <p id="head">AYA SIR G!</p>
                <p id="descri">YOUR TRUSTED EVERYWHERE</p>
              </div>
            </form>
          </div>
          <div className="col-lg-6 right_div welcom_div">
            <h1 className="welcom_heading">Welcome to Login</h1>
            <div className="btn_div">
              <p id="account">Don’t have an account?</p>

              <Link href="/sign-up" id="a_sign_up" passHref>
                <Button variant="outline-danger" className="sign_up mt-3">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
