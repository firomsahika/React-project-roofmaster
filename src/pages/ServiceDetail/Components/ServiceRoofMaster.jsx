import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';

const ServiceRoofMaster = () => {
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
    <div className='flex items-center  justify-center bg-gray-100'>
      <div className='mx-4 md:mx-32 pt-40 py-8 md:py-20 flex flex-col md:flex-row items-center justify-center gap-8'>

        <div data-aos="fade-right" className='w-full md:w-1/2 h-[25rem] md:h-[30rem] bg-cover rounded-2xl flex items-center justify-center'>
          <div style={myStyle} className='w-full rounded-2xl h-full'></div>
        </div>

        <div data-aos="fade-left" className='w-full md:w-1/2'>
          <p className='text-3xl font-semibold'>Roof Replacement</p>

          <p className='text-md py-4'>A roof replacement is a major project that requires careful planning and expert execution. At RoofMaster, our comprehensive roof replacement service offers complete removal and installation of new roofing materials, ensuring that your home or business is protected by a durable, reliable roof that will last for years to come.</p>

          <p className='text-md'>Our team of certified technicians is highly trained and experienced in all aspects of roof replacement, and we use only the highest quality materials to ensure that your new roof is built to last. We take pride in our workmanship and strive to deliver the best possible results to our clients. Whether you need to replace an aging or damaged roof or simply want to upgrade to a more durable and energy-efficient option, we have the expertise and resources to help. Contact us today to learn more about our roof replacement service and schedule a consultation.</p>

        </div>

      </div>
    </div>
  );
}

export default ServiceRoofMaster;