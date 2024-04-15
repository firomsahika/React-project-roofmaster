import React from 'react';
import img1 from "../../assets/team/person_1.jpg"
import img2 from "../../assets/team/person_2.jpg"
import img3 from "../../assets/team/person_3.jpg"
import img4 from "../../assets/team/person_4.jpg"
import img5 from "../../assets/team/person_5.jpg"
import img6 from "../../assets/team/person_6.jpg"
import img7 from "../../assets/team/person_7.jpg"
import img8 from "../../assets/team/person_8.jpg"


const ExecutiveTeam = () => {
  const executives = [
    {
      id: 1,
      image: img1,
      name: 'Zyne Tyler',
      job: 'CEO & Co-Founder'
    },
    {
      id: 2,
      image: img2,
      name: 'Molly Harrison',
      job: 'Co_Founder & Lead-Engineer'
    },
    {
      id: 3,
      image: img3,
      name: 'Adonis Roberts',
      job: 'Senior Software Engineer'
    },
    {
      id: 4,
      image: img4,
      name: 'Margaret Parson',
      job: 'Senior UI/UX Designer'
    },
    {
      id: 5,
      image: img5,
      name: 'Kade Casillo',
      job: 'Software Engineer'
    },
    {
      id: 6,
      image: img6,
      name: 'Lena Wringhat',
      job: 'Community Manager'
    },
    {
      id: 7,
      image: img7,
      name: 'Luis Lindesy',
      job: 'Business Development'
    },
    {
      id: 8,
      image:img8,
      name: 'Norah Patterson',
      job: 'Marketing Manager'
    }
  ];

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-10'>
      <div className='m-auto lg:mx-20 py-10 flex flex-col items-center justify-center gap-10'>
        <div className='flex items-center justify-center flex-col'>
          <p className='text-4xl sm:text-5xl font-semibold'>The Executive Team</p>
          <p className='text-xl sm:text-2xl font-semibold text-center'>
            There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill.
          </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          {executives.map((e) => (
            <div key={e.id} className='flex flex-col items-center justify-center gap-2 pb-20'>
              <img className='w-40 h-40 sm:w-48 sm:h-48 rounded-full' src={e.image} alt='' />
              <p className='text-2xl sm:text-3xl font-bold'>{e.name}</p>
              <p className='text-xl sm:text-2xl thecolor font-semibold'>{e.job}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveTeam;