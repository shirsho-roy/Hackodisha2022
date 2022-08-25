import React from "react";
import healthcare from "./Healthcare.svg";
import environment from "./Environment.svg";
import disastermanagement from "./Disaster Management.svg";
import openinnovation from "./Open Innovation.svg";
import breakchain from "./Women Security.svg";
import Education from "./Education.svg";
const Track = () => {
  return (
    <section id="Tracks">
      <div className="container">
        <div className="text-white lg:text-[20px] md:text-[18px] font-semibold">
          <h1 className="mx-16 py-10 mb-3 text-4xl font-normal">OUR TRACKS</h1>
          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <img
                src={healthcare}
                alt="heathcare"
                width="180px"
                height="180px"
              ></img>
              <h3 className="mt-4 mb-8 md:mb-8">Healthcare</h3>
              {/* <p className="mb-4 md:mb-8">Registrations</p> */}
            </div>
            <div className="flex flex-col items-center">
              <img
                src={Education}
                alt="Institutions"
                width="180px"
                height="180px"
              ></img>
              <h3 className="mt-4 mb-8 md:mb-8">Education</h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={environment}
                alt="Sponsors"
                width="180px"
                height="180px"
              ></img>
              <h3 className="mt-4 mb-8 md:mb-8">Environment</h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={breakchain}
                alt="Community Members"
                width="180px"
                height="180px"
              ></img>
              <h3 className="mt-4 mb-12 md:mb-8">Women Security</h3>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src={disastermanagement}
                alt="disastermanagement"
                width="180px"
                height="180px"
              ></img>
              <h3 className="mt-4 mb-12 md:mb-8">Disaster Management</h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={openinnovation}
                alt="openinnovation"
                width="180px"
                height="180px"
              ></img>
              <h3 className="mt-4 mb-12 md:mb-8">Open Innovation</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Track;
