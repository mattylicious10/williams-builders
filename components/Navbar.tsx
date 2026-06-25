"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a
          href="#top"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-f8f5ee.png"
            alt="Williams Builders Ltd."
            width={70}
            height={70}
          />
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 items-center">
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

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-4">
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setOpen(false)}>Gallery</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#quote" onClick={() => setOpen(false)}>Contact</a>

          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="block bg-[#1D3A22] text-white px-4 py-2 rounded-lg text-center"
          >
            Request a Quote
          </a>
        </div>
      )}
    </header>
  );
}