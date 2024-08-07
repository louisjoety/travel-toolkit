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
      <div className="relative bg-[#e7dfd9] md:rounded-tr-3xl md:rounded-br-3xl">
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-center"
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
              className="w-full text-center"
            >
              <div className="py-16 text-5xl font-extrabold">{elem.title}</div>
              <div className="leading-relaxed font-medium text-base tracking-wide italic text-gray-600">
                {elem.desc}
              </div>
            </motion.div>

            <div className="mt-4 text-center">
              <Link href={elem.link}>
                <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md">
                  Order Now
                </button>
              </Link>
            </div>

            <div className="absolute bottom-0 w-full flex justify-between items-center px-4">
              <div
                className="cursor-pointer"
                onClick={clickPrev}
              >
                <Image src={left} alt="Previous" />
              </div>

              <div
                className="cursor-pointer"
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
