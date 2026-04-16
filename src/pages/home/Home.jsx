import React from "react";
import SlidersHome from "../../components/slider/SlidersHome";
import "./Home.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Sliderboxs from "../../components/sliderboxs/Sliderboxs";
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
              <img src="/imgs/Frame 684img.svg" alt="" />
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
    </>
  );
}

export default Home;
