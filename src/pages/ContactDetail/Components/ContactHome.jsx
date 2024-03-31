import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AOS from 'aos'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNav = ()=>{
    setIsOpen(!isOpen)
  }
    useEffect(()=>{
      AOS.init({
        duration:2000
      })
    })

    const navColor =  ({ isActive })=>{
      return {
       color: isActive ? "#FFB703" : ""
      }
 
    }
    

    const myStyle = {
        backgroundImage: `url('src/assets/bg/min-hero.jpg')`,
      };
  return (
    <div 
    style={myStyle}
    className='bg-cover h-80  '>

      <div className='md:hidden flex float-end p-8'>
        <button onClick={toggleNav}>
          {isOpen ? <FaBars className='text-white' size={20}/> : <FaBars className='text-white' size={20} />}
        </button>
      </div>


      {isOpen && (
          <div data-aos="fade-down" className="md:flex absolute basis-full rounded-lg mt-14 min-w-full flex-col items-center">
            <nav className="text-white flex flex-col w-full rounded-lg">
              <ul className="flex gap-8 rounded-lg p-4 text-black font-semibold flex-col bg-white">
                <li>
                  <NavLink to="/" style={navColor}  >
                    Home
                  </NavLink>
                </li>
                <li>
                <NavLink to="/about" style={navColor}>
                     
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" style={navColor}  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" style={navColor} >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}

      
      <div className='hidden md:flex justify-end px-36'>
      <nav className='h-20 flex items-center justify-center text-white'>
            <ul className='flex gap-8 font-semibold '>
                <li><NavLink style={navColor} to="/">Home</NavLink></li>
                <li><NavLink style={navColor} to="/about">About</NavLink></li>
                <li><NavLink style={navColor} to="/services">Services</NavLink></li>
                <li><NavLink style={navColor} to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
      </div>
      <div className='flex items-center justify-center'>
        <p
        data-aos="zoom-in"
        className='text-5xl text-white font-bold pt-20'>Contact US </p>
      </div>
    </div>
  )
}

export default Home
