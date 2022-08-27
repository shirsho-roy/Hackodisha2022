import React from "react";
import "./prize.css";

import first from "./assets/first.svg";
import second from "./assets/second.svg";
import third from "./assets/third.svg";

const Prize = () => {
  return (
    <section className="container" id="prize">
      <div class="pricing-table">
        <div class="ptable-item">
          <div class="ptable-single">
            <div class="ptable-header">
              <div class="ptable-title">
                <h2>Silver</h2>
              </div>
              <div class="ptable-price">
                <div className="prize-svg">
                  <img src={second} alt="second" />
                </div>
              </div>
            </div>
            <div class="ptable-body">
              <div class="ptable-description">
                <ul>
                  <li>
                    Cash Price <span className="cash-list">&#8377;5000</span>
                  </li>
                  <li>Goodies & Tshirts </li>
                  <li>Other prices worth XX</li>
                  <li>Discount Coupons</li>
                </ul>
              </div>
            </div>
            {/* <div class="ptable-footer">
              <div class="ptable-action">
                <a href="">Know More</a>
              </div>
            </div> */}
          </div>
        </div>

        <div class="ptable-item featured-item">
          <div class="ptable-single">
            <div class="ptable-header">
              <div class="ptable-title">
                <h2>Gold</h2>
              </div>
              <div class="ptable-price">
                <div className="prize-svg">
                  <img src={first} alt="first" />
                </div>
              </div>
            </div>
            <div class="ptable-body">
              <div class="ptable-description">
                <ul>
                  <li>
                    Cash Price <span className="cash-list"> &#8377;7000</span>
                  </li>
                  <li>Goodies & Tshirts </li>
                  <li>Other prices worth XX</li>
                  <li>Discount Coupons</li>
                </ul>
              </div>
            </div>
            {/* <div class="ptable-footer">
              <div class="ptable-action">
                <a href="">Know More</a>
              </div>
            </div> */}
          </div>
        </div>

        <div class="ptable-item">
          <div class="ptable-single">
            <div class="ptable-header">
              <div class="ptable-title">
                <h2>Bronze</h2>
              </div>
              <div class="ptable-price">
                <div className="prize-svg">
                  <img src={third} alt="third" />
                </div>
              </div>
            </div>
            <div class="ptable-body">
              <div class="ptable-description">
                <ul>
                  <li>
                    Cash Price <span className="cash-list">&#8377;3000</span>
                  </li>
                  <li>Goodies & Tshirts </li>
                  <li>Other prices worth XX</li>
                  <li>Discount Coupons</li>
                </ul>
              </div>
            </div>
            {/* <div class="ptable-footer">
              <div class="ptable-action">
                <a href="">Know More</a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prize;
