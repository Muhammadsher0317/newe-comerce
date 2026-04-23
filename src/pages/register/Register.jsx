import React from "react";
import "./Register.css"
function Register() {
  return (
    <>
      <div className="loginentrance">
        <div className="container">
          <div className="logiinleft">
            <img src="/imgs/phonewithcrt.svg" alt="" />
          </div>
          <div className="loginright">
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>

            <div className="nameslardan">
              <div className="name">
                <input type="text" placeholder="Email or Phone Number" />
              </div>

              <div className="name">
                <input type="text" placeholder="Password" />
              </div>
            </div>

            <div className="loginforgetbtn">
              <button>Log In</button>
              <button>Forget Password?</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
