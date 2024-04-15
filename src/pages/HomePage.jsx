import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaHome, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import "../styles/style.css"

import img1 from "../assets/bg/hero-bg-3.jpg"
import img2 from "../assets/bg/hero-bg-2.jpg"
import img3 from "../assets/bg/hero-bg-1.jpg"

const HomePage = () => {
 
  const [isOpen, setIsOpen] = useState(false);
  

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
    }, 2500);

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
  

   const navColor =  ({ isActive })=>{
     return {
      color: isActive ? "#FFB703" : ""
     }

   }
    
  
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, []);

  return (
    <div style={myStyle} className="min-h-screen  bg-blue-900">
      <div className="overlay bg-cover bg-center " >
        <div className="md:hidden flex float-end p-8">
          <button onClick={toggleNav}>
            {isOpen ? <FaBars className="text-white" size={20} /> : <FaBars className="text-white" size={20} />}
          </button>
        </div>
        {isOpen && (
          <div data-aos="fade-down" className="md:flex absolute basis-full rounded-lg mt-14 min-w-full flex-col items-center">
            <nav className="text-white flex flex-col w-full rounded-lg">
              <ul className="flex gap-8 rounded-lg p-4 text-black font-semibold flex-col bg-white">
                <li>
                  <NavLink to="/" style={navColor}  >
                    Home
                  </NavLink>
                </li>
                <li>
                <NavLink to="/about" style={navColor}>
                     
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" style={navColor}  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" style={navColor} >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
        <div className="hidden md:flex justify-end px-36">
          <nav className="h-20 flex items-center justify-center text-white">
            <ul className="flex gap-8 font-semibold">
              <li>
                <NavLink to="/" style={navColor} >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" style={navColor} >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" style={navColor} >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" style={navColor}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col px-8 gap-4 md:flex-row md:justify-center md:items-center md:gap-40 mt-20 md:mt-36">
          <div className="md:text-2xl text-white font-semibold md:w-1/2">
            <TypeAnimation
              sequence={['Get A Reliable ', 1000, 'Get A Strong ', 1000, 'Get A Trustworthy ', 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
            <br />
            <p className="text-3xl md:text-5xl">Roof Over Your Head</p>
            <div>

              <p className="w-100 md:w-50 py-12 md:text-xl text-white">
                One to Roof Master Your premier Source for Topquality roofing services. We have been Serving Miami for
                Over 15 years. and We are dedicated to provide our customers the best possible services
              </p>
              
            </div>
            <div className="flex  relative">
              <button className="btn-color px-32 h-16 lg:h-14  md:px-20 md:py-3 rounded-3xl md:text-xl text-nowrap font-semibold text-black duration-500 relative z-10">
                Request A Quote
              </button>
              <div className="absolute w-[24rem] md:w-60 h-full bottom-0 md:left-14 rounded-lg bg-white opacity-60 z-0 custom-animate-ping"></div>
            </div>
          </div>
          <div className="mx-44 md:mx-44 flex items-center justify-center md:mr-44 bg-amber-500 rounded-full w-20 h-20">
            <FontAwesomeIcon icon={faPlay} size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;