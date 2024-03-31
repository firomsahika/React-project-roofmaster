import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';

const RoofReplacement = () => {
  const [backgroundImages, setBackgroundImages] = useState([
    { id: 1, image: 'src/assets/about/bg_3.jpg' },
    { id: 2, image: 'src/assets/about/bg_2.jpg' },
    { id: 3, image: 'src/assets/about/bg_1.jpg' },
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
  });

  return (
    <div className="min-h-screen lg:px-20 service-bg text-white flex flex-col items-center justify-center  ">
      <div className="px-4 sm:px-8  sm:pb-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24 flex flex-col md:flex-row items-center justify-center gap-4">
        <div data-aos="fade-right" className="w-full md:w-1/2 flex-shrink-0">
          <p className="text-3xl font-semibold">Roof Replacement</p>

          <p className="md:text-lg py-6">
            A roof replacement is a major project that requires careful planning and expert execution. At RoofMaster, our comprehensive roof replacement service offers complete removal and installation of new roofing materials, ensuring that your home or business is protected by a durable, reliable roof that will last for years to come.
          </p>

          <p>
            Our team of certified technicians is highly trained and experienced in all aspects of roof replacement, and we use only the highest quality materials to ensure that your new roof is built to last. We take pride in our workmanship and strive to deliver the best possible results to our clients. Whether you need to replace an aging or damaged roof or simply want to upgrade to a more durable and energy-efficient option, we have the expertise and resources to help. Contact us today to learn more about our roof replacement service and schedule a consultation.
          </p>
        </div>

        <div data-aos="fade-left" className="w-full md:w-1/2 flex-shrink-0 h-64 lg:h-[30rem] bg-cover rounded-2xl flex items-center justify-center">
          <div style={myStyle} className="w-full h-full rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default RoofReplacement;