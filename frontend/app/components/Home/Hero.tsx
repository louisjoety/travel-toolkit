import React from 'react';
import { Lato } from '@next/font/google';
import Plane from './plane.jpg';
import Image from 'next/image';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

function Hero() {
  return (
    <div className="container mx-auto px-6 flex relative py-32 pl-16"> 
      <div className="sm:w-2/3 lg:w-2/3 flex flex-col relative z-20">
        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
        <h1 className={`${lato.className} uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800`}>
          Explore Beyond
          <span className="text-5xl sm:text-7xl">Limits</span>
        </h1>
        <p className={`${lato.className} text-sm sm:text-base text-gray-700 dark:text-white`}>
            Unlock endless adventures with our travel app. Find hidden gems, plan effortlessly, and start your next journey with ease. Explore beyond limits and make every trip unforgettable.
        </p>
        <div className="flex mt-8">
        <a 
            href="#" 
            className="uppercase py-2 px-4 rounded-lg bg-blue-500 border-2 border-transparent text-white text-md mr-4 hover:bg-blue-700"
            >
            Get started
        </a>
        </div>
      </div>
      <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative z-0">
        <Image 
          src={Plane} 
          className="max-w-xs md:max-w-sm m-auto" 
          alt="Visual representation" 
          width={1200} 
          height={1200} 
        />
      </div>
    </div>
  );
}

export default Hero;
