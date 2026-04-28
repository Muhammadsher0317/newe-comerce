import React, { useState } from "react";
import { CiHeart, CiLogout, CiSearch, CiShoppingCart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
function Navbar() {
  const [modal, setmodal] = useState(false);
  return (
    <>
      <nav>
        <div className="nav_top">
          <div className="rows">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>

            <div className="navend">
              <select className="selection" name="" id="">
                <option value="">English</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="nav_btomo">
            <img src="/imgs/Logo.svg" alt="" />
            <ul className="links">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink>About</NavLink>
              </li>
              <li>
                <NavLink to={"./signup"}>Sign Up</NavLink>
              </li>
            </ul>
            <div className="navleft">
              <form className="form" action="">
                What are you looking for?
                <button>
                  <CiSearch />
                </button>
              </form>

              <NavLink to={"./wishlist"}>
                <CiHeart />
              </NavLink>
              <NavLink to={"./cart"}>
                <CiShoppingCart />
              </NavLink>

              <button
                className="userslar"
                onClick={() => {
                  if (modal === false) {
                    setmodal(true);
                  } else {
                    setmodal(false);
                  }
                }}
              >
                <FaUser />
              </button>
            </div>
          </div>

          {modal && (
            <div className="modal">
              <div className="usericons">
                <Link className="usericons"  to={"/acount"}>
                  <FaUser /> <h2>Manage My Account</h2>
                </Link>
              </div>
              <div className="usericons">
                <FaBagShopping /> <h2>My Order</h2>
              </div>
              <div className="usericons">
                <MdOutlineCancel /> <h2>My Cancellations</h2>
              </div>

              <div className="usericons">
                <IoStarOutline /> <h2>My Reviews</h2>
              </div>

              <div className="usericons">
                <CiLogout /> <h2>Logout</h2>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
