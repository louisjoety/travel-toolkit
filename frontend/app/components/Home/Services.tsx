import React from "react";
import { images } from "./Images";
import left from "./left.svg";
import right from "./right.svg";
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link"; 
import { Lato } from '@next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Services = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className={`font-lato`}>
      <div className="grid place-items-start w-full bg-gray-50 relative md:rounded-tr-3xl md:rounded-br-3xl">
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left"
                : "hidden"
            }`}
          >
            <motion.div
              initial={{
                opacity: idx === activeImage ? 0 : 0.5,
                scale: idx === activeImage ? 0.5 : 0.3,
              }}
              animate={{
                opacity: idx === activeImage ? 1 : 0.5,
                scale: idx === activeImage ? 1 : 0.3,
              }}
              transition={{
                ease: "linear",
                duration: 1,
                x: { duration: 0.5 },
              }}
              className="w-full"
            >
              <div className="py-16 text-5xl font-extrabold">{elem.title}</div>
              <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600">
                {elem.desc}
              </div>
            </motion.div>

            <Link href={elem.link}>
              <button className="uppercase py-1 px-4 rounded-lg bg-blue-500 border-2 border-transparent text-white text-md mr-4 hover:bg-blue-700">
                Try Now
              </button>
            </Link>

            <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
              <div
                className="absolute bottom-2 right-10 cursor-pointer bg-blue-500"
                onClick={clickPrev}
              >
                <Image src={left} alt="Previous" />
              </div>

              <div
                className="absolute bottom-2 right-2 cursor-pointer bg-blue-500"
                onClick={clickNext}
              >
                <Image src={right} alt="Next" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
