'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Logo from '@/public/assets/Logo.png';
import Dropdown from './Home/Hero/DropDown';


const CommonNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div className={`flex justify-between items-center w-full bg-white mt-9 py-4 md:px-20 px-5 z-30 ${scrollActive ? "shadow-sm" : ""}`}>
      <Link href='/home' className="flex gap-x-1 items-center">
        <Image src={Logo} alt='logoImage' />
        <h1 className='font-bold underline'>HibirLink</h1>
      </Link>
      <div className="hidden md:flex justify-center items-center gap-x-4">
        <Dropdown />
      </div>
      <div className="flex gap-x-6 items-center">
        <Link href=''>
          <IoIosHeartEmpty size={20} className='hover:text-primary' />
        </Link>
        <Link href='/pages/cart'>
          <IoCartOutline size={20} className='hover:text-primary' />
        </Link>
        <button className='px-4 py-2 bg-primary text-white rounded-2xl text-xm hover:bg-blue-500 hidden md:block'>GetStarted</button>
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 flex justify-end">
          <div className="w-2/3 sm:w-1/3 h-full bg-white shadow-lg flex flex-col p-6">
            <button className="self-end mb-6" onClick={toggleMenu}>
              <IoMdClose size={30} />
            </button>
            <Dropdown />
            <button className='px-4 py-2 mt-4 bg-primary text-white rounded-lg text-xm hover:bg-blue-500 mb-4'>GetStarted</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CommonNavBar;