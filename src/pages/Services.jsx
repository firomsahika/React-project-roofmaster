import React, { useEffect } from 'react';
import AOS from 'aos';
import '../styles/style.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 400,
    });
  }, []);

  return (
    <div className='service-bg min-h-screen flex flex-col items-center justify-center w-full gap-14'>
      <div>
        <p className='text-5xl text-white font-semibold py-6'>Our Services</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mx-4 sm:mx-8 md:mx-24'>
        <div data-aos='fade-left' className='text-white flex items-center justify-center flex-col'>
          <div className='w-80 h-[25rem] relative border-2 border-yellow-600 rounded-3xl'>
            <img
              className='right-4 bottom-4 absolute object-cover rounded-3xl w-80 h-[25rem]'
              src="src/assets/about/bg_3.jpg" alt="" />
            <div className='rounded-full relative right-12 bottom-14'>
              <button className='service-num-color absolute rounded-full text-3xl font-semibold flex items-center justify-center text-white p-4 right-0 w-16 h-16'>1</button>
            </div>
          </div>
          <div>
            <p className='text-3xl font-semibold py-4'>Roof Inspection</p>
            <p className='w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero dolorum corporis repellat aperiam! Ex nesciunt magni veniam dignissimos eius sit</p>
          </div>
        </div>

        <div data-aos='fade-left' className='text-white flex items-center justify-center flex-col'>
          <div className='w-80 h-[25rem] relative border-2 border-yellow-600 rounded-3xl'>
            <img
              className='right-4 bottom-4 absolute object-cover rounded-3xl w-80 h-[25rem]'
              src="src/assets/about/bg_1.jpg" alt="" />
            <div className='rounded-full relative right-10 bottom-14'>
              <button className='service-num-color absolute rounded-full text-3xl font-semibold flex items-center justify-center text-white p-4 right-8 w-16 h-16'>2</button>
            </div>
          </div>
          <div>
            <p className='text-3xl font-semibold py-4'>Roof Installation</p>
            <p className='w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero dolorum corporis repellat aperiam! Ex nesciunt magni veniam dignissimos eius sit</p>
          </div>
        </div>

        <div data-aos='fade-left' className='text-white flex items-center justify-center flex-col'>
          <div className='w-80 h-[25rem] relative border-2 border-yellow-600 rounded-3xl'>
            <img
              className='right-4 bottom-4 absolute object-cover rounded-3xl w-80 h-[25rem]'
              src="src/assets/about/bg_4.jpg" alt="" />
            <div className='rounded-full relative right-10 bottom-14'>
              <button className='service-num-color absolute rounded-full text-3xl font-semibold flex items-center justify-center text-white p-4 right-8 w-16 h-16'>3</button>
            </div>
          </div>
          <div>
            <p className='py-4 text-3xl font-semibold'>Emergency Roof Repair</p>
            <p className='w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero dolorum corporis repellat aperiam! Ex nesciunt magni veniam dignissimos eius sit</p>
          </div>
        </div>
      </div>
      <div className='flex items-center pb-14'>
        <button className='text-amber-500 border px-5 py-2 rounded-md border-amber-500'>More Info..</button>
      </div>
    </div>
  );
};

export default Services;