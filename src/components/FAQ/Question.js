import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import './faq.css'
const Question = ({ ques, ans }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='  w-full rounded-lg text-white '>
      <header className='flex justify-between ques p-2 '>
        <h4 className='flex justify-start pl-4'>{ques}</h4>
        <button className='flex justify-end text-3xl' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ?  <AiFillCaretUp/> : <AiFillCaretDown />  }
        </button>
      </header>
      {showInfo && <p className='w-full pt-6 ans p-8'>{ans}</p>}
    </article>
  );
};

export default Question;