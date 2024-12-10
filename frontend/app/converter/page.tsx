'use client';

import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Questions from "../components/Questions";

export default function Converter() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState('');

  const handleNav = () => setMenuOpen(!menuOpen);

  const handleCurrencyConvert = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/currency_convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount,
          from_currency: fromCurrency,
          to_currency: toCurrency
        }),
      });

      const data = await response.json();
      
      if (data.converted_amount) {
        setConvertedAmount(data.converted_amount);
      } else {
        setConvertedAmount(data.error);
      }
    } catch (error) {
      setConvertedAmount('Error occurred while fetching data');
    }
  };

  return (
    <>
      <Header menuOpen={menuOpen} handleNav={handleNav} />
      <main className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-8">Currency Converter</h1>
        <div>
          <h2 className="text-2xl m-4">Currency Converter</h2>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className="border p-2 mb-4"
          />
          <input
            type="text"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value.toUpperCase())}
            placeholder="From (e.g., USD)"
            className="border p-2 mb-4"
          />
          <input
            type="text"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value.toUpperCase())}
            placeholder="To (e.g., EUR)"
            className="border p-2 mb-4"
          />
          <button
            onClick={handleCurrencyConvert}
            className="bg-blue-500 text-white px-4 py-2"
          >
            Convert
          </button>
          <p className="text-lg mt-4">
            {convertedAmount && `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`}
          </p>
        </div>
      </main>
      <Questions />
      <Footer />
    </>
  );
}
