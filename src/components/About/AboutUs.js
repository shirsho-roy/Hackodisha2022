import React from "react";
import AboutUsSVG from "../../assets/AboutUsSVG.svg";
const style = {
  AboutUsSVG: {
    backgroundImage: `url('${AboutUsSVG}')`,
  },
};
export default function About() {
  return (
    <div className="bg-gradient-to-t from-gray-900 to-[#1d072f]  w-[100%]">
      <div className=" text-3xl lg:text-5xl ml-[5%] lg:ml-[10%] xl:ml-[7%] pt-20 mb-12 text-white tracking-normal font-medium">
        About Us
      </div>
      <div className="lg:flex pb-4 ">
        <div className="border-[3px] border-white rounded-2xl  h-[20vh] sm:h-[40vh] xl:h-[40vh] mb-[10%] w-[70%] lg:w-[40%] xl:w-[35%] mx-[10%] lg:ml-36 lg:mr-20"></div>
        <div className=" px-[10%] lg:pl-[2%] lg:pr-0 lg:w-[50%] lg:mr-2 ">
          <p className="font-sans lg:w-[90%]  text-sm md:text-lg lg:text-2xl text-white leading-4">
            Welcome to HackOdisha 2.0, a hackathon that aims to bring creatives
            and developers together to solve some of the most pressing problems
            faced by communities all over the world. This 36-hour-long event
            will bring together technocrats from all over the country. The
            problem statements are stimulating enough for programmers who love
            solving mind-bending problems. We look forward to connecting with
            the participants and hope they enjoy their journey to this Eden of
            coding. After the success of the first season of HackOdisha, Webwiz
            is proud to host the greater-than-ever HackOdisha 2.0 Webwiz is not
            just any other technical club. Our mission is to join creative minds
            with technical skills to come up with innovative ways of using
            sponsors’ technologies to develop innovative solutions to solve
            important real-world problems. Therefore, the hackathon is open to
            experts as well as beginners because abstractions are equally
            important as implementations.
          </p>
          <button
            type="button"
            class="text-white border-[3px] hover:bg-[#170d20] border-white font-medium rounded-3xl text-base lg:text-2xl px-3 py-0.5 lg:px-12 lg:py-2 text-center mr-2 my-12 "
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
