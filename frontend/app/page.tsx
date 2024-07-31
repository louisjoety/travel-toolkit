'use client';

import { useRouter } from 'next/navigation';
import "./globals.css";

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Pocket Translate</h1>
        <div className="flex justify-center space-x-8">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-3">Translator</h2>
            <p className="text-sm mb-3">Translate text from images to English</p>
            <button type="button" onClick={() => router.push('/translator')}>
              Dashboard
             </button>
          </div>
          <div className="card">
            <h2 className="text-2xl font-semibold mb-3">Summarize</h2>
            <p className="text-sm mb-3">Summarize text from documents</p>
            <button type="button" onClick={() => router.push('/summarize')}>
              Dashboard
             </button>
          </div>
          <div className="card">
            <h2 className="text-2xl font-semibold mb-3">Converter</h2>
            <p className="text-sm mb-3">Convert images to text</p>
            <button type="button" onClick={() => router.push('/converter')}>
              Dashoard
             </button>
          </div>
        </div>
      </div>
    </main>
  );
}
