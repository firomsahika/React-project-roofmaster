import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';

const RoofMaster = () => {
  const [backgroundImages, setBackgroundImages] = useState([
    { id: 1, image: 'src/assets/about/bg_3.jpg' },
    { id: 2, image: 'src/assets/about/bg_2.jpg' },
    { id: 3, image: 'src/assets/about/bg_1.jpg' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImages((prevImages) => {
        const lastImage = prevImages[prevImages.length - 1];
        const updatedImages = [lastImage, ...prevImages.slice(0, prevImages.length - 1)];
        return updatedImages;
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const myStyle = {
    backgroundColor: 'rgba(8, 24, 43, 0.8)',
    backgroundImage: `url(${backgroundImages[0].image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  useEffect(() => {
    AOS.init({
      duration: 3000
    });
  });

  return (
    <div className='flex items-center justify-center bg-gray-100 min-h-screen'>
      <div className='mx-8 sm:mx-16 md:mx-24 lg:mx-32 py-20 flex flex-col sm:flex-row items-center justify-center gap-8'>
        <div data-aos='fade-right' style={myStyle} className='w-full sm:w-1/2 h-[25rem] sm:h-[30rem] bg-cover rounded-xl flex items-center justify-center'></div>
        <div data-aos='fade-left' className='w-full sm:w-1/2'>
          <p className='text-md sm:text-lg py-4 sm:py-8'>
            Over the years, RoofMaster has grown into a leading provider of roofing solutions for homes and businesses in the [region]. Its team of certified technicians has a reputation for delivering the highest level of workmanship, using only the best materials and techniques. RoofMaster is also known for its exceptional customer service, with a commitment to responding quickly to client inquiries and working closely with each client to ensure their complete satisfaction.
          </p>
          <p className='text-md sm:text-lg'>
            Today, RoofMaster is proud to be a trusted and respected name in the roofing industry, and looks forward to many more years of serving its valued clients.
          </p>
          <p className='font-bold pt-4'>The RoofMaster Team</p>
        </div>
      </div>
    </div>
  );
};

export default RoofMaster;