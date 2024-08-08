import React, { useState } from 'react';
import { Lato } from '@next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How does the image-to-text conversion feature work?",
    answer: "Our app uses Optical Character Recognition (OCR) technology to extract text from images. You simply upload a photo of any document, and our app will convert it into editable text for you.",
  },
  {
    question: "Can I translate the text extracted from images?",
    answer: "Yes, once the text is extracted from an image, you can use our integrated Google Translate feature to translate the text into any supported language directly within the app.",
  },
  {
    question: "How does the NLTK summarizer work in the app?",
    answer: "The NLTK summarizer analyzes the extracted text and provides a concise summary of the content. This feature helps you quickly understand the main points of long documents or articles.",
  },
  {
    question: "How do I convert currencies using the app?",
    answer: "Our app uses the FreeCurrencyAPI to convert currencies. You can enter the amount and select the currencies you want to convert between, and the app will provide you with the current exchange rate and converted amount.",
  },
  {
    question: "Is my data secure when using these features?",
    answer: "Yes, we prioritize your privacy and data security. All data processed by our app, including text extraction, translation, summarization, and currency conversion, is handled securely and in accordance with our privacy policy.",
  },
  {
    question: "What file formats are supported for the image-to-text conversion?",
    answer: "Our app supports various image formats including JPEG, PNG, and PDF. You can upload images in these formats to convert them to text.",
  },
  {
    question: "Can I save or export the text and translations generated by the app?",
    answer: "Yes, you can save or export the text and translations generated by our app. Simply use the export options available in the app to save the content to your device or share it via email or other platforms.",
  }
];

const Questions: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
      <div className={`flex flex-col text-left basis-1/2 ${lato.className}`}>
        <p className="inline-block font-medium text-primary mb-4">
          Get answers to common questions about our app’s features and usage.
        </p>
        <p className={`sm:text-4xl text-3xl font-extrabold text-base-content ${lato.className}`}>
          Frequently Asked
        </p>
        <p className={`sm:text-4xl text-3xl font-extrabold text-base-content ${lato.className}`}>
          Questions
        </p>
      </div>
      <ul className="basis-1/2">
        {faqs.map((faq, index) => (
          <li key={index}>
            <button
              className={`relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 ${lato.className}`}
              aria-expanded={expandedIndex === index}
              onClick={() => handleToggle(index)}
            >
              <span className="flex-1 text-base-content">{faq.question}</span>
              <svg
                className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transition-transform duration-300 ${
                  expandedIndex === index ? 'rotate-180' : ''
                }`}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="7" width="16" height="2" rx="1" />
              </svg>
            </button>
            <div
              className="overflow-hidden transition-max-height duration-300 ease-in-out"
              style={{
                maxHeight: expandedIndex === index ? '1000px' : '0', // Adjust 1000px to a reasonable value
              }}
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;