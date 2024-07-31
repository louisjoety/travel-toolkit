import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Lato } from "@next/font/google";
import Logo from "./Logo.png";

// Load the Lato font
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // specify the weights you want to use
});

const Header = () => {
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
        <div>
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
      </div>
    </nav>
  )
}

export default Header;
