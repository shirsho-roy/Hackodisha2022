import React from "react";
import AboutUsSVG from "../../assets/AboutUsSVG.svg";
const style = {
  AboutUsSVG: {
    backgroundImage: `url('${AboutUsSVG}')`,
  },
};
export default function About() {
  return (
    <secion id="About">
    <div className="bg-gradient-to-t from-gray-900 to-[#1d072f]  w-[100%]">
      <div className=" text-3xl lg:text-5xl ml-[5%] lg:ml-[10%] xl:ml-[7%] pt-40 mb-12 text-white tracking-normal font-medium">
        About Us
      </div>
      <div className="lg:flex pb-8 ">
        <div className="border-[3px] border-white rounded-2xl  h-[20vh] sm:h-[40vh] xl:h-[40vh] mb-[10%] w-[70%] lg:w-[40%] xl:w-[35%] mx-[10%] lg:ml-36 lg:mr-20"></div>
        <div className=" px-[10%] lg:pl-[2%] lg:pr-0 mt-[5%] lg:mt-[1%] lg:w-[50%] lg:mr-2 ">
          <p className="font-sans lg:w-[90%]  text-sm md:text-xl lg:text-3xl  text-white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
          <button
            type="button"
            class="text-white border-[3px] hover:bg-[#170d20] border-white font-medium rounded-3xl text-base lg:text-2xl px-3 py-0.5 lg:px-12 lg:py-2 text-center mr-2 my-16 "
          >
            Read More
          </button>
        </div>
      </div>
    </div>
    </secion>
  );
}
