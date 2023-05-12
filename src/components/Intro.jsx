import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Intro = () => {
  return (
    <div name='intro' className='w-full h-screen bg-[#1f253bf3]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-black-200 sm:text-3xl font-bold'>Hi! My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ddd]'>
          Mikael Eriksson
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ddd]'>
          Im a Frontend Developer looking for a internship{' '}
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I am currently learning more about PostgreSQL
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600'>
            View my work! <HiArrowNarrowRight className='ml-3 ' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
