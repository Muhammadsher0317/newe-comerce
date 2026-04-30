  import { Swiper, SwiperSlide } from "swiper/react";
  import "./Flashslider.css";
  import { FreeMode, Pagination } from "swiper/modules";
  import { CiHeart } from "react-icons/ci";
  import { IoEyeOutline, IoStar } from "react-icons/io5";
  import { Link } from "react-router-dom";
  import Cardslarone from "../carfdslar/Cardslarone";
  import { DataContext } from "../../App";
  import { useContext } from "react";
  function Flashslider() {
    const { productData } = useContext(DataContext);
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
          {productData?.slice(0,6)?.map((item) => {
            return (
              <SwiperSlide className="onebox">
                <Cardslarone item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  }

  export default Flashslider;
