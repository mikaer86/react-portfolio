import React from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  const [nav, setNav] = useState(false);

  const clickHandler = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[2.6rem] justify-between items-center px-4 bg-[#1f253bf3] text-gray-300'>
      {/* main menu */}
      <div className='hidden md:flex '>
        <ul className='flex'>
          <li>
            <Link to='intro' smooth={true} duration={500}>
              Intro
            </Link>
          </li>
          <li>
            <Link to='projects' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger menu */}
      <div onClick={clickHandler} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#1f253bf3] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>Bio</li>
        <li className='py-6 text-4xl'>Projects</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* Social icons */}
      <div className='flex fixed flex-col top-[35%] left-[0]'>
        <ul>
          <li className='w-[175px] h-[60px] flex justify-between ml-[-103px] hover:ml-[-18px] duration-300 bg-[#2d439299]'>
            <a
              className='flex justify-between items-center w-full text-grey-300'
              href='/'
            >
              LinkedIn <FaLinkedin size={31} />
            </a>
          </li>

          <li className='w-[175px] h-[60px] flex justify-between ml-[-103px] hover:ml-[-18px] duration-300 bg-[#2d439299]'>
            <a
              className='flex justify-between items-center w-full text-grey-300'
              href='/'
            >
              Github <FaGithub size={31} />
            </a>
          </li>

          <li className='w-[175px] h-[60px] flex justify-between ml-[-103px] hover:ml-[-18px] duration-300 bg-[#2d439299]'>
            <a
              className='flex justify-between items-center w-full text-grey-300'
              href='/'
            >
              Facebook <FaFacebook size={31} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
