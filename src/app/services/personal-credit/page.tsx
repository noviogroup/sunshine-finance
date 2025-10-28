"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, CheckCircle, ChevronRight, Heart, Briefcase, GraduationCap, Shield, Clock, DollarSign, FileText, ChevronDown, ArrowLeft, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PersonalCreditPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="financing" />

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/Black-Family-Pictures.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff990a]/30 to-[#e87813]/40" />
        <div className="relative max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <div className="w-20 h-20 bg-[#E87813] rounded-2xl flex items-center justify-center mb-6 shadow-xl">
              <Users className="text-white" size={40} />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Personal Credit Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Life moves fast. Whether it's an emergency expense, investment opportunity, or important life event, we provide quick personal loans with confidential service and flexible repayment options tailored to your situation.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="text-[#E87813] mr-2" size={20} />
                <span className="text-white">$5K - $250K</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="text-[#E87813] mr-2" size={20} />
                <span className="text-white">48-Hour Approval</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="text-[#E87813] mr-2" size={20} />
                <span className="text-white">Confidential</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center bg-[#E87813] text-white px-6 py-3 rounded-[2px] font-bold hover:bg-[#E97E15] transition-all shadow-lg"
              >
                Apply Now
                <ChevronRight className="ml-2" size={18} />
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-[2px] font-semibold border-2 border-white/70 hover:bg-white/20 transition-all"
              >
                Loan Calculator
                <ChevronRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Personal Loans For Every Need</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible financing for life's important moments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F4F4F4] rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[#E87813] rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Emergency Expenses</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Medical emergencies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Home or vehicle repairs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Unexpected bills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Fast fund disbursement</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F4F4F4] rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[#E87813] rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Life Events</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Weddings and celebrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Family relocations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Education expenses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Travel and vacations</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F4F4F4] rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[#E87813] rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Investment & Business</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Business opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Investment capital</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Debt consolidation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Equipment purchases</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Why Choose Our Personal Loans</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed with your privacy and convenience in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Quick Approval</h3>
              <p className="text-gray-600">
                Most applications approved within 48 hours
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Confidential</h3>
              <p className="text-gray-600">
                Complete privacy and discretion guaranteed
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <DollarSign className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Flexible Terms</h3>
              <p className="text-gray-600">
                Repayment periods from 6 months to 5 years
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FileText className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Simple Process</h3>
              <p className="text-gray-600">
                Minimal paperwork, maximum efficiency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Details Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Loan Details</h2>
            <p className="text-xl text-gray-600">
              Transparent terms and competitive rates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F4F4F4] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Loan Amounts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700 font-medium">Minimum</span>
                  <span className="text-[#E87813] font-bold text-xl">$5,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700 font-medium">Maximum</span>
                  <span className="text-[#E87813] font-bold text-xl">$250,000</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-black mb-6 mt-8">Repayment Terms</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700 font-medium">Short-term</span>
                  <span className="text-gray-900 font-semibold">6-12 months</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700 font-medium">Medium-term</span>
                  <span className="text-gray-900 font-semibold">1-3 years</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700 font-medium">Long-term</span>
                  <span className="text-gray-900 font-semibold">3-5 years</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#E87813] to-[#E97E15] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">What You'll Need</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="block">Valid ID</strong>
                    <span className="text-white/90 text-sm">Government-issued identification</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="block">Proof of Income</strong>
                    <span className="text-white/90 text-sm">3 months of payslips or bank statements</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="block">Credit Check</strong>
                    <span className="text-white/90 text-sm">Authorization for credit report review</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="block">Collateral (Optional)</strong>
                    <span className="text-white/90 text-sm">May improve rates for larger amounts</span>
                  </div>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <p className="text-sm">
                  <strong>Note:</strong> Requirements may vary based on loan amount and individual circumstances. Additional documentation may be requested.
                </p>
              </div>
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
                question: "How quickly can I get approved?",
                answer: "Most personal loan applications are reviewed within 24-48 hours. Once approved, funds can be disbursed within 3-5 business days."
              },
              {
                question: "What interest rates do you offer?",
                answer: "Interest rates are personalized based on loan amount, term, credit history, and collateral (if applicable). Rates for qualified borrowers are competitive with market standards. Contact us for a personalized quote."
              },
              {
                question: "Do I need collateral for a personal loan?",
                answer: "Not necessarily. We offer both secured and unsecured personal loans. Collateral may help you qualify for larger amounts or better rates, but it's not always required."
              },
              {
                question: "Can I apply if I'm self-employed?",
                answer: "Absolutely! We work with self-employed individuals regularly. You'll need to provide business registration documents and financial statements showing income stability."
              },
              {
                question: "Is my information kept confidential?",
                answer: "Yes. We maintain strict confidentiality for all client information. Your loan application and financial details are protected and never shared without your explicit consent."
              },
              {
                question: "Can I pay off my loan early?",
                answer: "Yes! We encourage early repayment and most of our personal loan products have no prepayment penalties. Contact us to discuss your specific loan terms."
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
            Get Your Personal Loan Today
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Quick approval, confidential service, and flexible terms. Apply now and get a decision within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center bg-white text-[#E87813] px-8 py-4 rounded-[2px] font-bold text-lg hover:bg-gray-50 transition-all shadow-xl"
            >
              Apply Now
              <ChevronRight className="ml-2" size={20} />
            </Link>
            <a
              href="tel:+12425026500"
              className="inline-flex items-center justify-center bg-[#003366] text-white px-8 py-4 rounded-[2px] font-semibold text-lg hover:bg-[#004080] transition-all shadow-lg"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
