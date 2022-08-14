import React, { useState, useEffect } from "react";
import data from "./data";
import SingleQuestion from "./Question";

const FAQ = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  {
    /* Performs similarly to componentDidMount in classes */
  }
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  const [questions, setQuestions] = useState(data);
  return (
    <>
      <section id="Faq">
        <div
          className={`${
            isMobile ? "none" : "container"
          } flex flex-col w-full pb-4 p-6 sm:p-0`}
        >
          <h3 className="text-[44px] text-white mb-5 pt-2 pl-6"> FAQs</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center justify-items-center text-[14px] md:text-[16px] lg:text-[18px] p-4 w-full ">
            {questions.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
