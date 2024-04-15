import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/style.css";
import { FaQuoteLeft } from 'react-icons/fa';
import img1 from "../assets/clients/client_1.jpg"
import img2 from "../assets/clients/client_2.jpg"
import img3 from "../assets/clients/client_3.jpg"
import img4 from "../assets/clients/client_4.jpg"
import img5 from "../assets/clients/client_8.jpg"
import img6 from "../assets/clients/client_6.jpg"

const OurClients = () => {
  const teams = [
    {
      id: 1,
      name: 'John Doe',
      photo: img1,
    },
    {
      id: 2,
      photo: img2,
    },
    {
      id: 3,
      photo: img3,
    },
    {
      id: 4,
      photo: img4,
    },
    {
      id: 5,
      photo: img5,
    },
    {
      id: 6,
      photo: img6,
    },
    // Add more teams as needed
  ];

  const settings = {
    
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='m-auto'>
      <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-32 pb-24'>
        <div className='flex items-center justify-center flex-col m-auto pb-10'>
          <p className='text-5xl thecolor font-semibold pt-10'>Our Clients</p>
          <p className='py-4 text-2xl font-semibold'>
            These are some of our clients that we're proud to work with!
          </p>
        </div>
        <Slider className='custom-slider' {...settings}>
          {teams.map((t) => (
            <div key={t.id}>
              <div className='shadow-xl flex items-center w-40 h-40 justify-center'>
                <img src={t.photo} className='w-30 h-30' alt={t.name} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurClients;