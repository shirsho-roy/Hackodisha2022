import React from "react";
import "./sponsors.css";
import {
  bronzeSponsors,
  platinumSponsors,
  goldSponsors,
  silverSponsors,
} from "./sponsorData";

const Platinum = ({ logo, link, alt }) => {
  return (
    <div className="platinum_box">
      <a href={link} target="_blank" rel="noreferrer">
        <img className="logo_large" src={logo} alt={alt} />
      </a>
    </div>
  );
};
const PlatinumSponsors = () => {
  return (
    <section id="Sponsors">
      <div className="container">
        <div className="platinum">
          <h1 className="sponsors_heading"> Platinum Sponsors </h1>
          <div className="sponsor_list_platinum">
            {platinumSponsors.map((data, idx) => {
              return (
                <Platinum
                  logo={data.image}
                  link={data.link}
                  key={idx}
                  alt={data.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Gold = ({ logo, link, alt }) => {
  return (
    <div className="gold_box">
      <a href={link} target="_blank" rel="noreferrer">
        <img className="logo_large" src={logo} alt={alt} />
      </a>
    </div>
  );
};
const GoldSponsors = () => {
  return (
    <section id="Sponsors">
      <div className="container">
        <div className="gold">
          <h1 className="sponsors_heading"> Gold Sponsors </h1>
          <div className="sponsor_list_gold">
            {goldSponsors.map((data, idx) => {
              return (
                <Gold
                  logo={data.image}
                  link={data.link}
                  key={idx}
                  alt={data.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Silver = ({ logo, link, alt }) => {
  return (
    <div className="silver_box">
      <a href={link} target="_blank" rel="noreferrer">
        <img className="logo_large" src={logo} alt={alt} />
      </a>
    </div>
  );
};
const SilverSponsors = () => {
  return (
    <section id="Sponsors">
      <div className="container">
        <div className="silver">
          <h1 className="sponsors_heading"> Silver Sponsors </h1>
          <div className="sponsor_list_silver">
            {silverSponsors.map((data, idx) => {
              return (
                <Silver
                  logo={data.image}
                  link={data.link}
                  key={idx}
                  alt={data.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Bronze = ({ logo, link, alt }) => {
  return (
    <div className="platinum_box">
      <a href={link} target="_blank" rel="noreferrer">
        <img className="logo_large" src={logo} alt={alt} />
      </a>
    </div>
  );
};
const BronzeSponsors = () => {
  return (
    <section id="Sponsors">
      <div className="container">
        <div className="bronze">
          <h1 className="sponsors_heading"> Bronze Sponsors </h1>
          <div className="sponsor_list_bronze">
            {bronzeSponsors.map((data, idx) => {
              return (
                <Bronze
                  logo={data.image}
                  link={data.link}
                  key={idx}
                  alt={data.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { PlatinumSponsors, GoldSponsors, SilverSponsors, BronzeSponsors };
