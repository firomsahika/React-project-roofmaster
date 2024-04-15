import React, { useEffect } from 'react';
import AOS from 'aos';
import img from "../assets/bg/hero-bg-4.jpg"

const Protection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const containerStyle = {
    backgroundImage: img,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    // Add any other background-related styles you need
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(8, 24, 43, 0.8)', /* Adjust the opacity by changing the last value (0.5) */
  };

  return (
    <div style={containerStyle} className='min-h-screen text-white flex items-center justify-center'>
      <div className='flex items-center justify-center' style={overlayStyle}>
        <div className='m-auto flex items-center justify-center flex-col'>
          <p data-aos="zoom-in" className='text-6xl font-bold text-center'>Protection Above All Else</p>
          <div className='mx-10 md:mx-20 lg:mx-40 xl:mx-80 flex items-center justify-center'>
            <p data-aos="zoom-in" className='text-lg md:text-xl lg:text-2xl xl:text-xl text-center py-8'>
              At RoofMaster, we are passionate about providing the highest quality roofing services to our clients. We take pride in our work and strive to exceed your expectations every time.
            </p>
          </div>
          <button data-aos="zoom-in" className='py-2 px-4 rounded-md text-black bg-yellow-400'>Our Services</button>
        </div>
      </div>
    </div>
  );
};

export default Protection;