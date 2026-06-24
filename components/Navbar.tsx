"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Image
          src="/logo-f8f5ee.png"
          alt="Williams Builders Ltd."
          width={70}
          height={70}
        />

        <div className="hidden md:flex gap-8 items-center">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Gallery</a>
          <a href="#about">About</a>
          <a href="#quote">Contact</a>

          <a
            href="#quote"
            className="bg-[#1D3A22] text-white px-5 py-2 rounded-lg hover:bg-[#B78B3A] transition"
          >
            Request a Quote
          </a>
        </div>
      </nav>
    </header>
  );
}