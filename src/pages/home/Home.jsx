import React from "react";
import SlidersHome from "../../components/slider/SlidersHome";
import "./Home.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Sliderboxs from "../../components/sliderboxs/Sliderboxs";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Flashslider from "../../components/flashslider/Flashslider";
function Home() {
  return (
    <>
      <div className="homeentrancce">
        <div className="container">
          <div className="homentrance_left">
            <p>Woman’s Fashion</p>
            <p>Woman’s Fashion</p>
            <p>Woman’s Fashion</p>
            <p>Woman’s Fashion</p>
            <p>Woman’s Fashion</p>
            <p>Woman’s Fashion</p>
            <p>Woman’s Fashion</p>
            <p>Woman’s Fashion</p>
            <p>Woman’s Fashion</p>
          </div>
          <div className="homeentrance_right">
            <SlidersHome />
          </div>
        </div>
      </div>
      <div className="Todayproduct">
        <div className="container">
          <div className="hlars">
            <div className="reds"></div> <h1>Today’s</h1>
          </div>
          <div className="flashlar">
            <div className="flashlarstar">
              <h1>Flash Sales</h1>
              <div className="dayscounter">
                <div className="dayscountertop">
                  <div className="days">
                    <p>Days</p>
                    <span>03</span>
                  </div>
                  <div className="dropins">:</div>

                  <div className="hours">
                    <p>Hours</p>
                    <span>23</span>
                  </div>
                  <div className="dropins">:</div>
                  <div className="hours">
                    <p>Minutes</p>
                    <span>19</span>
                  </div>
                  <div className="dropins">:</div>
                  <div className="hours">
                    <p>Seconds</p>
                    <span>56</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="btnslarhome">
              <button>
                <GoArrowLeft />
              </button>
              <button>
                <GoArrowRight />
              </button>
            </div>
          </div>
          <div className="flashboxslar">
            <Flashslider />
          </div>
        </div>
      </div>

      <div className="Todayproduct_one">
        <div className="container">
          <div className="hlars">
            <div className="reds"></div> <h1>Categories</h1>
          </div>
          <div className="flashlar">
            <div className="flashlarstar">
              <h1>Browse By Category</h1>
            </div>

            <div className="btnslarhome">
              <button>
                <GoArrowLeft />
              </button>
              <button>
                <GoArrowRight />
              </button>
            </div>
          </div>
          <div className="categoryslar">
            <div className="phones">
              <img src="/imgs/phone.svg" alt="" />
              <h2>Phones</h2>
            </div>

            <div className="phones">
              <img src="/imgs/phone.svg" alt="" />
              <h2>Phones</h2>
            </div>

            <div className="phones">
              <img src="/imgs/phone.svg" alt="" />
              <h2>Phones</h2>
            </div>

            <div className="phones">
              <img src="/imgs/phone.svg" alt="" />
              <h2>Phones</h2>
            </div>
            <div className="phones">
              <img src="/imgs/phone.svg" alt="" />
              <h2>Phones</h2>
            </div>
            <div className="phones">
              <img src="/imgs/phone.svg" alt="" />
              <h2>Phones</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="Todayproduct">
        <div className="container">
          <div className="hlars">
            <div className="reds"></div> <h1>This Month</h1>
          </div>
          <div className="flashlar">
            <div className="flashlarstar">
              <h1>Best Selling Products</h1>
            </div>

            <div className="btnslarhome">
              <button className="viewall">View All</button>
            </div>
          </div>
          <div className="flashboxslar">
            <Flashslider />
          </div>
        </div>
      </div>

      <div className="encanceyourcolonka">
        <div className="container">
          <div className="leftsite">
            <h1>Categories</h1>
            <h2>Enhance Your Music Experience</h2>
            <div className="dayslar">
              <div className="dayscounter">
                <div className="dayscountertop">
                  <button>
                    <h1> 23</h1>
                    <h2>Hours</h2>
                  </button>
                  <button>
                    <h1> 05</h1>
                    <h2>Days</h2>
                  </button>
                  <button>
                    <h1> 59</h1>
                    <h2>Minutes</h2>
                  </button>
                  <button>
                    <h1> 35</h1>
                    <h2>Seconds</h2>
                  </button>
                </div>
              </div>
            </div>
            <div className="buybutton">
              <button>Buy Now!</button>
            </div>
          </div>
          <div className="rightimg">
            <img src="/imgs/kalonka.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="products_page">
        <div className="container">
          <div className="hlars">
            <div className="reds"></div> <h1>Our Products</h1>
          </div>
          <div className="exportslar">
            <h2>Explore Our Products</h2>
            <div className="exportbtns">
              <button>
                <FaArrowLeft />
              </button>
              <button>
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="explorecards">
            <Sliderboxs />
            <Sliderboxs />
            <Sliderboxs />
            <Sliderboxs />
            <Sliderboxs />
            <Sliderboxs />
            <Sliderboxs />
            <Sliderboxs />
          </div>
          <button className="addviewlar">View All Products</button>
        </div>
      </div>

      <div className="arriwals">
        <div className="container">
          <div className="hlars">
            <div className="reds"></div> <h1>Featured</h1>
          </div>
          <div className="exportslar_one">
            <h2>New Arrival</h2>
          </div>
          <div className="imgcards">
            <div className="imgleft">
              <div className="positionbutton">
                <h2>PlayStation 5</h2>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="imgright">
              <div className="imgtop">
                <img src="/imgs/Frame 685imgright.svg" alt="" />
              </div>
              <div className="imgrightright">
                <img src="/imgs/Frame 686dslkmksmdf;klam.svg" alt="" />
                <img src="/imgs/gucci.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="deliveredtaxis">
        <div className="container">
          <div className="fastdelevorerd">
            <img  className="fastedeleiverimg" src="/imgs/icon-delivery.svg" alt="" />
            <h2>FREE AND FAST DELIVERY</h2>
            <h3>Free delivery for all orders over $140</h3>
          </div>

           <div className="fastdelevorerd">
            <img  className="fastedeleiverimg" src="/imgs/icon-delivery.svg" alt="" />
            <h2>FREE AND FAST DELIVERY</h2>
            <h3>Free delivery for all orders over $140</h3>
          </div>

           <div className="fastdelevorerd">
            <img  className="fastedeleiverimg" src="/imgs/icon-delivery.svg" alt="" />
            <h2>FREE AND FAST DELIVERY</h2>
            <h3>Free delivery for all orders over $140</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
