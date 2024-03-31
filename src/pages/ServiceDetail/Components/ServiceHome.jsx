import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import { FaBars } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const ServiceHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  const navColor = ({ isActive }) => {
    return {
      color: isActive ? '#FFB703' : '',
    };
  };

  const myStyle = {
    backgroundImage: `url('src/assets/bg/min-hero.jpg')`,
  };

  return (
    <div style={myStyle} className="bg-cover">
      <div className="h-screen lg:h-80 flex flex-col justify-center items-center">
        <div className="md:hidden flex absolute top-4 right-4">
          <button onClick={toggleNav}>
            {isOpen ? <FaBars className="text-white" size={20} /> : <FaBars className="text-white" size={20} />}
          </button>
        </div>

        {isOpen && (
          <div data-aos="fade-down" className="md:flex absolute basis-full rounded-lg mt-14 min-w-full flex-col items-center">
            <nav className="text-white flex flex-col w-full rounded-lg">
              <ul className="flex gap-8 rounded-lg p-4 text-black font-semibold flex-col bg-white">
                <li>
                  <NavLink to="/" style={navColor}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" style={navColor}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" style={navColor}>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" style={navColor}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <div className="hidden md:flex px-4 lg:absolute lg:top-4 lg:right-4">
          <nav className="h-20 flex items-center justify-end text-white">
            <ul className="flex gap-8 font-semibold">
              <li>
                <NavLink to="/" style={navColor}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" style={navColor}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" style={navColor}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" style={navColor}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-center">
          <p data-aos="zoom-in" className="text-5xl flex items-center text-white font-bold">
            Our Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceHome;