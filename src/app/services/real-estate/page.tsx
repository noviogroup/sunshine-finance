"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, CheckCircle, ChevronRight, Home, TrendingUp, Shield, Clock, DollarSign, FileText, ChevronDown, ArrowLeft } from "lucide-react";

export default function RealEstateFinancingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <img
                src="/main-sunshinefinance-logo-notag-2019.png"
                alt="Sunshine Finance"
                className="h-12 w-auto"
              />
            </Link>
            <a
              href="#apply"
              className="bg-[#E87813] text-white px-6 py-3 rounded-[2px] font-semibold hover:bg-[#E97E15] transition-all shadow-lg"
            >
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#ff990a] to-[#e87813]">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <div className="w-20 h-20 bg-[#E87813] rounded-2xl flex items-center justify-center mb-6 shadow-xl">
              <Building2 className="text-white" size={40} />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Real Estate Financing
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Secure funding for your dream property in The Bahamas. Whether you're purchasing your first home, investing in commercial real estate, or expanding your property portfolio, we offer flexible financing solutions tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="text-[#E87813] mr-2" size={20} />
                <span className="text-white">Up to 90% LTV</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="text-[#E87813] mr-2" size={20} />
                <span className="text-white">Flexible Terms</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="text-[#E87813] mr-2" size={20} />
                <span className="text-white">Fast Approval</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Financing Options</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate lending for every need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F4F4F4] rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[#E87813] rounded-xl flex items-center justify-center mb-6">
                <Home className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Residential Mortgages</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Primary residence financing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Second home purchases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Vacation property loans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Competitive interest rates</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F4F4F4] rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[#E87813] rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Commercial Loans</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Office building financing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Retail space purchases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Multi-unit properties</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Flexible repayment terms</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F4F4F4] rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[#E87813] rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Investment Properties</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Rental property financing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Fix-and-flip loans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Portfolio expansion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Bridge loan options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Why Choose Our Real Estate Financing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Benefits designed for Bahamian property buyers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <DollarSign className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Competitive Rates</h3>
              <p className="text-gray-600">
                Market-leading interest rates and flexible payment structures
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Quick Processing</h3>
              <p className="text-gray-600">
                Pre-approval in 24 hours, full approval within days
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Bahamian real estate market and regulations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FileText className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Flexible Terms</h3>
              <p className="text-gray-600">
                Customized loan structures from 5 to 30 years
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">What You'll Need</h2>
            <p className="text-xl text-gray-600">
              Standard documentation for real estate financing
            </p>
          </div>

          <div className="bg-[#F4F4F4] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                  <FileText className="text-[#E87813] mr-3" size={24} />
                  Personal Documents
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Valid government-issued ID</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Proof of income (3 months payslips or tax returns)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Bank statements (6 months)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Credit report authorization</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                  <Building2 className="text-[#E87813] mr-3" size={24} />
                  Property Documents
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Purchase agreement or offer letter</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Property appraisal (we can arrange)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Title search and insurance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Property insurance quote</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-[#E87813]">
              <p className="text-gray-700">
                <strong className="text-black">Down Payment:</strong> Typically 10-30% of property value, depending on loan type and property use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4F4F4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is the maximum loan amount I can get?",
                answer: "Loan amounts vary based on property value, your income, and creditworthiness. We typically finance properties from $100,000 to $5,000,000+. Contact us for a personalized assessment."
              },
              {
                question: "How long does the approval process take?",
                answer: "Pre-approval typically takes 24-48 hours. Full approval and funding usually occur within 2-3 weeks, depending on property appraisal and documentation completeness."
              },
              {
                question: "Can foreigners purchase property in The Bahamas?",
                answer: "Yes! The Bahamas welcomes foreign property ownership. We specialize in helping international buyers navigate the process, including obtaining necessary permits and approvals."
              },
              {
                question: "What are your current interest rates?",
                answer: "Interest rates vary based on loan type, term, and borrower profile. Current rates for qualified borrowers start from competitive market rates. Contact us for a personalized rate quote."
              },
              {
                question: "Do you offer construction loans?",
                answer: "Yes, we provide construction financing for new builds and major renovations. These are structured as draw-based loans released in stages as construction progresses."
              },
              {
                question: "Can I pay off my loan early without penalty?",
                answer: "Most of our loan products allow early repayment. Some may have prepayment terms during the initial years. Specific terms are outlined in your loan agreement."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-black pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`text-[#E87813] flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#E87813] to-[#E97E15]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Finance Your Property?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get pre-approved in 24 hours. Our team is ready to help you secure your dream property in The Bahamas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@sunshinefinance.bs"
              className="inline-flex items-center justify-center bg-white text-[#E87813] px-8 py-4 rounded-[2px] font-bold text-lg hover:bg-gray-50 transition-all shadow-xl"
            >
              Apply Now
              <ChevronRight className="ml-2" size={20} />
            </a>
            <a
              href="tel:+12425026500"
              className="inline-flex items-center justify-center bg-[#003366] text-white px-8 py-4 rounded-[2px] font-semibold text-lg hover:bg-[#004080] transition-all shadow-lg"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60 text-sm">
            © 2025 Sunshine Finance Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
