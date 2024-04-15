import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';

import img1 from "../../../assets/about/bg_3.jpg"
import img2 from "../../../assets/about/bg_2.jpg"
import img3 from "../../../assets/about/bg_1.jpg"

const ServiceDescription = () => {
  const [backgroundImages, setBackgroundImages] = useState([
    { id: 1, image:  img1},
    { id: 2, image: img2},
    { id: 3, image: img3},
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
    backgroundPosition: 'center',
  };

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="h-screen flex md:items-center justify-center">
      <div className="mx-4 md:mx-32 mt-12 md:flex md:flex-row md:items-center md:justify-center md:gap-4">
        <div data-aos="fade-right" className="w-full md:w-1/2">
          <p className="text-xl font-semibold">Our company offers a wide range of roofing services, including installation, repair, maintenance, inspections, and replacements</p>
          <p className="text-md py-6">Our team of skilled professionals has the expertise and experience to handle all of your roofing needs, from installation and repair to maintenance and inspections. We work with a variety of roofing materials, including asphalt shingles, metal roofs, and flat roofs, and we are committed to using only the highest-quality products!</p>
        </div>
        <div data-aos="fade-left" style={myStyle} className="w-full md:w-1/2 h-[28rem] bg-cover rounded-xl flex items-center justify-center">
          {/* <img className='h-[30rem] object-cover rounded-md' src="src/assets/about/bg_3.jpg" alt="about-img" /> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;