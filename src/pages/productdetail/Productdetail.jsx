import React, { useEffect, useState } from "react";
import "./Productdetail.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Flashslider from "../../components/flashslider/Flashslider";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { baseUrl, getproductdetail } from "../../service";
function Productdetail() {
  const [info, setinfo] = useState();
  const { id } = useParams();

  useEffect(() => {
    getproductdetail(id)?.then((item) => {
      setinfo(item);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }, [id]);

  return (
    <>
      <div className="descriptionitems">
        <div className="container">
          {console.log(info)}
          <div className="productdetailleft">
            <div className="smallimg">
              <img src={`${baseUrl}${info?.pictures[0]?.file}`} alt="" />
              <img src={`${baseUrl}${info?.pictures[1]?.file}`} alt="" />
              <img src={`${baseUrl}${info?.pictures[2]?.file}`} alt="" />
              <img src={`${baseUrl}${info?.pictures[3]?.file}`} alt="" />
            </div>
            <div className="mainimg">
              <img src={`${baseUrl}${info?.pictures[0]?.file}`} alt="" />
            </div>
          </div>
          <div className="productdetailright">
            <h1>{info?.title.slice(0, 50)}</h1>
            <div className="rowstars">
              <div className="startslar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>{info?.review_quantity}</p>

              <span>In Stock</span>
            </div>
            <div className="detailprice">{info?.price}so'm</div>
            <p className="detaildescription">
              {info?.description.slice(0, 130)}
            </p>
            <div className="colorslar">
              Colours: <button></button> <button></button>
            </div>
            <div className="sixelars">
              <h2>Size:</h2>
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
            <div className="itemnubers">
              <div className="numberdetails">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
              <button className="buyitemslarda">Buy Now</button>
              <button className="hearticonslar">
                <CiHeart />
              </button>
            </div>
            <div className="freedelivered">
              <div className="deleveriditems">
                <img src="/imgs/icon-delivery (1).svg" alt="" />
                <div className="deliveredslar">
                  <h4>Free Delivery</h4>
                  <h2>Enter your postal code for Delivery Availability</h2>
                </div>
              </div>

              <div className="deleveriditems">
                <img src="/imgs/Icon-return.svg" alt="" />
                <div className="deliveredslar">
                  <h4>Return Delivery</h4>
                  <h2>Free 30 Days Delivery Returns. Detailsb</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Todayproduct">
        <div className="container">
          <div className="hlars">
            <div className="reds"></div> <h1>Related Item</h1>
          </div>
          <div className="flashboxslar">
            <Flashslider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Productdetail;
