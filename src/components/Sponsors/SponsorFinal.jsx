import { React, useState, useEffect } from "react";
import SponsorsMap from "./SponsorsMap";
import { gsap } from "gsap";
function Scroller() {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      let winScroll = document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let PageSize = height / 14;
      if (winScroll > 7 * PageSize) {
        winScroll -= 7 * PageSize;
      }
      height = 5 * PageSize;
      console.log(winScroll);
      console.log(height);
      const scrolled = (winScroll / height) * 100;
      setScrollTop(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrollTop;
}

function Sponsers() {
  useEffect(() => {
    gsap.to("#loader", {
      display: "none",
      transition: "0s",
      opacity: 0,
      scrollTrigger: {
        trigger: "#stats",
        start: "bottom bottom",
      },
    });
    gsap.to("#loader", {
      opacity: 1,
      display: "block",
      ease: "none",
      transition: "0s",
      scrollTrigger: {
        trigger: "#Sponser",
        start: "top top",
      },
    });
    gsap.to("#loader", {
      opacity: 0,
      display: "none",
      transition: "0s",
      scrollTrigger: {
        trigger: "#footer",
        start: "top bottom",
      },
    });
  });
  return (
    <div>
      <div></div>
      <div className="">
        <div>
          <div id="Sponser" className="">
            <SponsorsMap></SponsorsMap>
          </div>
          <div
            id="loader"
            className=" opacity-0 sticky mx-[10vw]  lg:bottom-[15vh] md:bottom-[11vh] left-[10vw] right-[10vw] flex flex-col"
          >
            <div className="lg:block hidden box-border w-[80vw] h-[15px] border-solid rounded-[20px] z-1 border-white  border-[3px] overflow-hidden ">
              <div
                style={{ width: `${Scroller()}%` }}
                className="bg-white h-[20px]  border-[3px]  "
              ></div>
            </div>
            <div
              style={{}}
              className="lg:flex hidden flex-row items-end text-white text-xl"
            >
              <p className=" basis-1/5">Platinum Sponsors</p>
              <p className=" basis-1/5">Gold Sponsors</p>
              <p className=" basis-1/5">Silver Sponsors</p>
              <p className=" basis-1/5">Bronze Sponsors</p>
              <p className=" basis-1/5">Partners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function SponserFinal() {
  return (
    <div className="max-w-[100vw]">
      <Sponsers></Sponsers>
    </div>
  );
}

export default SponserFinal;
