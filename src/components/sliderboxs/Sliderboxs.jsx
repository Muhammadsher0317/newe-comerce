import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline, IoStar } from "react-icons/io5";
import "./Sliderboxs.css";
import { baseUrl } from "../../service";
function Sliderboxs({ items }) {
  return (
    <>
      {
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

            <img src={`${baseUrl}${items?.pictures[0]}`} alt="" />
            <button className="addtocarslaar">Add To Cart</button>
          </div>
          <div className="sliderbottom">
            <div className="titleslar">
              <h2>{items?.title.slice(0, 30)}</h2>
              <div className="ratingsx">
                <span>{items?.discount_price?.slice(0, 6)}so'm</span>
                <div className="stars">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <div className="p">{items?.stars}</div>
              </div>
            </div>
          </div>
          {console.log(items)}
        </div>
      }
    </>
  );
}

export default Sliderboxs;
