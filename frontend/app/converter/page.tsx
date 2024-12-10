'use client';

import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Questions from "../components/Questions";
import "../globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const currencies = [
  { code: 'EUR', name: 'Euro' },
  { code: 'USD', name: 'US Dollar' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'BGN', name: 'Bulgarian Lev' },
  { code: 'CZK', name: 'Czech Republic Koruna' },
  { code: 'DKK', name: 'Danish Krone' },
  { code: 'GBP', name: 'British Pound Sterling' },
  { code: 'HUF', name: 'Hungarian Forint' },
  { code: 'PLN', name: 'Polish Zloty' },
  { code: 'RON', name: 'Romanian Leu' },
  { code: 'SEK', name: 'Swedish Krona' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'ISK', name: 'Icelandic Króna' },
  { code: 'NOK', name: 'Norwegian Krone' },
  { code: 'HRK', name: 'Croatian Kuna' },
  { code: 'RUB', name: 'Russian Ruble' },
  { code: 'TRY', name: 'Turkish Lira' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'BRL', name: 'Brazilian Real' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'CNY', name: 'Chinese Yuan' },
  { code: 'HKD', name: 'Hong Kong Dollar' },
  { code: 'IDR', name: 'Indonesian Rupiah' },
  { code: 'ILS', name: 'Israeli New Sheqel' },
  { code: 'INR', name: 'Indian Rupee' },
  { code: 'KRW', name: 'South Korean Won' },
  { code: 'MXN', name: 'Mexican Peso' },
  { code: 'MYR', name: 'Malaysian Ringgit' },
  { code: 'NZD', name: 'New Zealand Dollar' },
  { code: 'PHP', name: 'Philippine Peso' },
  { code: 'SGD', name: 'Singapore Dollar' },
  { code: 'THB', name: 'Thai Baht' },
  { code: 'ZAR', name: 'South African Rand' }
];

export default function Converter() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNav = () => setMenuOpen(!menuOpen);

  const handleCurrencyConvert = async () => {
    setLoading(true); 
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
    } finally {
      setLoading(false); // Set loading to false after the conversion process is done
    }
  };

  return (
    <>
      <Header menuOpen={menuOpen} handleNav={handleNav} />
      <main className={`${lato.className} flex flex-col items-center justify-center p-6`}>
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
          
          {/* From Currency Dropdown */}
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="border p-2 mb-4"
          >
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.name} ({currency.code})
              </option>
            ))}
          </select>

          {/* To Currency Dropdown */}
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="border p-2 mb-4"
          >
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.name} ({currency.code})
              </option>
            ))}
          </select>

          <button
            onClick={handleCurrencyConvert}
            className="bg-blue-500 text-white px-4 py-2"
          >
            Convert
          </button>
          
          {/* Show loading spinner while converting */}
          {loading ? (
            <div className="mt-4">
              <div className="animate-spin rounded-full border-t-4 border-blue-500 w-12 h-12 mx-auto"></div>
              <p className="text-lg mt-4">Converting...</p>
            </div>
          ) : (
            <p className="text-lg mt-4">
              {convertedAmount && `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`}
            </p>
          )}
        </div>
      </main>
      <Questions />
      <Footer />
    </>
  );
}
