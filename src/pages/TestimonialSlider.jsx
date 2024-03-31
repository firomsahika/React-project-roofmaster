import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/style.css';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      photo: 'src/assets/person/person_1.jpg',
      testimony: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et debitis hic vero natus adipisci delectus vel, asperiores architecto soluta deserunt mollitia necessitatibus! ',
      dept: "Software Engineer",
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: 'src/assets/person/person_2.jpg',
      testimony: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et debitis hic vero natus adipisci delectus vel, asperiores architecto soluta deserunt mollitia necessitatibus! ',
      dept: "Software Engineer",
    },
    {
      id: 3,
      name: 'Jane Smith',
      photo: 'src/assets/person/person_3.jpg',
      testimony: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et debitis hic vero natus adipisci delectus vel, asperiores architecto soluta deserunt mollitia necessitatibus! ',
      dept: "Software Engineer",
    },
    {
      id: 4,
      name: 'John Doe',
      photo: 'src/assets/person/person_1.jpg',
      testimony: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et debitis hic vero natus adipisci delectus vel, asperiores architecto soluta deserunt mollitia necessitatibus! ',
      dept: "Software Engineer",
    },
    {
      id: 5,
      name: 'John Doe',
      photo: 'src/assets/person/person_1.jpg',
      testimony: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et debitis hic vero natus adipisci delectus vel, asperiores architecto soluta deserunt mollitia necessitatibus! ',
      dept: "Software Engineer",
    },
    {
      id: 6,
      name: 'John Doe',
      photo: 'src/assets/person/person_1.jpg',
      testimony: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et debitis hic vero natus adipisci delectus vel, asperiores architecto soluta deserunt mollitia necessitatibus! ',
      dept: "Software Engineer",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="m-auto">
      <div className="mt-20 pb-32 mx-20">
        <div className="flex items-center justify-center flex-col pb-20">
          <p className="text-5xl text-center thecolor font-semibold">
            Testimonials
          </p>
          <p className="py-4 text-3xl text-center font-semibold">
            What our clients said about us
          </p>
        </div>
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div
              className="flex flex-col p-10 shadow-xl border-2 rounded-md"
              key={t.id}
            >
              <FaQuoteLeft size={20} className="self-start thecolor" />
              <div className="flex flex-col justify-center py-4">
                <p>{t.testimony}</p>
              </div>
              <div className="flex items-center">
                <img
                  src={t.photo}
                  className="h-10 w-10  rounded-full mr-2"
                  alt="testimonial"
                />
                <p className="font-bold px-2">{t.name}</p>
                <p className="text-gray-500">{t.dept}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;