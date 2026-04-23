import React from "react";
import "./Login.css";
import { Link, Links, NavLink } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="loginentrance">
        <div className="container">
          <div className="logiinleft">
            <img src="/imgs/phonewithcrt.svg" alt="" />
          </div>
          <div className="loginright">
            <h1>Create an account</h1>
            <p>Enter your details below</p>
            <div className="name">
              <input type="text" placeholder="Name" />
            </div>
            <div className="name">
              <input type="text" placeholder="Email or Phone Number" />
            </div>

            <div className="name">
              <input type="text" placeholder="Password" />
            </div>

            <button className="creationaccount">Create Account</button>
            <button className="iconswithimg">
              <img src="/imgs/Icon-Google.svg" alt="" /> Sign up with Google
            </button>
            <div className="entranceaccoutn">
              <p>Already have account?</p>
              <NavLink to={"/register"}>
                <button>Log in</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
