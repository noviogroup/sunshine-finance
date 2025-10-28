"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoanCalculator from "@/components/LoanCalculator";
import Link from "next/link";

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="calculator" />

      {/* Hero with background image */}
      <section className="relative pt-44 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/family-dining-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff990a]/25 to-[#e87813]/35" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-[#E87813] rounded-[6px]">
            <span className="text-white font-semibold text-sm">Plan Your Payments</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Loan Calculator</h1>
          <p className="text-white/90 text-lg">
            Estimate monthly payments and total costs. Actual terms may vary; contact us for a personalized quote.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#F4F4F4]">
        <div className="max-w-4xl mx-auto">
          <LoanCalculator />
          <div className="text-center mt-8">
            <Link
              href="/apply"
              className="inline-block bg-[#E87813] text-white px-8 py-4 rounded-[2px] font-bold hover:bg-[#E97E15] transition-all shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

