import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';

const OurCulture = () => {
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
    <div className='service-bg min-h-screen flex items-center justify-center'>
      <div className='m-4 sm:m-8 md:m-16 lg:m-32 text-white flex items-center justify-center flex-col gap-4'>
        <div className='flex flex-col lg:items-center sm:flex-row gap-4'>
          <div className='w-full sm:w-1/3'>
            <p className='text-3xl sm:text-5xl text-yellow-300 font-semibold'>Our Culture</p>
            <p className='py-4'>
              At Roofmaster, we believe that our culture is what sets us apart from other roofing companies. We are a
              team of professionals who are passionate about delivering the highest quality services to our clients, and
              we are committed to upholding a set of core values that guide all our actions: integrity, excellence, and
              customer focus
            </p>
            <p>
              We believe that by living these values every day, we can create a positive, collaborative, and enjoyable
              work environment that is focused on delivering the best possible results for our clients. We value
              diversity and inclusivity and strive to create a workplace where all team members feel valued, supported,
              and empowered to succeed.
            </p>
          </div>
          <div
            data-aos='zoom-in'
            style={myStyle}
            className='w-full sm:w-2/3   lg:h-[20rem] sm:h-[30rem] bg-cover rounded-xl flex items-center justify-center'
          ></div>
        </div>
        <div>
          <p>
            We are also committed to continuous learning and personal growth and offer ongoing training and development
            opportunities to help our team members reach their full potential. We believe that this investment in our
            team pays off in the form of exceptional service and satisfied clients. Overall, our culture at RoofMaster
            is one of professionalism, collaboration, and a shared commitment to delivering the best possible experience
            to our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCulture;