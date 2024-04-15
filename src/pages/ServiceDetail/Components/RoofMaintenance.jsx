import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';
import img1 from "../../../assets/about/bg_3.jpg"
import img2 from "../../../assets/about/bg_2.jpg"
import img3 from "../../../assets/about/bg_1.jpg"

const RoofMaintenance = () => {
  const [backgroundImages, setBackgroundImages] = useState([
    { id: 1, image: img1 },
    { id: 2, image: img2},
    { id: 3, image: img3 },
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
    <div className="flex items-center justify-center bg-gray-200 py-10">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 py-10 sm:py-20 flex flex-col sm:flex-row items-center justify-center gap-8">
        <div
          data-aos="fade-right"
          style={myStyle}
          className="w-full sm:w-1/2 h-64 sm:h-[25rem] bg-cover rounded-xl flex items-center justify-center"
        ></div>

        <div
          data-aos="fade-left"
          className="w-full sm:w-1/2"
        >
          <p className="text-3xl font-semibold">Roof Maintenance</p>

          <p className="text-md py-4">
            Roof maintenance is an important aspect of protecting the overall value and integrity of your home or business. At RoofMaster, we offer a preventative service that involves regular inspections and maintenance to keep your roof in top condition. By catching and addressing potential issues early on, we can help prevent costly repairs and prolong the life of your roof.
          </p>

          <p className="text-md">
            Our roof maintenance service is designed to be convenient and hassle-free, with flexible scheduling options to fit your needs. Our team of certified technicians is highly trained and experienced in all aspects of roof maintenance, and we use only the best materials and techniques to ensure that your roof stays in top shape. From cleaning and repairing minor damage to identifying and addressing more serious issues, we have the expertise to keep your roof performing at its best. Contact us today to learn more about our roof maintenance service and schedule an inspection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoofMaintenance;