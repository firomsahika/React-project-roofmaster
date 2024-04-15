import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../assets/about/bg_3.jpg"
import img2 from "../assets/about/bg_2.jpg"
import img3 from "../assets/about/bg_1.jpg"

const About = () => {
  const [backgroundImages, setBackgroundImages] = useState([
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 }
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
      duration: 2000
    });
  }, []);

  return (
    <div className='mx-4 md:mx-10 lg:mx-28 h-screen items-center justify-center flex flex-col md:flex-row'>
      <div className='flex flex-col md:items-center md:flex-row  justify-center  md:gap-10'>
        <div data-aos='fade-right' className='flex flex-col items-center md:items-start md:w-1/2'>
          <h2 className='text-3xl font-semibold text-center md:text-left'>About</h2>
          <p className='text-center lg:text-md md:text-left md:text-xl py-4 md:py-8'>
            Roof Master has been providing top-notch roofing construction services in Miami for over 15 years. We
            specialize in shingle repair and installation, tile roofing, and full-roof replacement. Our team is highly
            experienced, certified, and always puts our customers' needs first. Contact us today to get your roof
            inspected!
          </p>
          <div className='relative '>
            <button className='w-full  md:w-auto px-4 py-2 md:py-4 text-xl bg-yellow-400 rounded-2xl relative z-10'>
              More Information
            </button>
            <div className='absolute w-full h-full bottom-0 left-0 rounded-lg bg-gray-300 opacity-60 z-0 custom-animate-ping'></div>
          </div>
        </div>

        <div
          data-aos='fade-left'
          style={myStyle}
          className='cover w-full h-60 md:w-1/2 md:h-[30rem] flex flex-col items-center justify-center rounded-2xl mt-8  md:mt-0  md:gap-6'
        >
          <h2 className='text-3xl text-white font-semibold'>Find Us On</h2>
          <div className='flex gap-6 mt-4'>
            <div className='flex items-center p-3 bg-white rounded-full justify-center'>
              <FaTwitter className=' rounded-full' size={20} />
            </div>
            <div className='flex items-center p-3 bg-white rounded-full justify-center'>
              <FaInstagram className=' rounded-full' size={20} />
            </div>
            <div className='flex items-center p-3 bg-white rounded-full justify-center'>
              <FaFacebookF className=' rounded-full' size={20} />
            </div>
            <div className='flex items-center p-3 bg-white rounded-full justify-center'>
              <FaLinkedin className=' rounded-full' size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;