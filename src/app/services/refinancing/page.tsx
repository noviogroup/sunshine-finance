"use client";

import { useState } from "react";
import Link from "next/link";
import { RefreshCw, CheckCircle, ChevronRight, TrendingDown, Home, DollarSign, Shield, Clock, Calculator, FileText, ChevronDown, ArrowLeft, Percent } from "lucide-react";

export default function RefinancingPage() {
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
              Get Started
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
              <RefreshCw className="text-white" size={40} />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Loan Refinancing
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Lower your monthly payments, reduce your interest rate, or access your property's equity. Our refinancing solutions help you optimize your existing loans for better terms and greater financial flexibility.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="text-[#E87813] mr-2" size={20} />
                <span className="text-white">Lower Payments</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="text-[#E87813] mr-2" size={20} />
                <span className="text-white">Better Rates</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="text-[#E87813] mr-2" size={20} />
                <span className="text-white">Cash-Out Options</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Why Refinance With Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save money and gain financial flexibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingDown className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Lower Monthly Payments</h3>
              <p className="text-gray-600">
                Reduce your financial burden with better interest rates and extended terms
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Percent className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Better Interest Rates</h3>
              <p className="text-gray-600">
                Take advantage of improved credit or favorable market conditions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <DollarSign className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Access Equity</h3>
              <p className="text-gray-600">
                Cash-out refinancing lets you tap into your property's value
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Consolidate Debt</h3>
              <p className="text-gray-600">
                Combine multiple loans into one manageable monthly payment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Refinance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">When Should You Refinance?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Consider refinancing in these situations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <CheckCircle className="text-[#E87813] mr-3" size={28} />
                Rate Reduction Scenarios
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Market Rates Drop:</strong> Interest rates are significantly lower than your current rate</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Credit Improvement:</strong> Your credit score has improved since your original loan</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>ARM to Fixed:</strong> You want to switch from an adjustable to fixed-rate mortgage</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <CheckCircle className="text-[#E87813] mr-3" size={28} />
                Cash-Out Opportunities
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Home Improvements:</strong> Fund renovations that increase property value</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Debt Consolidation:</strong> Pay off high-interest credit cards or loans</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Investment Capital:</strong> Access funds for business or investment opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <CheckCircle className="text-[#E87813] mr-3" size={28} />
                Payment Flexibility
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Lower Payments:</strong> Extend your loan term to reduce monthly obligations</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Shorten Term:</strong> Pay off your mortgage faster with a 15 or 20-year term</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span><strong>Remove PMI:</strong> Eliminate private mortgage insurance with sufficient equity</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#E87813] to-[#E97E15] rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Calculator className="mr-3" size={28} />
                Quick Savings Check
              </h3>
              <div className="space-y-4">
                <p className="text-white/90">
                  A refinance typically makes sense if:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>You can reduce your rate by at least 0.75%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>You plan to stay in the property 2+ years</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Your home has at least 20% equity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Closing costs can be recovered in 2-3 years</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Refinancing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Refinancing Options</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the solution that best fits your goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F4F4F4] rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[#E87813] rounded-xl flex items-center justify-center mb-6">
                <Percent className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Rate & Term Refinance</h3>
              <p className="text-gray-600 mb-6">
                Replace your existing mortgage with a new loan at a better interest rate or different term length without taking cash out.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#E87813] mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>Lower monthly payments</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#E87813] mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>Reduce total interest paid</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#E87813] mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>Adjust loan duration</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F4F4F4] rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[#E87813] rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Cash-Out Refinance</h3>
              <p className="text-gray-600 mb-6">
                Borrow more than you owe on your current mortgage and receive the difference in cash, using your home's equity.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#E87813] mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>Access your home equity</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#E87813] mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>Fund major expenses</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#E87813] mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>Consolidate high-interest debt</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F4F4F4] rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[#E87813] rounded-xl flex items-center justify-center mb-6">
                <RefreshCw className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Streamline Refinance</h3>
              <p className="text-gray-600 mb-6">
                Simplified refinancing process with reduced documentation and faster approval for existing Sunshine Finance customers.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#E87813] mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>Minimal paperwork required</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#E87813] mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>Faster processing time</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="text-[#E87813] mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>Lower closing costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4F4F4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">What You'll Need</h2>
            <p className="text-xl text-gray-600">
              Required documentation for refinancing
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                  <FileText className="text-[#E87813] mr-3" size={24} />
                  Financial Documents
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Current mortgage statement</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Proof of income (payslips, tax returns)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Bank statements (3-6 months)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Employment verification</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                  <Home className="text-[#E87813] mr-3" size={24} />
                  Property Information
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Property deed and title</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Current property insurance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Recent property tax bill</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#E87813] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Home appraisal (we can arrange)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#F4F4F4] rounded-xl">
              <p className="text-gray-700">
                <strong className="text-black">Processing Time:</strong> Most refinance applications are processed within 2-3 weeks from complete documentation to funding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How much can I save by refinancing?",
                answer: "Savings vary based on your current rate, new rate, and loan amount. Even a 1% rate reduction on a $300,000 mortgage can save you over $200/month and thousands over the loan's lifetime. Contact us for a personalized savings estimate."
              },
              {
                question: "What are the closing costs for refinancing?",
                answer: "Closing costs typically range from 2-5% of the loan amount and include appraisal fees, title search, legal fees, and administrative charges. We can discuss options to roll these costs into your new loan or negotiate better terms."
              },
              {
                question: "How much equity do I need to refinance?",
                answer: "Generally, you should have at least 20% equity in your property to avoid PMI and qualify for the best rates. However, we offer refinancing options with as little as 10% equity depending on your situation."
              },
              {
                question: "Can I refinance if I have bad credit?",
                answer: "While good credit helps you qualify for better rates, we work with clients across the credit spectrum. We'll review your complete financial picture to find the best refinancing solution available to you."
              },
              {
                question: "How long does the refinancing process take?",
                answer: "From application to closing, refinancing typically takes 2-4 weeks. Streamline refinances for existing customers can be even faster. Timeline depends on how quickly we receive your documentation and complete the property appraisal."
              },
              {
                question: "Is refinancing worth it if I plan to move soon?",
                answer: "Generally, you should plan to stay in the property long enough to recoup your closing costs through monthly savings. If you're moving within 2 years, refinancing may not be worthwhile unless you're accessing significant equity."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#F4F4F4] rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
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
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed bg-white">
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
            Ready to Refinance and Start Saving?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get a free refinance assessment and discover how much you could save. Our experts will analyze your current loan and provide personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@sunshinefinance.bs"
              className="inline-flex items-center justify-center bg-white text-[#E87813] px-8 py-4 rounded-[2px] font-bold text-lg hover:bg-gray-50 transition-all shadow-xl"
            >
              Get Free Assessment
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
