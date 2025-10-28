"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="about" />

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#ff990a] to-[#e87813]">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About Sunshine Finance
            </h1>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              Founded in 2010, Sunshine Finance has been a trusted partner for private lending in The Bahamas for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-[#003366] mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 2010, Sunshine Finance has been a trusted partner for private lending in The Bahamas for over a decade.
              We specialize in providing flexible financing solutions tailored to the unique needs of our clients.
            </p>

            <p className="text-lg mb-6">
              Our mission is to make the lending process simple, transparent, and accessible for all Bahamians.
              Whether you're looking to finance a new home, start a business, or consolidate debt,
              our team of experienced professionals is here to help you achieve your financial goals.
            </p>

            <h2 className="text-3xl font-bold text-[#003366] mb-6 mt-10">Our Values</h2>
            <p className="text-lg mb-6">
              At Sunshine Finance, we pride ourselves on our commitment to personalized service,
              competitive rates, and quick approvals. We believe in building long-term relationships with our clients
              based on trust, integrity, and mutual respect.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-10 mb-12">
              <div className="bg-[#F4F4F4] rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#E87813] mb-3">Customer Focus</h3>
                <p>We put our customers at the center of everything we do, providing personalized solutions and exceptional service.</p>
              </div>
              <div className="bg-[#F4F4F4] rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#E87813] mb-3">Integrity</h3>
                <p>We conduct our business with the highest standards of ethics and transparency, always acting in our clients' best interests.</p>
              </div>
              <div className="bg-[#F4F4F4] rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#E87813] mb-3">Excellence</h3>
                <p>We strive for excellence in everything we do, from our financing solutions to our customer service.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#003366] mb-6 mt-10">The Sunshine Boys Legacy</h2>
            <p className="text-lg mb-6">
              Sunshine Finance is part of the broader Sunshine Group of Companies, established by legendary Bahamian entrepreneurs known as the "Sunshine Boys."
              Their vision and entrepreneurial spirit have been driving forces in The Bahamas' financial landscape for decades.
            </p>

            <div className="bg-gradient-to-br from-[#ff990a] to-[#e87813] text-white p-6 rounded-xl my-10">
              <h3 className="text-xl font-bold mb-3">Our Commitment to The Bahamas</h3>
              <p className="mb-0">
                As a locally owned and operated financial institution, we are deeply committed to the economic development and prosperity of The Bahamas and its people.
              </p>
            </div>
          </div>

          <div id="contact" className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-black mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to learn more about our services and how we can help you get the financing you need.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#E87813] text-white px-8 py-4 rounded-[2px] font-bold text-lg hover:bg-[#E97E15] transition-all shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
