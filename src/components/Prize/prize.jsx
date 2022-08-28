import React from "react";
import "./prize.css";

import first from "./assets/first.svg";
import second from "./assets/second.svg";
import third from "./assets/third.svg";

const Prize = () => {
  return (
    <section className="container" id="prize">
      <h2 className="pl-10 text-xl text-white pb-10 pt-10">
        # Hackodisha Winner's
      </h2>

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
      <div className="nitr-prizes mt-16">
        <h2 className="pl-10 text-xl text-white pb-10">
          # Only for NIT Rourkela Students
        </h2>

        <div class="pricing-table">
          <div class="ptable-item">
            <div class="ptable-single">
              <div class="ptable-header">
                <div class="ptable-title">
                  <h2 className="text-[20px]">
                    Overall Runner up NIT Rourkela
                  </h2>
                </div>
                {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div> */}
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
            </div>
          </div>

          <div class="ptable-item featured-item">
            <div class="ptable-single">
              <div class="ptable-header">
                <div class="ptable-title">
                  <h2 className="text-[20px]">Overall Winner NIT Rourkela</h2>
                </div>
                {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={first} alt="first" />
                  </div>
                </div> */}
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
            </div>
          </div>

          <div class="ptable-item">
            <div class="ptable-single">
              <div class="ptable-header">
                <div class="ptable-title">
                  <h2 className="text-[20px]">
                    Best Beginner Team NIT Rourkela
                  </h2>
                </div>
                {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={third} alt="third" />
                  </div>
                </div> */}
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
            </div>
          </div>

          <div class="ptable-item featured-item">
            <div class="ptable-single">
              <div class="ptable-header">
                <div class="ptable-title">
                  <h2 className="text-[20px]">
                    To all NIT Rourkela Participants
                  </h2>
                </div>
                {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={first} alt="first" />
                  </div>
                </div> */}
              </div>
              <div class="ptable-body">
                <div class="ptable-description">
                  <ul>
                    <li>Sugarit food coupons</li>
                    {/* <li></li> */}
                    <li>free stickers</li>
                    <li>Discount Coupons</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          
                  
          
        </div>
        
      </div>














      <div className="nitr-prizes mt-16">
        <h2 className="pl-10 text-xl text-white pb-10">
          # For all Students
        </h2>

        <div class="pricing-table">
          <div class="ptable-item">
            <div class="ptable-single">
              <div class="ptable-header">
                <div class="ptable-title">
                  <h2 className="text-[20px]">
                    For All Students
                  </h2>
                </div>
                {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div> */}
              </div>
              <div class="ptable-body">
                <div class="ptable-description">
                  <ul>
                    
                    <li> 5-Year free upgrades for everyone else taskade </li>
                    <li>25% discount no starch press</li>
                    <li>discount vouchers interview buddy</li>
                    <li>1Password teams</li>
                    <li>90-day extended trial promo code for Balsamiq Cloud</li>
                    <li>Free domains from .xyz</li>
                    <li>20% discount Rosenfeld</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>                
       </div>

         
        <h2 className="pl-10 text-xl text-white pb-10">
          # Track Prizes
        </h2>
        <div class="pricing-table">

        
          <div class="ptable-item">
            <div class="ptable-single">
              <div class="ptable-header">
                <div class="ptable-title">
                  <h2 className="text-[20px]">
                  Best Domain Name from GoDaddy Registry
                  </h2>
                </div>
                {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div> */}
              </div>
              <div class="ptable-body">
                <div class="ptable-description">
                  <ul>
                    
                    <li> Best Domain Name from GoDaddy Registry </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>                
        {/* </div> */}
{/*         
        <div class="pricing-table"> */}
          <div class="ptable-item">
            <div class="ptable-single">
              <div class="ptable-header">
                <div class="ptable-title">
                  <h2 className="text-[20px]">
                  Most Creative Use of Twilio
                  </h2>
                </div>
                {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div> */}
              </div>
              <div class="ptable-body">
                <div class="ptable-description">
                  <ul>
                    
                    <li> "Twilio Swag Box GameGo Console" </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>                
        {/* </div> */}
{/*         
        <div class="pricing-table"> */}
          <div class="ptable-item">
            <div class="ptable-single">
              <div class="ptable-header">
                <div class="ptable-title">
                  <h2 className="text-[20px]">
                  Best Web Monetization Project
                  </h2>
                </div>
                {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div> */}
              </div>
              <div class="ptable-body">
                <div class="ptable-description">
                  <ul>
                    
                    <li>Portable Charger, Coil Pin & $60 Credit</li>
                    
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>                
        {/* </div> */}
{/*         
        <div class="pricing-table"> */}
          <div class="ptable-item">
            <div class="ptable-single">
              <div class="ptable-header">
                <div class="ptable-title">
                  <h2 className="text-[20px]">
                  Best Blockchain Project Using Hedera
                  </h2>
                </div>
                {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div> */}
              </div>
              <div class="ptable-body">
                <div class="ptable-description">
                  <ul>
                    
                    <li> Glorious Modular Compact Mechanical Keyboard </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>                
        {/* </div> */}
{/*         
        <div class="pricing-table"> */}
          <div class="ptable-item">
            <div class="ptable-single">
              <div class="ptable-header">
                <div class="ptable-title">
                  <h2 className="text-[20px]">
                  Most Creative Use of GitHub
                  </h2>
                </div>
                {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={second} alt="second" />
                  </div>
                </div> */}
              </div>
              <div class="ptable-body">
                <div class="ptable-description">
                  <ul>
                    
                    <li> GitHub Octocat Puzzle & Sticker bundle </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="ptable-item featured-item">
            <div class="ptable-single">
              <div class="ptable-header">
                <div class="ptable-title">
                  <h2 className="text-[20px]">Women's Track</h2>
                </div>
                {/* <div class="ptable-price">
                  <div className="prize-svg">
                    <img src={first} alt="first" />
                  </div>
                </div> */}
              </div>
              <div class="ptable-body">
                <div class="ptable-description">
                  <ul>
                    <li>
                      Cash Price <span className="cash-list"> &#8377;3000</span>
                    </li>
                    <li>Hackathon plan 6 months testmail </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>










        </div>

        









        
      </div>




      
    </section>
  );
};

export default Prize;
