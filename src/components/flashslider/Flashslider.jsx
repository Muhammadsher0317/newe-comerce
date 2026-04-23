import { Swiper, SwiperSlide } from "swiper/react";
import "./Flashslider.css";
import { FreeMode, Pagination } from "swiper/modules";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline, IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";
function Flashslider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiperpkpjasd"
      >
        

        <SwiperSlide className="onebox">
          <Link to={"/productdetail"}>
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
                <img src="/imgs/plastation.svg" alt="" />

                <button className="addtocars">Add To Cart</button>
              </div>
              <div className="sliderbottom">
                <div className="titleslar">
                  <h2>Breed Dry Dog Food</h2>
                  <div className="ratingsx">
                    <div className="boxnarlari">
                      <span className="cuurentprice">$120</span>
                      <span className="pastproce">$160</span>
                    </div>

                    <div className="starlsaerda">
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
            </div>
          </Link>
        </SwiperSlide>
          <SwiperSlide className="onebox">
          <Link to={"/productdetail"}>
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
                <img src="/imgs/plastation.svg" alt="" />

                <button className="addtocars">Add To Cart</button>
              </div>
              <div className="sliderbottom">
                <div className="titleslar">
                  <h2>Breed Dry Dog Food</h2>
                  <div className="ratingsx">
                    <div className="boxnarlari">
                      <span className="cuurentprice">$120</span>
                      <span className="pastproce">$160</span>
                    </div>

                    <div className="starlsaerda">
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
            </div>
          </Link>
        </SwiperSlide>
          <SwiperSlide className="onebox">
          <Link to={"/productdetail"}>
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
                <img src="/imgs/plastation.svg" alt="" />

                <button className="addtocars">Add To Cart</button>
              </div>
              <div className="sliderbottom">
                <div className="titleslar">
                  <h2>Breed Dry Dog Food</h2>
                  <div className="ratingsx">
                    <div className="boxnarlari">
                      <span className="cuurentprice">$120</span>
                      <span className="pastproce">$160</span>
                    </div>

                    <div className="starlsaerda">
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
            </div>
          </Link>
        </SwiperSlide>
          <SwiperSlide className="onebox">
          <Link to={"/productdetail"}>
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
                <img src="/imgs/plastation.svg" alt="" />

                <button className="addtocars">Add To Cart</button>
              </div>
              <div className="sliderbottom">
                <div className="titleslar">
                  <h2>Breed Dry Dog Food</h2>
                  <div className="ratingsx">
                    <div className="boxnarlari">
                      <span className="cuurentprice">$120</span>
                      <span className="pastproce">$160</span>
                    </div>

                    <div className="starlsaerda">
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
            </div>
          </Link>
        </SwiperSlide>

       
      </Swiper>
    </>
  );
}

export default Flashslider;
