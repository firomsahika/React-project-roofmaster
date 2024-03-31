import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';

const AboutDescription = () => {
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
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div data-aos="fade-right" className="w-full sm:w-1/2">
          <p className="text-lg sm:text-3xl font-semibold">
            RoofMaster is a local, professional roofing company offering a range of services.
          </p>

          <p className="text-md sm:text-lg py-4 sm:py-8">
            Roof Master has been providing top-notch roofing construction services in Miami for over 15 years. We
            specialize in shingle repair and installation, tile roofing, and full-roof replacement. Our team is highly
            experienced, certified, and always puts our customers' needs first. Contact us today to get your roof
            inspected!
          </p>

          <p className="text-md sm:text-lg">
            Roof Master has been providing top-notch roofing construction services in Miami for over 15 years. We
            specialize in shingle repair and installation, tile roofing, and full-roof replacement. Our team is highly
            experienced, certified, and always puts our customers' needs first. Contact us today to get your roof
            inspected!
          </p>
        </div>

        <div
          data-aos="fade-left"
          style={myStyle}
          className="w-full lg:h-[30rem] h-[20rem] md:h-[20rem] sm:w-1/2 sm:mt-0 my-8 bg-cover rounded-xl flex items-center justify-center"
        >
          <div className="flex flex-col gap-4 items-center justify-center p-4">
            <p className="text-xl sm:text-2xl text-white font-bold">Find Us On</p>
            <div className="flex gap-4 items-center justify-center">
              <div className="rounded-full flex items-center justify-center">
                <FaTwitter size={50} className="bg-white p-4 rounded-full" />
              </div>
              <div className="rounded-full">
                <FaInstagram size={50} className="bg-white p-4 rounded-full" />
              </div>
              <div className="rounded-full">
                <FaFacebookF size={50} className="bg-white p-4 rounded-full" />
              </div>
              <div className="">
                <FaLinkedinIn size={50} className="bg-white p-4 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;