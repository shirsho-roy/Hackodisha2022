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
const Question = ({ ques, ans }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="  w-full rounded-sm text-white ">
      <header
        className="flex justify-between ques p-2"
        onClick={() => setShowInfo(!showInfo)}
        style={showInfo ? ApplyFAQCSS.faqActive : ApplyFAQCSS.faq}
      >
        <h4 className="flex justify-start pl-4">{ques}</h4>
        <button
          className="flex justify-end text-3xl"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </button>
      </header>
      {showInfo && <p className="w-full pt-6 ans p-6">{ans}</p>}
    </article>
  );
};

export default Question;
