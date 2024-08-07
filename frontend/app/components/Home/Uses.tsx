import React from 'react';
import { Lato } from '@next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

function Uses() {
  return (
    <div className={`container relative z-10 mx-auto mt-12 ${lato.className}`} style={{ margin: '2/3' }}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Trusted Softwares</h2>
      </div>
      
      <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
        {[
          { src: "https://upload.wikimedia.org/wikipedia/commons/1/11/Toolbaricon_TesseractOCR.png", alt: "Tesseract OCR", text: "Tesseract OCR" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png", alt: "GoogleTrans", text: "GoogleTrans" },
          { src: "https://freecurrencyapi.com/img/favicon/android-icon-192x192.png", alt: "FreecurrencyAPI", text: "FreecurrencyAPI" },
          { src: "https://miro.medium.com/v2/resize:fit:592/1*YM2HXc7f4v02pZBEO8h-qw.png", alt: "NLTK", text: "NLTK" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png", alt: "Flask", text: "Flask" },
          { src: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png", alt: "FastAPI", text: "FastAPI" },
          { src: "https://media.geeksforgeeks.org/wp-content/uploads/20200210175202/django-basics.png", alt: "Django", text: "Django" },
          { src: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png", alt: "Next.js", text: "Next.js" }
        ].map((item, index) => (
          <div key={index} className="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
              <img
                src={item.src}
                className="block mx-auto w-32 h-32 object-contain" 
                alt={item.alt}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Uses;
