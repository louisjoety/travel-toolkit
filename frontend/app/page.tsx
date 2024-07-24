"use client";

import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:8000/get-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number: 1 }),
      });
      const data = await response.json();
      setMessage(data.quote);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <button
          onClick={handleClick}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Get Quote{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </button>
        {message && (
          <div className="mt-6 text-lg font-medium text-green-500">{message}</div>
        )}
      </div>
    </main>
  );
}
