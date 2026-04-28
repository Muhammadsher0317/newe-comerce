import React from "react";
import "./Account.css";
function Account() {
  return (
    <>
      <div className="acountslar">
        <div className="container">
          <div className="acoounttop">
            <div className="myaccountslar">
              <p>Home</p>/<span>My Account</span>
            </div>
            <h1>
              Welcome! <span> Md Rimel</span>
            </h1>
          </div>
          <div className="myaccountmidd">
            <div className="myaccounlefts">
              <h1>Manage My Account</h1>
              <div className="servie_accounts">
                <h3>My Profile</h3>
                <h3>Address Book</h3>
                <h3>My Payment Options</h3>
              </div>
              <h1>My Orders</h1>
              <div className="servie_accounts">
                <h3>My Returns</h3>
                <h3>My Cancellations</h3>
              </div>
              <h1>My WishList</h1>
            </div>
            <div className="myaccounright">
              <h2 className="editlarright">Edit Your Profile</h2>
              <div className="firstandlastnames">
                <div className="firstnames">
                  <h2>First Name</h2>
                  <input type="text" placeholder="Md" />
                </div>
                <div className="firstnames">
                  <h2>Last Name</h2>
                  <input type="text" placeholder="Rimel" />
                </div>
              </div>

              <div className="firstandlastnames">
                <div className="firstnames">
                  <h2>Email</h2>
                  <input type="email" placeholder="rimel1111@gmail.com" />
                </div>
                <div className="firstnames">
                  <h2>Address</h2>
                  <input
                    type="text"
                    placeholder="Kingston, 5236, United State"
                  />
                </div>
              </div>
              <div className="paswordchanges">
                <h2>Password Changes</h2>
                <div className="currenpaswords">
                  <input type="text" placeholder="Current Passwod" />
                </div>

                <div className="currenpaswords">
                  <input type="text" placeholder="New Passwod" />
                </div>

                <div className="currenpaswords">
                  <input type="text" placeholder="Confirm New Passwod" />
                </div>
              </div>
              <div className="myacccountrightbtns">
                <button>Cancel</button>
                <button>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
