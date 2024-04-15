import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/style.css'; // Import your custom CSS file for styling
import { FaQuoteLeft } from 'react-icons/fa';
import img1 from "../assets/team/person_7.jpg"
import img2 from "../assets/team/person_4.jpg"
import img3 from "../assets/team/person_3.jpg"
import img4 from "../assets/team/team_5.jpg"
import img5 from "../assets/team/team_6.jpg"
import img6 from "../assets/team/person_1.jpg"

const OurTeam = () => {
  const teams = [
    {
      id: 1,
      name: 'John Doe',
      photo: img1,
      testimony:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et debitis hic vero natus adipisci delectus vel, asperiores architecto soluta deserunt mollitia necessitatibus! ',
      dept: 'Software Engineer',
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: img2,
      testimony:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et debitis hic vero natus adipisci delectus vel, asperiores architecto soluta deserunt mollitia necessitatibus! ',
      dept: 'Software Engineer',
    },
    {
      id: 3,
      name: 'Jane Smith',
      photo: img3,
      testimony:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et debitis hic vero natus adipisci delectus vel, asperiores architecto soluta deserunt mollitia necessitatibus! ',
      dept: 'Software Engineer',
    },
    {
      id: 4,
      name: 'John Doe',
      photo: img4,
      testimony:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et debitis hic vero natus adipisci delectus vel, asperiores architecto soluta deserunt mollitia necessitatibus! ',
      dept: 'Software Engineer',
    },
    {
      id: 5,
      name: 'John Doe',
      photo: img5,
      testimony:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et debitis hic vero natus adipisci delectus vel, asperiores architecto soluta deserunt mollitia necessitatibus! ',
      dept: 'Software Engineer',
    },
    {
      id: 6,
      name: 'John Doe',
      photo: img6,
      testimony:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et debitis hic vero natus adipisci delectus vel, asperiores architecto soluta deserunt mollitia necessitatibus! ',
      dept: 'Software Engineer',
    },
    // Add more team members as needed
  ];

  const settings = {
    infinite: true,
    speed: 400,
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
    <div className="m-auto service-bg">
      <div className="mt-20 pb-32 mx-8 md:mx-32">
        <div className="flex items-center justify-center flex-col pb-10">
          <p className="text-5xl text-yellow-400 font-semibold pt-10">
            Our Team
          </p>
          <p className="py-4 text-3xl text-white font-semibold">
            Meet your provider
          </p>
        </div>
        <Slider className="custom-slider" {...settings}>
          {teams.map((t) => (
            <div
              className="p-4 w-full md:w-64 shadow-2xl border-2 bg-white rounded-xl"
              key={t.id}
            >
              <div className="flex items-center justify-center pb-2">
                <img
                  src={t.photo}
                  alt="team-img"
                  className="rounded-xl w-40 h-40 object-cover"
                />
              </div>

              <div className="flex flex-col items-center">
                <p className="text-xl font-semibold">{t.name}</p>
                <p className="text-xl thecolor font-semibold">{t.dept}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurTeam;