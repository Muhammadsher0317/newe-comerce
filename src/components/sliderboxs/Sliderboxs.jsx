import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline, IoStar } from "react-icons/io5";
import "./Sliderboxs.css";
function Sliderboxs() {
  return (
    <>
      <div className="sliderboxs">
        <div className="sliderboxtop">
          <div className="rotateplace">
            <div className="rotetarte">
              <CiHeart />
            </div>
            <div className="rotetarte">
              <IoEyeOutline />
            </div>
          </div>
          <img src="/imgs/boximg.svg" alt="" />
          <button className="addtocars">Add To Cart</button>
        </div>
        <div className="sliderbottom">
          <div className="titleslar">
            <h2>Breed Dry Dog Food</h2>
            <div className="ratingsx">
              <span>$100</span>
              <div className="stars">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>
              <div className="p">(35)</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sliderboxs;
