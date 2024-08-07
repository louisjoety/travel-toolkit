"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Lato } from '@next/font/google';
import { images } from "./Images";
import Services from "./Services";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className={`${lato.className} pt-8 bg-gray-50`}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
      </div>
      <main className="mt-12 grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
        <div
          className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}
        >
          {images.map((elem, idx) => (
            <div
              key={idx}
              className={`${
                idx === activeImage
                  ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                  : "hidden"
              }`}
            >
              <Image
                src={elem.src}
                alt={elem.title}
                width={400}
                height={400}
                className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
              />
            </div>
          ))}
        </div>
        <Services
          activeImage={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      </main>
    </div>
  );
};

export default Slider;
