'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Summarize() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Header menuOpen={menuOpen} handleNav={handleNav} />
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Summarizer</h1>
      <p className="text-lg">Summarize text from documents.</p>
    </main>
    <Footer />
    </>
  );
}
