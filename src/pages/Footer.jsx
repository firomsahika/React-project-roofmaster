import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex flex-col items-center mt-10 bg-gray-200'>
      <div className='w-full max-w-6xl mx-auto flex flex-col gap-6 px-6 lg:flex-row lg:items-start lg:py-6 lg:justify-between items-center'>
        <div className='flex flex-col gap-4 items-center lg:items-start'>
          <img 
            src="src/assets/roof-logo.png" 
            alt="logo-img"
            className='w-32'
          />
          <p className='text-center max-w-xs'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae libero veritatis, voluptas deserunt distinctio tempora aliquid.
          </p>
        </div>
        <div className='flex flex-col'>
          <p className='text-md font-bold pb-6'>Resources</p>
          <p>News</p>
          <p>Pricing</p>
          <p>Contact Us</p>
        </div>
        <div className='flex flex-col'>
          <p className='text-md font-bold pb-6'>Services</p>
          <p>Roof Replacement</p>
          <p>Roof Repair</p>
          <p>Roof Maintenance</p>
        </div>
        <div className='flex flex-col'>
          <p className='text-md font-bold pb-6'>Company</p>
          <p>About Us</p>
          <p>Our CEO</p>
          <p>Terms and Conditions</p>
        </div>
        <div className='flex flex-col'>
          <p className='text-md font-bold pb-6'>Information</p>
          <p>Phones: (123)478 235</p>
          <p>Email: contact@example.com</p>
          <p>We are open: Mn-Fr 9am - 5pm</p>
        </div>
      </div>
      <hr className='bg-gray-400 h-0.5 w-full max-w-6xl mx-auto' />
      <div className='w-full max-w-6xl mx-auto flex items-center justify-between py-8 px-6 lg:flex-row'>
        <p className='text-center lg:text-left'>
          &copy; RoofMaster, All rights reserved
        </p>
        <div className='flex gap-4 items-center justify-center'>
          <div className='border-2 border-gray-600 rounded-full'>
            <FaInstagram 
              className='rounded-full p-2'
              size={40}
            />
          </div>
          <div className='border-2 border-gray-600 rounded-full'>
            <FaTwitter 
              size={40}
              className='p-2'
            />
          </div>
          <div className='border-2 border-gray-600 rounded-full'>
            <FaFacebookF 
              size={40}
              className='p-2'
            />
          </div>
          <div className='border-2 border-gray-600 rounded-full'>
            <FaLinkedinIn  
              className='p-2'
              size={40}
            />
          </div>
          <div className='border-2 border-gray-600 rounded-full'>
            <FaYoutube
              className='p-2'
              size={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;