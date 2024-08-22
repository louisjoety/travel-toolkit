'use client';

import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Questions from "../components/Questions";
import { Lato } from "next/font/google";
import Dropzone from "../image-to-text/Dropzone";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function ImageToText() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string>('');
  const [translatedText, setTranslatedText] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [textGenerated, setTextGenerated] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handleSubmit = async () => {
    if (!file) {
      alert('Please select an image first.');
      return;
    }

    setIsLoading(true);
    setTextGenerated(false); 
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:5000/api/convert', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setExtractedText(data.text);
        await handleTranslation(data.text);
      } else {
        console.error('Error converting image to text');
        alert('Error converting image to text. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTranslation = async (text: string) => {
    try {
      const response = await fetch('http://localhost:5000/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text,
          target_language: 'en', 
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setTranslatedText(data.translated_text);
        setTextGenerated(true); 
      } else {
        console.error('Error translating text');
        alert('Error translating text. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while translating. Please try again.');
    }
  };

  return (
    <div className={lato.className}>
      <Header menuOpen={menuOpen} handleNav={handleNav} />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Translate Now</h1>
        <Dropzone onDrop={onDrop} />
        {file && <p className="mb-4">Selected file: {file.name}</p>}
        <button 
          onClick={handleSubmit} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Submit'}
        </button>
        <div className="mt-8 w-full max-w-4xl">
          {extractedText && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Extracted Text</h2>
              <p className="p-4 border border-gray-300 rounded bg-gray-50">{extractedText}</p>
            </div>
          )}
          {textGenerated && translatedText && (
            <div>
              <h2 className="text-2xl font-bold mb-2">Translated Text</h2>
              <p className="p-4 border border-gray-300 rounded bg-gray-50">{translatedText}</p>
            </div>
          )}
        </div>
      </main>
      <Questions />
      <Footer />
    </div>
  );
}
