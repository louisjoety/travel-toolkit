'use client';

import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Questions from "../components/Questions";
import { useDropzone } from 'react-dropzone';
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Translator() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = async () => {
    if (!file) {
      alert('Please select an image first.');
      return;
    }

    setIsLoading(true);
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

  return (
    <div className={lato.className}>
      <Header menuOpen={menuOpen} handleNav={handleNav} />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Image-to-text</h1>
        <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-8 mb-4 cursor-pointer">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the image here ...</p>
          ) : (
            <p>Drag 'n' drop an image here, or click to select an image</p>
          )}
        </div>
        {file && <p className="mb-4">Selected file: {file.name}</p>}
        <button 
          onClick={handleSubmit} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Submit'}
        </button>
        {extractedText && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Extracted Text:</h2>
            <p className="whitespace-pre-wrap">{extractedText}</p>
          </div>
        )}
      </main>
      <Questions />
      <Footer />
    </div>
  );
}