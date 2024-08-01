import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lato } from "@next/font/google";
import Logo from "./Logo.png";

function Footer() {
  return (
    <>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
                            <Link href="/">
                                <Image 
                                    src={Logo}
                                    alt="Logo"
                                    width={50}
                                    height={50}
                                    className="cursor-pointer"
                                    priority
                                />
                            </Link> 
						</p>
						<div className="flex gap-6 pb-5">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                            </a>
                            <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                            </a>
                        </div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Services</p>
                            <Link href="/translator">
                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                    Image-to-Text
                                </li>
                            </Link>
                            <Link href="/translator">
                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                    Translate
                                </li>
                            </Link>
                            <Link href="/summarize">
                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                    Summarise
                                </li>
                            </Link>
                            <Link href="/converter">
                                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                    Convert Currency
                                </li>
                            </Link>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Products
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Pricing
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Careers
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Press & Media
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Tesseract OCR
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							NLTK
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Next.js
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Google Translate
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							FreeCurrencyAPI
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© 2024 All rights reserved | For Travelling and Leisure Purposes
				</h1>
			</div>
		</>
  )
}

export default Footer