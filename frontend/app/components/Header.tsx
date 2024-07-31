'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Lato } from "@next/font/google";
import Logo from "./Logo.png";
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react";

// Load the Lato font
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // specify the weights you want to use
});

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className={`fixed w-full h-24 shadow-xl bg-white ${lato.className}`}>
      <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/translator">
              <li className="ml-10 uppercase hover:border-b text-xl">Image-to-Text</li>
            </Link>
            <Link href="/translator">
              <li className="ml-10 uppercase hover:border-b text-xl">Translate</li>
            </Link>
            <Link href="/summarize">
              <li className="ml-10 uppercase hover:border-b text-xl">Summarise</li>
            </Link>
            <Link href="/converter">
              <li className="ml-10 uppercase hover:border-b text-xl">Convert Currency</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className={
        menuOpen 
        ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
        : "fixed left-[100%] top-0 p-10 ease-in duration-500"
      }>
      </div>
    </nav>
  )
}

export default Header;
