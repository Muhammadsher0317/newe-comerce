import React, { useContext, useState } from "react";
import "./Register.css";
import { loginfunction } from "../../service";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../App";

function Register() {
  const [email, setEmail] = useState();
  const [pasword, setPaswword] = useState();
  const navigate = useNavigate();
  const {settokenslar}=useContext(DataContext)
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

            <form
              onSubmit={(e) => {
                e.preventDefault();
                loginfunction(pasword, email).then((info) => {
                  if (info?.access) {
                    console.log(info)
                    alert("royhatdan otdingiz");

                   settokenslar(info.access)
                    localStorage.setItem("token",info.access)
                    navigate("/");

                  } else {
                    alert("hatolilar bor");
                  }
                });
              }}
              className="nameslardan"
            >
              <div className="name">
                <input
                  onInput={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  placeholder="Email or Phone Number"
                />
              </div>

              <div className="name">
                <input
                  onInput={(e) => {
                    setPaswword(e.target.value);
                  }}
                  type="text"
                  placeholder="Password"
                />
              </div>

              <div className="loginforgetbtn">
                <button>Log In</button>
                <button>Forget Password?</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
