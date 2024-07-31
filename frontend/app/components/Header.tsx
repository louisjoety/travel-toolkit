import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo.png";

const Header = () => {
  return (
    <nav className='fixed w-full h-24 shadow-xl bg-white'>
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
        
      </div>
    </nav>
  )
}

export default Header;
