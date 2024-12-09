'use client';

import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState, useCallback } from 'react';
import { Lato } from "next/font/google";
import Dropzone from "../image-to-text/Dropzone";
import Questions from "../components/Questions";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Summarize() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handleSummarize = async () => {
    if (!file) {
      alert('Please select an image first.');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:5000/api/convert_and_summarize', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setSummary(data.summary);
      } else {
        console.error('Error processing image');
        alert('Error processing the image. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={lato.className}>
      <Header menuOpen={menuOpen} handleNav={handleNav} />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Summarizer</h1>
        <Dropzone onDrop={onDrop} />
        {file && <p className="mb-4">Selected file: {file.name}</p>}
        <button
          onClick={handleSummarize}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Summarize'}
        </button>
        {summary && (
          <div className="mt-6 p-4 border rounded-lg bg-gray-100">
            <h2 className="text-2xl font-semibold">Summary</h2>
            <p>{summary}</p>
          </div>
        )}
      </main>
      <Questions />
      <Footer />
    </div>
  );
}
