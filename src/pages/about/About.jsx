import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <div className="aboutlar">
        <div className="container">
          <div className="aboutslarrow">
            <h2>Home/</h2> <h4>About</h4>
          </div>
          <div className="aboutslarcards">
            <div className="aboutleftlsa">
              <h1>Our Story</h1>
              <div className="storylarmedium">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </div>
              <div className="storleftbottom">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </div>
            </div>
            <div className="aboutlarright">
              <img src="/imgs/girlsimg.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="aboutlarcardsrow">
        <div className="container">
          <div className="aboutlarbox">
            <img src="/imgs/Services.svg" alt="" />

            <h2>10.5k </h2>
            <p>Sallers active our site</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
