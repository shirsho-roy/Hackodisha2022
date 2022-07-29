import React ,{useState} from 'react'
import data from './data';
import SingleQuestion from './Question';

const FAQ = () => {
    
    const [questions,setQuestions] = useState(data);
  return (
    <>
    <div className='container flex flex-col w-full pb-4'>
        <h3 className='text-5xl text-white mb-5 pt-2 '> FAQs</h3>
        <div className='grid grid-cols-2 gap-5 justify-center justify-items-center text-xl p-4 w-full '>
           
        {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
      

</div>
   

        </div>


    
    </>
  )
}

export default FAQ