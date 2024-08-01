'use client';

import { useRouter } from 'next/navigation';
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const router = useRouter()
  return (
    <>
    <Header />
    <Footer />
    </>
  );
}
