import React from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="nav_top">
          <div className="rows">
            <p> Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
           
            <div className="navend">
              <select className="selection"  name="" id="">
                <option value="">English</option>
              </select>
            </div>
          </div>
        </div>
        <div className="nav_btomo">
          <img src="/imgs/Logo.svg" alt="" />
          <ul className="links">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Sign Up</NavLink>
            </li>
          </ul>
          <div className="navleft">
            <form className="form" action="">
              What are you looking for?
              <button>
                <CiSearch />
              </button>
            </form>
            <CiHeart />
            <CiShoppingCart />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
