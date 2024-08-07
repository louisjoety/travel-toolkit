import React from 'react';
import { Lato } from '@next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

function Uses() {
  return (
    <div className={`container relative z-40 mx-auto mt-12 ${lato.className}`}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Trusted Softwares</h2>
      </div>
      
      <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
        {[
          { src: "https://redpixelthemes.com/assets/images/icon-portfolio-green.svg", alt: "Portfolio", text: "portfolio" },
          { src: "https://redpixelthemes.com/assets/images/icon-blog-green.svg", alt: "Blog", text: "blog" },
          { src: "https://redpixelthemes.com/assets/images/icon-ecommerce-green.svg", alt: "Ecommerce", text: "ecommerce" },
          { src: "https://redpixelthemes.com/assets/images/icon-startup-green.svg", alt: "Startup", text: "startup" },
          { src: "https://redpixelthemes.com/assets/images/icon-business-green.svg", alt: "Business", text: "business" },
          { src: "https://redpixelthemes.com/assets/images/icon-lifestyle-green.svg", alt: "Lifestyle", text: "lifestyle" },
          { src: "https://redpixelthemes.com/assets/images/icon-landing-page-green.svg", alt: "Landing Pages", text: "landing pages" },
          { src: "https://redpixelthemes.com/assets/images/icon-health-green.svg", alt: "Health", text: "health" }
        ].map((item, index) => (
          <a key={index} href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
              <img
                src={item.src}
                className="block mx-auto"
                alt={item.alt}
              />
              <p className={`pt-4 text-sm font-medium capitalize text-green-900 lg:text-lg md:text-base md:pt-6 ${lato.className}`}>
                {item.text}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Uses;
