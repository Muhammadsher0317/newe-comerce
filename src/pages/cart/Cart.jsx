import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
function Cart() {
  return (
    <>
      <div className="cart">
        <div className="container">
          <div className="carttop">
            <p>
              Home / <span> Cart</span>
            </p>
          </div>
          <div className="cartbottom">
            <h2>Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Subtotal</h2>
          </div>
          <div className="cards">
            <div className="cards_row">
              <div className="imgwithtitle">
                <img src="/imgs/monitors.svg" alt="" />
                <h2>LCD Monitor</h2>
              </div>
              <span className="boxpricelar">$650</span>
              <span className="counthings">2</span>
              <span className="subtotals">$650</span>
            </div>

            <div className="cards_row">
              <div className="imgwithtitle">
                <img src="/imgs/monitors.svg" alt="" />
                <h2>LCD Monitor</h2>
              </div>
              <span className="boxpricelar">$650</span>
              <span className="counthings">2</span>
              <span className="subtotals">$650</span>
            </div>
            <div className="cards_row">
              <div className="imgwithtitle">
                <img src="/imgs/monitors.svg" alt="" />
                <h2>LCD Monitor</h2>
              </div>
              <span className="boxpricelar">$650</span>
              <span className="counthings">2</span>
              <span className="subtotals">$650</span>
            </div>
            <div className="cards_row">
              <div className="imgwithtitle">
                <img src="/imgs/monitors.svg" alt="" />
                <h2>LCD Monitor</h2>
              </div>
              <span className="boxpricelar">$650</span>
              <span className="counthings">2</span>
              <span className="subtotals">$650</span>
            </div>

            <div className="cards_row">
              <div className="imgwithtitle">
                <img src="/imgs/monitors.svg" alt="" />
                <h2>LCD Monitor</h2>
              </div>
              <span className="boxpricelar">$650</span>
              <span className="counthings">2</span>
              <span className="subtotals">$650</span>
            </div>

            <div className="cards_row">
              <div className="imgwithtitle">
                <img src="/imgs/monitors.svg" alt="" />
                <h2>LCD Monitor</h2>
              </div>
              <span className="boxpricelar">$650</span>
              <span className="counthings">2</span>
              <span className="subtotals">$650</span>
            </div>

            <div className="cards_row">
              <div className="imgwithtitle">
                <img src="/imgs/monitors.svg" alt="" />
                <h2>LCD Monitor</h2>
              </div>
              <span className="boxpricelar">$650</span>
              <span className="counthings">2</span>
              <span className="subtotals">$650</span>
            </div>

            <div className="cards_row">
              <div className="imgwithtitle">
                <img src="/imgs/monitors.svg" alt="" />
                <h2>LCD Monitor</h2>
              </div>
              <span className="boxpricelar">$650</span>
              <span className="counthings">2</span>
              <span className="subtotals">$650</span>
            </div>
          </div>
          <div className="cardsbtns">
            <button>Return To Shop</button>
            <button>Update Cart</button>
          </div>

          <div className="cuponslar">
            <div className="couponleft">
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>
            <div className="coupenright">
              <h1>Cart Total</h1>
              <div className="subtotal">
                <h2>Subtotal:</h2>
                <span>$1750</span>
              </div>

              <div className="subtotal">
                <h2>Shipping::</h2>
                <span>Free</span>
              </div>

              <div className="subtotal">
                <h2>Total:</h2>
                <span>$1750</span>
              </div>
              <div className="checkoutout">
                <Link to={"/checkout"}>
                  <button>Procees to checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
