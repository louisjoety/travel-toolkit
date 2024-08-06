'use client';

import { useRouter } from 'next/navigation';
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.
          </p>
          <p className="mb-4">
            Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit amet at magna. Aliquam aliquet sem eu nulla varius feugiat.
          </p>
          <p className="mb-4">
            Mauris a odio at ligula cursus venenatis. Sed aliquam nunc vel gravida cursus. Cras ut velit et felis aliquet volutpat et non mauris.
          </p>
          <p className="mb-4">
            Donec interdum, nulla a scelerisque volutpat, sapien mi egestas urna, eu pellentesque ex mi nec eros. Vivamus venenatis, erat nec facilisis interdum, urna dolor luctus elit, quis varius lacus orci eget nisi.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
