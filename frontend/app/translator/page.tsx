'use client';

import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Questions from "../components/Questions";

export default function Translator() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Header menuOpen={menuOpen} handleNav={handleNav} />
     <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Translator</h1>
      <p className="text-lg">Translate texts to english.</p>
    </main>
    <Questions />
    <Footer />
    </>
  );
}
