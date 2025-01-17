import React from "react";
import { Link } from "react-router-dom";
import "./back.css";

const BackIcon = () => (
  <svg
    width="26"
    height="16"
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM26 10.5L2 10.5V13.5L26 13.5V10.5Z"
      fill="white"
    />
  </svg>
);

const Back = () => {
  return (
    <div className="flex ml-10 pt-4 relative">
      <Link to="/">
        <button
          style={{
            display: "flex",
            justifyCenter: "center",
            alignItems: "center",
            position: "fixed",
          }}
          className="p-4 mb-4 text-[16px] rounded-xl text-white backbtn"
        >
          <BackIcon className="mt-[-5px]" />{" "}
          <span className="ml-2"> Back to Home Page </span>
        </button>
      </Link>
    </div>
  );
};

export default Back;
