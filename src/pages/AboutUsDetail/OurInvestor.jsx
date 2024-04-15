import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from "../../assets/clients/client_1.jpg"
import img2 from "../../assets/clients/client_2.jpg"
import img3 from "../../assets/clients/client_3.jpg"
import img4 from "../../assets/clients/client_4.jpg"
import img6 from "../../assets/clients/client_6.jpg"
import img7 from "../../assets/clients/client_7.jpg"

const OurInvestor = () => {
  const investors = [
    {
      id: 1,
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
      photo: img6,
    },
    {
      id: 6,
      photo: img7,
    },
  ];

  const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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
    ],
  };

  return (
    <div className="m-auto service-bg">
      <div className="mx-4 md:mx-32 pb-24">
        <div className="flex items-center justify-center flex-col m-auto pb-10">
          <p className="text-4xl md:text-5xl text-yellow-400 font-semibold pt-10">
            Our Investors
          </p>
          <p className="py-4 text-xl md:text-2xl text-white font-semibold">
            We're fortunate to have incredible investors.
          </p>
        </div>
        <Slider className="custom-slider" {...settings}>
          {investors.map((investor) => (
            <div key={investor.id} className="flex  items-center justify-center">
              <img
                src={investor.photo}
                className="w-40 h-40 md:w-40 md:h-40"
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurInvestor;