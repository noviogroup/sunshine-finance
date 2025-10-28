"use client";

import Link from "next/link";
import { GraduationCap, Home, Plane, DollarSign, Car, CreditCard, CheckCircle, Clock, Shield, FileText } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FinancingPage() {

  const loanOptions = [
    {
      icon: GraduationCap,
      title: "College Bound",
      subtitle: "School Loan Program",
      description: "Sunshine Finance offers a School Loan Program (Education Loans) where you can be confident, every year, your back to school money will be in place; tuition, college fees, books, uniforms, travel.",
      features: ["Annual education funding", "Covers tuition & fees", "Books & uniforms", "Travel expenses"],
      color: "bg-gradient-to-br from-[#ffb224] to-[#e87813]"
    },
    {
      icon: Home,
      title: "Let Us Upgrade You",
      subtitle: "Estate Equity Loans",
      description: "Estate Equity Loans are perfect if you need money for your business, school, home remodeling or for any worthwhile purpose, and have real estate to back your request? Let us help you finance your goals.",
      features: ["Business investments", "Home remodeling", "Educational expenses", "Real estate backed"],
      color: "bg-gradient-to-br from-[#ffb224] to-[#e87813]"
    },
    {
      icon: Plane,
      title: "Vacation Differently",
      subtitle: "Vacation & Lifestyle Loans",
      description: "Need money for your Vacation, new business, school, home remodeling or for any worthwhile purpose, and have real estate to back your request? Let us help you finance your goals.",
      features: ["Vacation funding", "Business opportunities", "Home improvements", "Flexible terms"],
      color: "bg-gradient-to-br from-[#ffb224] to-[#e87813]"
    },
    {
      icon: DollarSign,
      title: "Need $500 Fast?",
      subtitle: "Quick Cash Loans",
      description: "Sunshine Finance begins its loan product as low as $500, provides a 48 hour decision time and next day payout on an approval. Repayment amounts are affordable and there is no penalty to prepay, Try Us!",
      features: ["Loans from $500", "48-hour decision", "Next day payout", "No prepayment penalty"],
      color: "bg-gradient-to-br from-[#ffb224] to-[#e87813]"
    },
    {
      icon: Car,
      title: "Need a New Ride?",
      subtitle: "Auto Loans",
      description: "Auto Loans for those who meet our credit guidelines benefit from Negotiable Down Payment, Low Monthly Payments, Insurance Premium financing included, Quick Turnaround.",
      features: ["Negotiable down payment", "Low monthly payments", "Insurance financing", "Quick turnaround"],
      color: "bg-gradient-to-br from-[#ffb224] to-[#e87813]"
    },
    {
      icon: CreditCard,
      title: "One Monthly Payment",
      subtitle: "Debt Consolidation - Fresh Start",
      description: "\"Fresh Start\" For many, debt consolidation is the fast road to financial recovery. Let us payoff your bills, loans, credit cards – and give you one easy and lower monthly payment, helping you to save!",
      features: ["Consolidate all debts", "One easy payment", "Lower monthly costs", "Financial recovery"],
      color: "bg-gradient-to-br from-[#ffb224] to-[#e87813]"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="financing" />

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/family-happy-outdoors.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff990a]/15 to-[#e87813]/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-[#E87813] rounded-[6px]">
            <span className="text-white font-semibold text-sm">Loan Options</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Flexible Financing Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            From education to auto loans, vacation funding to debt consolidation - we have the perfect loan solution for your needs
          </p>
        </div>
      </section>

      {/* Loan Options Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanOptions.map((loan, index) => (
              <div key={index} className="bg-white rounded-[6px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col">
                {/* Icon Header with Gradient */}
                <div className={`${loan.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <loan.icon size={48} className="relative z-10 mb-4" />
                  <h3 className="text-2xl font-bold mb-1 relative z-10">{loan.title}</h3>
                  <p className="text-white/90 text-sm relative z-10">{loan.subtitle}</p>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {loan.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6 flex-grow">
                    {loan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-[#E87813] flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Apply Button */}
                  <a
                    href="/#apply"
                    className="block w-full bg-[#E87813] text-white text-center px-6 py-3 rounded-[2px] font-semibold hover:bg-[#E97E15] transition-all mt-auto"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Loans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#E87813] rounded-full"></div>
              <span className="text-[#E87813] font-bold text-sm uppercase tracking-wide">Benefits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
              Why Choose <span className="text-[#E87813]">Sunshine Finance</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-[6px] shadow-md">
              <div className="w-20 h-20 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Fast Approvals</h3>
              <p className="text-gray-600 leading-relaxed">
                Most applications reviewed within 24-48 hours with quick decision times and next-day payouts available.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-[6px] shadow-md">
              <div className="w-20 h-20 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Flexible Terms</h3>
              <p className="text-gray-600 leading-relaxed">
                We tailor loan products to meet your needs and capacity. No prepayment penalties on most loans.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-[6px] shadow-md">
              <div className="w-20 h-20 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Simple Process</h3>
              <p className="text-gray-600 leading-relaxed">
                Straightforward application process with clear requirements and helpful staff to guide you through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#E87813] rounded-full"></div>
              <span className="text-[#E87813] font-bold text-sm uppercase tracking-wide">Application Requirements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
              What You'll <span className="text-[#E87813]">Need to Apply</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <img
              src="/required-documents.jpg"
              alt="Required Documents - Current Job Letter, Pay Slips, NIB Smart Card and Passport, Voters Card or Utility Bill"
              className="w-full h-auto rounded-[6px] shadow-2xl"
            />
          </div>

          <div className="mt-12 bg-white rounded-[6px] p-8 max-w-4xl mx-auto shadow-md">
            <h3 className="text-2xl font-bold text-[#003366] mb-6 text-center">Ready to Get Started?</h3>
            <p className="text-lg text-gray-600 text-center mb-8">
              Gather your documents and apply today. Our team is ready to help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#apply"
                className="inline-flex items-center justify-center bg-[#E87813] text-white px-8 py-4 rounded-[2px] font-bold text-lg hover:bg-[#E97E15] transition-all shadow-lg"
              >
                Apply Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#003366] px-8 py-4 rounded-[2px] font-semibold text-lg hover:bg-gray-50 transition-all border-2 border-[#003366]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
