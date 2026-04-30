import { CiHeart } from "react-icons/ci";
import { IoEyeOutline, IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import { baseUrl } from "../../service";
import "./Cardsonce.css";
function Cardslarone({ item }) {
  return (
    <>
      <Link to={`/productdetail/${item?.id}`}>
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
              src={`${baseUrl}${item?.pictures?.[0]}`}
              alt=""
            />
            <button className="addtocars">Add To Cart</button>
          </div>
          <div className="sliderbottom">
            <div className="titleslar">
              <h2>{item.title.slice(0, 30)}</h2>
              <div className="ratingsx">
                <div className="boxnarlari">
                  <span className="cuurentprice">{item.discount_price}</span>
                  <span className="pastproce">{item.price}</span>
                </div>

                <div className="starlsaerda">
                  <div className="stars">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                  </div>
                  <div className="p">{item.stars}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Cardslarone;
