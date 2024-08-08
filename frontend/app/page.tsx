'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Home/Hero';
import Partners from './components/Home/Partners';
import Slider from './components/Home/Slider';
import Questions from './components/Questions';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Header menuOpen={menuOpen} handleNav={handleNav} />
      <Hero />
      <Partners />
      <Slider />
      <Questions />
      <Footer />
    </>
  );
}
