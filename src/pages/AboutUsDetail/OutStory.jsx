import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';

const OutStory = () => {
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
  }, []);

  return (
    <div className='min-h-screen  flex items-center justify-center'>
      <div className='p-4 sm:p-8 md:p-16 lg:p-32 flex flex-col sm:flex-row items-center justify-center gap-4'>
        <div data-aos='fade-right' className='w-full sm:w-1/2'>
          <p className='text-2xl sm:text-3xl font-semibold'>Our Story</p>
          <p className='text-md py-4 sm:py-8'>
            RoofMaster was founded by a group of experienced roofing professionals who were passionate about delivering
            the highest quality services to their clients. They saw a need in the market for a roofing company that was
            truly dedicated to customer satisfaction and set out to fill that need with RoofMaster.
          </p> 

          <p className='text-md'>
            From the beginning, RoofMaster's founders were committed to building a company that was based on a set of
            core values: integrity, excellence, and customer focus. They believed that by upholding these values in all
            their actions, they could create a company that was truly different from the rest - one that was known for
            its reliability, professionalism, and commitment to quality.
          </p>
        </div>

        <div
          data-aos='fade-left'
          style={myStyle}
          className='w-full sm:w-1/2 lg:h-[25rem] h-[16rem] bg-cover rounded-xl flex items-center justify-center'
        ></div>
      </div>
    </div>
  );
};

export default OutStory;