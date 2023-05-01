import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import BugReport from '../../components/reports/BugReport';
import MonitorDisplay from '../../components/examDisplay/MonitorDisplay';
// Icons
import { AiFillHome } from 'react-icons/ai';

function BetaTestQuestions() {
  const [questionsList, setQuestionsList] = useState([]);
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
  const [totalQuestionsNum, setTotalQuestionsNum] = useState(0);
  const [currentExamNum, setCurrentExamNum] = useState(0);

  const loadNextQuestion = () => {
    console.log('loading next question');
  };

  const writeBugReport = () => {
    console.log('bug');
  };

  const answerQuestion = () => {
    console.log('answer');
  };

  const startExam = () => {
    console.log('Starting exam');
    // Start clock
  };

  return (
    <div className='relative grid test__bg min-h-screen h-screen lg:overflow-hidden w-full p-2 text-gray-100'>
      {/* Fixed top buttons */}
      <BugReport writeBugReport={writeBugReport} />
      <section className='absolute no__highlights grid left-5 top-5 group'>
        <div className='flex justify-end items-center bg-neo-alt p-2'>
          <Link to='/'>
            <AiFillHome size={30} className='md:hidden' />
            <AiFillHome size={40} className='hidden md:grid' />
          </Link>
        </div>
      </section>

      <main className='grid bg-main-colour py-20'>
        <section className='grid grid-rows-[1fr] h-fullpx-4'>
          <section className='grid grid-rows-a1a'>
            <div className='px-6'>
              <section className='bg-neo-alt rounded-xl text-center px-6'>
                <article className=''>
                  <h1 className='md:text-3xl font-semibold'>
                    Worlds Smartest Person
                  </h1>
                </article>
                <article className='flex justify-evenly items-centerd md:mt-10 p-2 rounded'>
                  <h2>Exam {currentExamNum}</h2>
                  <span className='font-semibold text-xl'>00:00</span>
                  <h3>
                    {currentQuestionNum}/{totalQuestionsNum}
                  </h3>
                </article>
              </section>
            </div>
            <section className='grid w-full items-center px-6 py-6'>
              <MonitorDisplay answerQuestion={answerQuestion} />
            </section>
            <article className='flex py-2 justify-center px-6'>
              <button
                onClick={loadNextQuestion}
                className='bg-neo-alt w-full rounded p-4  hover:bg-gray-300'
              >
                Start Exam
              </button>
            </article>
          </section>
        </section>
        {/* Monitor Exam Display */}
      </main>
    </div>
  );
}

export default BetaTestQuestions;
