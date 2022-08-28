import React from "react";
import Logo from "../../assets/g2700.png";
import "./Header.css";
import Team from "../team/Team";
import { Link as Link1 } from "react-router-dom";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link, animateScroll as scroll } from "react-scroll";
import HackodishaIMG from "../../assets/logo.png";
import { Routes, Route } from "react-router-dom";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [navContExpanded, setNavContExpanded] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/team" element={<Team />}>
          {" "}
        </Route>
      </Routes>

      <section
        id="home"
        className="LandingPage container-center-horizontal sm:h-screen pb-10 "
      >
        <div className="overlap-group-container">
          <div
            className={
              navContExpanded
                ? "nav-cont2 navigation-container"
                : "nav3 navigation-container"
            }
          >
            <div className={isNavExpanded ? "Hidex" : "logo"}>
              <a href="#home">
                {" "}
                <img src={Logo} alt="No img" height="80px" width="80px" />
              </a>
              <a
                id="mlh-trust-badge"
                style={{
                  display: "block",
                  maxWidth: "200px",
                  minWidth: "120px",
                  position: "fixed",
                  right: "50px",
                  top: "-20px",
                  width: "10%",
                  zindex: "10000",
                  marginRight: "5px",
                }}
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
                  alt="Major League Hacking 2023 Hackathon Season"
                  style={{ width: "100%" }}
                />
              </a>
            </div>
            <h2 className={isNavExpanded ? "logowritten" : "Hide"}>
              HackOdisha 2.0
            </h2>
            <div className={isNavExpanded ? "nav-menu w-nav-menu" : "nav-menu"}>
              <ul>
                <li>
                  <Link smooth={true} to="Home">
                    Home
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link smooth={true} to="About">
                    About
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link smooth={true} to="Stats">
                    Statistics
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link smooth={true} to="Tracks">
                    Tracks
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link smooth={true} to="Sponsors">
                    Sponsors
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link smooth={true} to="Prizes">
                    Prizes
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link smooth={true} to="Timeline">
                    Events
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link1 to="/team">
                    {/* <Link smooth={true} >
                  Team
                </Link> */}
                    Partners
                  </Link1>
                </li>
                {/* <div className={isNavExpanded?'disp':'Hide'}> */}
                <li>
                  {" "}
                  <Link smooth={true} to="Faq">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="hamburger open absolute"
              onClick={() => {
                setNavContExpanded(!navContExpanded);
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <Hamburger />
            </div>
          </div>
        </div>

        <main
          className="mt-10 mx-auto lg:ml-32 max-w-[800px] px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8"
          style={{ position: "relative" }}
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-6xl tracking-tight font-bold text-slate-100 sm:text-5xl md:text-6xl">
              <p className="block fontx">HACK</p>{" "}
              <p className="block text-[#ea5f3f]  xl:inline">ODISHA 2.0</p>
            </h1>
            <p className="mt-3 text-base text-slate-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Take charge of your ideas and make a difference with real-life
              solutions for Odisha at HackOdisha 2.0.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="https://hackodisha2022.devfolio.co/"
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10 btn-hover color-2 "
                >
                  Register with Devfolio
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="https://bit.ly/CommunityHO"
                  rel="noreferrer"
                  target="_blank"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-100 md:py-4 md:text-lg md:px-10 btn-hover color-1"
                >
                  Join Us as Partner
                </a>
              </div>
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow ">
                <a
                  href="https://forms.gle/iqGDkwR6PZ2kaDFM9"
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10 btn-hover color-3"
                >
                  Sponsor Us
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="https://discord.gg/WWbrGhbtmV"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-100 md:py-4 md:text-lg md:px-10 btn-hover color-4"
                >
                  Join With Discord
                </a>
              </div>
            </div>
          </div>

          <div className="img-box">
            <img src={HackodishaIMG} alt="Hackodisha" />
          </div>
        </main>
      </section>
    </>
  );
};

// const style = {
//   LandingPageSVG: {
//     backgroundImage: `url(${LandingPageSVG})`,
//   }
// }

export default Header;
