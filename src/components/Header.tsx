"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  currentPage?: 'home' | 'about' | 'financing' | 'contact' | 'calculator';
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#E87813] text-white py-2.5 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+12425026500" className="flex items-center gap-1.5 hover:text-[#141414] transition-colors font-semibold">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>(242) 502-6500</span>
            </a>
            <a href="mailto:info@sunshinefinance.bs" className="flex items-center gap-1.5 hover:text-[#141414] transition-colors font-semibold">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span className="hidden sm:inline">info@sunshinefinance.bs</span>
            </a>
            <span className="hidden lg:flex items-center gap-1.5 font-semibold">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Mon-Fri: 9AM-5PM
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold">
            <span className="hidden md:flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Shirley Street
            </span>
            <span className="hidden lg:inline">|</span>
            <span className="hidden md:flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Carmichael Road
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-[36px] left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <Link href="/">
                <img
                  src="/Sunshine_Finance_Logo_2019.png"
                  alt="Sunshine Finance"
                  className="h-20 w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8" style={{ fontFamily: "'EB Garamond', serif" }}>
              <Link
                href="/"
                className={`transition-colors font-medium text-lg ${
                  currentPage === 'home' ? 'text-[#E87813] font-semibold' : 'text-gray-700 hover:text-[#E87813]'
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`transition-colors font-medium text-lg ${
                  currentPage === 'about' ? 'text-[#E87813] font-semibold' : 'text-gray-700 hover:text-[#E87813]'
                }`}
              >
                About
              </Link>
              <Link
                href="/financing"
                className={`transition-colors font-medium text-lg ${
                  currentPage === 'financing' ? 'text-[#E87813] font-semibold' : 'text-gray-700 hover:text-[#E87813]'
                }`}
              >
                Financing
              </Link>
              <Link
                href="/calculator"
                className={`transition-colors font-medium text-lg ${
                  currentPage === 'calculator' ? 'text-[#E87813] font-semibold' : 'text-gray-700 hover:text-[#E87813]'
                }`}
              >
                Calculator
              </Link>
              <Link
                href="/contact"
                className={`transition-colors font-medium text-lg ${
                  currentPage === 'contact' ? 'text-[#E87813] font-semibold' : 'text-gray-700 hover:text-[#E87813]'
                }`}
              >
                Contact
              </Link>
              <Link
                href="/apply"
                className="bg-[#E87813] text-white px-6 py-3 rounded-[2px] font-semibold hover:bg-[#E97E15] transition-all shadow-lg hover:shadow-xl"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#E87813] p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3" style={{ fontFamily: "'EB Garamond', serif" }}>
              <Link
                href="/"
                className={`block py-2 font-medium text-lg ${
                  currentPage === 'home' ? 'text-[#E87813] font-semibold' : 'text-gray-700 hover:text-[#E87813]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block py-2 font-medium text-lg ${
                  currentPage === 'about' ? 'text-[#E87813] font-semibold' : 'text-gray-700 hover:text-[#E87813]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/financing"
                className={`block py-2 font-medium text-lg ${
                  currentPage === 'financing' ? 'text-[#E87813] font-semibold' : 'text-gray-700 hover:text-[#E87813]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Financing
              </Link>
              <Link
                href="/calculator"
                className={`block py-2 font-medium text-lg ${
                  currentPage === 'calculator' ? 'text-[#E87813] font-semibold' : 'text-gray-700 hover:text-[#E87813]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Calculator
              </Link>
              <Link
                href="/contact"
                className={`block py-2 font-medium text-lg ${
                  currentPage === 'contact' ? 'text-[#E87813] font-semibold' : 'text-gray-700 hover:text-[#E87813]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/apply"
                className="block bg-[#E87813] text-white px-6 py-3 rounded-[2px] font-semibold text-center hover:bg-[#E97E15] transition-all"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
