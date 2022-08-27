import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import "./faq.css";

const ApplyFAQCSS = {
  faq: {
    borderRadius: "8px",
  },
  faqActive: {
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  },
};
const Question = ({ data }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="  w-full rounded-sm text-white ">
      <header
        className="flex justify-between ques p-2"
        onClick={() => setShowInfo(!showInfo)}
        style={showInfo ? ApplyFAQCSS.faqActive : ApplyFAQCSS.faq}
      >
        <h4 className="flex justify-start pl-4">{data.ques}</h4>
        <button
          className="flex justify-end text-3xl"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </button>
      </header>

      {showInfo && data.id !== 7 && data.id !== 8 && (
        <p className="w-full pt-6 ans p-6">{data.ans}</p>
      )}

      {showInfo && (data.id === 7 || data.id === 8) && (
        <div className="w-full pt-6 ans p-6">
          <span>{data.ans1}</span>
          <a
            href={data.link}
            rel="noreferrer"
            target="_blank"
            style={{ color: "blue" }}
          >
            {data.text}
          </a>
          <span>{data.ans2}</span>
        </div>
      )}
    </article>
  );
};

export default Question;
