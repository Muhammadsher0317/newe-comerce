import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline, IoStar } from "react-icons/io5";
import "./Sliderboxs.css";
import { baseUrl } from "../../service";
import { Link } from "react-router-dom";
function Sliderboxs({ items }) {
  return (
    <>
      {
        <Link to={`/productdetail/${items?.id}`}>
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

              <img
                className="clasterimgslar"
                src={`${baseUrl}${items?.pictures[0]}`}
                alt=""
              />
              <button className="addtocars">Add To Cart</button>
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
        </Link>
      }
    </>
  );
}

export default Sliderboxs;
