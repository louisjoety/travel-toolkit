'use client';

import { useRouter } from 'next/navigation';
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Home/Hero';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
