import React, { useEffect } from 'react';
import { FaBookOpen, FaClipboard, FaHandHoldingUsd, FaHandshake, FaHourglassHalf, FaShieldAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MissionPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  const cards = [
    {
      id: 1,
      icon: <FaBookOpen />,
      heading: 'Our Vision',
      text: 'Our vision at RoofMaster is to be the leading provider of roofing services in our region, known for our excellent workmanship, superior customer service, and commitment to using only the highest-quality products'
    },
    {
      id: 2,
      icon: <FaHourglassHalf />,
      heading: 'Our Value',
      text: 'Our vision at RoofMaster is to be the leading provider of roofing services in our region, known for our excellent workmanship, superior customer service, and commitment to using only the highest-quality product'
    },
    {
      id: 3,
      icon: <FaClipboard />,
      heading: 'Our Mission',
      text: 'Our vision at RoofMaster is to be the leading provider of roofing services in our region, known for our excellent workmanship, superior customer service, and commitment to using only the highest-quality product'
    },
    {
      id: 4,
      icon: <FaHandshake />,
      heading: 'Quality first',
      text: 'Our vision at RoofMaster is to be the leading provider of roofing services in our region, known for our excellent workmanship, superior customer service, and commitment to using only the highest-quality product'
    },
    {
      id: 5,
      icon: <FaShieldAlt />,
      heading: 'Reliable Service',
      text: 'Our vision at RoofMaster is to be the leading provider of roofing services in our region, known for our excellent workmanship, superior customer service, and commitment to using only the highest-quality product'
    },
    {
      id: 6,
      icon: <FaHandHoldingUsd />,
      heading: 'Affordable Price',
      text: 'Our vision at RoofMaster is to be the leading provider of roofing services in our region, known for our excellent workmanship, superior customer service, and commitment to using only the highest-quality product'
    }
  ];

  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-4 md:mx-10 lg:mx-28 pb-20'>
      {cards.map((card) => (
        <div
          key={card.id}
          data-aos='zoom-in'
          className='flex items-center justify-center flex-col gap-4 bg-gray-100 p-10 rounded-xl'
        >
          <p className='text-amber-400 text-4xl'>{card.icon}</p>
          <p className='text-3xl font-semibold'>{card.heading}</p>
          <p className='text-center'>{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default MissionPage;