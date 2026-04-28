import React from "react";
import Boxwishlist from "../../components/wishlist/Boxwishlist";
import "./Wishlistlar.css";
import Wistlejustfor from "../../components/wistlejustfor/Wistlejustfor";
function Wishlist() {
  return (
    <>
      <div className="sihlistlar">
        <div className="container">
          <div className="wishlistlartop">
            <h2>Wishlist (4)</h2>
            <button>Move All To Bag</button>
          </div>
          <div className="wishlistcards">
            <Boxwishlist />
             <Boxwishlist />
              <Boxwishlist />
               <Boxwishlist />
          </div>
        </div>
      </div>

      <div className="justforyou">
        <div className="container">
          <div className="justfottop">
            <div className="hlars">
              <div className="reds"></div> <h1>Today’s</h1>
            </div>
            <button>See All</button>
          </div>

          <div className="justforcards">
            <Wistlejustfor/>
            <Wistlejustfor/>
            <Wistlejustfor/>
            <Wistlejustfor/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
