'use client';

import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Questions from "../components/Questions";
import { useDropzone } from 'react-dropzone';

export default function Translator() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [extractedText, setExtractedText] = useState('');
  const router = useRouter();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/convert', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setExtractedText(data.text);
      } else {
        console.error('Error converting image to text');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <Header menuOpen={menuOpen} handleNav={handleNav} />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Image-to-text</h1>
        <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-8 mb-8 cursor-pointer">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the image here ...</p>
          ) : (
            <p>Drag 'n' drop an image here, or click to select an image</p>
          )}
        </div>
        {extractedText && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Extracted Text:</h2>
            <p className="whitespace-pre-wrap">{extractedText}</p>
          </div>
        )}
      </main>
      <Questions />
      <Footer />
    </>
  );
}