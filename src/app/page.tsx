"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Building2, Users, RefreshCw, CheckCircle, ChevronRight, ChevronDown, ArrowUp, DollarSign, Headphones, FileCheck, Zap } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white border-2 rounded-xl overflow-hidden transition-all ${
      isOpen ? 'border-[#E87813] shadow-lg' : 'border-gray-200 hover:border-[#E87813]/50'
    }`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-5 text-left flex justify-between items-center transition-colors ${
          isOpen ? 'bg-[#E87813]/5' : 'hover:bg-gray-50'
        }`}
      >
        <span className="font-bold text-black text-lg pr-4">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
          isOpen ? 'bg-[#E87813]' : 'bg-gray-200'
        }`}>
          <ChevronDown
            className={`transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-white' : 'text-gray-600'
            }`}
            size={20}
          />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-[#E87813]/20 pt-4 animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/family-happy-outdoors.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(232, 120, 19, 0.85) 0%, rgba(255, 180, 0, 0.7) 40%, rgba(255, 200, 0, 0.3) 60%, rgba(255, 220, 0, 0.05) 100%)"
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-[#E87813] rounded-[6px]">
              <span className="text-white font-semibold text-sm">Trusted Private Lending Since 2010</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Fast Private Lending in The Bahamas
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Flexible financing solutions tailored to your needs. Quick approvals, competitive rates, and personalized service from Nassau's trusted lending experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#E87813] text-white px-8 py-4 rounded-[2px] font-bold text-lg hover:bg-[#E97E15] transition-all shadow-xl hover:shadow-2xl"
              >
                Apply Now
                <ChevronRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/financing"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-[2px] font-semibold text-lg hover:bg-white/20 transition-all border-2 border-white"
              >
                Explore Financing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="financing" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll fade-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#E87813] rounded-full"></div>
              <span className="text-[#E87813] font-bold text-sm uppercase tracking-wide">Financing Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-black mb-6">
              Comprehensive <span className="font-bold text-[#E87813]">lending solutions</span>.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive lending services are designed to provide you with peace of mind, no matter your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service Card 1 */}
            <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 animate-on-scroll fade-up delay-100 group">
              <div className="w-20 h-20 bg-[#E87813] rounded-full flex items-center justify-center mb-8">
                <Building2 className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#141414]">Real Estate Financing</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Secure funding for residential or commercial properties with flexible terms and competitive rates tailored to the Bahamian market.
              </p>
              <Link
                href="/services/real-estate"
                className="inline-flex items-center text-[#E87813] font-bold hover:gap-2 transition-all group-hover:gap-2"
              >
                Learn More
                <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" size={20} />
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 animate-on-scroll fade-up delay-200 group">
              <div className="w-20 h-20 bg-[#E87813] rounded-full flex items-center justify-center mb-8">
                <Users className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#141414]">Personal Credit</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fast personal loans with confidential service and quick approvals. Perfect for emergencies, investments, or life's important moments.
              </p>
              <Link
                href="/services/personal-credit"
                className="inline-flex items-center text-[#E87813] font-bold hover:gap-2 transition-all group-hover:gap-2"
              >
                Learn More
                <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" size={20} />
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 animate-on-scroll fade-up delay-300 group">
              <div className="w-20 h-20 bg-[#E87813] rounded-full flex items-center justify-center mb-8">
                <RefreshCw className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#141414]">Refinancing</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Lower your monthly payments or access equity with our refinancing solutions. We help you optimize your existing loans for better terms.
              </p>
              <Link
                href="/services/refinancing"
                className="inline-flex items-center text-[#E87813] font-bold hover:gap-2 transition-all group-hover:gap-2"
              >
                Learn More
                <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-on-scroll fade-up delay-100">
              <div className="text-4xl sm:text-5xl font-bold text-[#E87813] mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Serving</div>
            </div>
            <div className="text-center animate-on-scroll fade-up delay-200">
              <div className="text-4xl sm:text-5xl font-bold text-[#E87813] mb-2">$50M+</div>
              <div className="text-gray-600 font-medium">Loans Funded</div>
            </div>
            <div className="text-center animate-on-scroll fade-up delay-300">
              <div className="text-4xl sm:text-5xl font-bold text-[#E87813] mb-2">98%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
            <div className="text-center animate-on-scroll fade-up delay-400">
              <div className="text-4xl sm:text-5xl font-bold text-[#E87813] mb-2">2,500+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Decorative wave top */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-white">
          <svg className="absolute bottom-0 w-full h-24" preserveAspectRatio="none" viewBox="0 0 1440 48" fill="none">
            <path d="M0,16L80,18.7C160,21,320,27,480,26.7C640,27,800,21,960,21.3C1120,21,1280,27,1360,29.3L1440,32L1440,48L1360,48C1280,48,1120,48,960,48C800,48,640,48,480,48C320,48,160,48,80,48L0,48Z" fill="white"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="animate-on-scroll fade-up">
              <div className="inline-block mb-4">
                <span className="text-[#E87813] font-bold text-sm uppercase tracking-wide">Why Choose Us</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                Why you <span className="text-[#E87813]">should choose</span> our lending services
              </h2>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Choose our lending services for comprehensive coverage, personalized service, and competitive rates. We offer quick decisions and expert support, ensuring peace of mind and protection for your future.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#E87813] rounded-full flex items-center justify-center flex-shrink-0">
                    <FileCheck className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366] text-lg mb-1">Local Expertise</h3>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#E87813] rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366] text-lg mb-1">Competitive Rates</h3>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#E87813] rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366] text-lg mb-1">Fast & Easy Process</h3>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#E87813] rounded-full flex items-center justify-center flex-shrink-0">
                    <Headphones className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366] text-lg mb-1">24/7 Support</h3>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center bg-[#E87813] text-white px-8 py-4 rounded-[2px] font-bold text-lg hover:bg-[#E97E15] transition-all shadow-lg"
              >
                Contact Now
              </Link>
            </div>

            {/* Right Image with Decorative Frame */}
            <div className="relative animate-on-scroll fade-up delay-200">
              {/* Dotted pattern decoration */}
              <div className="absolute -bottom-10 -left-10 w-64 h-64 opacity-30 z-0">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="2" fill="#E87813" />
                    </pattern>
                  </defs>
                  <rect width="200" height="200" fill="url(#dots)" />
                </svg>
              </div>

              {/* Decorative background frame */}
              <div className="absolute top-8 right-8 w-full h-full rounded-3xl z-0 bg-[#e87814]"></div>

              {/* Image container */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/family-happy-outdoors.jpg"
                  alt="Happy family outdoors representing financial security"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll fade-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#E87813] rounded-full"></div>
              <span className="text-[#E87813] font-bold text-sm uppercase tracking-wide">How It Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#003366] mb-6">
              Our lending process <span className="font-bold text-[#E87813]">easy steps</span> to get covered
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive lending services are designed to provide you with peace of mind, no matter your needs
            </p>
          </div>

          {/* Staggered Card Layout */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {/* Card 1 - Apply (Top Left) */}
              <div className="relative md:mt-0">
                <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E87813" strokeWidth="1.5" className="mb-4">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                  <h3 className="text-xl font-bold text-[#003366] mb-3">Apply</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Complete our simple online application or visit our Nassau office. We'll need basic information about you and your financing needs.
                  </p>
                  <div className="absolute bottom-6 right-6">
                    <div className="w-12 h-12 bg-[#E87813] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">01</span>
                    </div>
                  </div>
                </div>
                {/* Curved dashed arrow pointing down-right */}
                <div className="hidden lg:block absolute -bottom-8 right-0 transform translate-x-1/2 z-10">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path d="M 10 10 Q 50 30, 85 75" stroke="#E87813" strokeWidth="2.5" strokeDasharray="5 5" fill="none"/>
                    <path d="M 80 70 L 87 77 L 82 80" stroke="#E87813" strokeWidth="2.5" fill="none"/>
                  </svg>
                </div>
              </div>

              {/* Card 2 - Review (Middle Center, Lower) */}
              <div className="relative md:mt-16">
                <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-[#E87813] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">02</span>
                    </div>
                  </div>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E87813" strokeWidth="1.5" className="mb-4 mt-4">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                  <h3 className="text-xl font-bold text-[#003366] mb-3">Review</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our team reviews your application and works with you to structure the best possible loan package. Most decisions within 48 hours.
                  </p>
                </div>
                {/* Curved dashed arrow pointing up-right */}
                <div className="hidden lg:block absolute -top-4 right-0 transform translate-x-1/2 z-10">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path d="M 10 85 Q 50 60, 85 20" stroke="#E87813" strokeWidth="2.5" strokeDasharray="5 5" fill="none"/>
                    <path d="M 80 25 L 87 18 L 82 15" stroke="#E87813" strokeWidth="2.5" fill="none"/>
                  </svg>
                </div>
              </div>

              {/* Card 3 - Funding (Top Right) */}
              <div className="relative md:mt-0">
                <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E87813" strokeWidth="1.5" className="mb-4">
                    <path d="M12 2v20"/>
                    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                  </svg>
                  <h3 className="text-xl font-bold text-[#003366] mb-3">Funding</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Once approved, we move quickly to finalize paperwork and disburse your funds. Get the capital you need when you need it.
                  </p>
                  <div className="absolute bottom-6 right-6">
                    <div className="w-12 h-12 bg-[#E87813] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">03</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll fade-up">
            <div className="inline-block mb-3">
              <span className="text-[#E87813] font-bold text-sm uppercase tracking-wide">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Frequently <span className="text-[#E87813]">asked</span> questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our lending services
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="How quickly can I get approved for a loan?"
              answer="Most applications are reviewed within 24-48 hours. Once we have all required documentation, we can often provide pre-approval the same day. Full approval and funding typically occur within 2-3 weeks depending on the loan type."
            />
            <FAQItem
              question="What types of collateral do you accept?"
              answer="We accept various forms of collateral including real estate properties (residential and commercial), vehicles, business assets, and other valuable assets. Each loan is evaluated individually based on the collateral value and your financial situation."
            />
            <FAQItem
              question="Can I apply if I'm self-employed?"
              answer="Absolutely! We work with self-employed individuals and business owners regularly. You'll need to provide business registration documents, financial statements, and proof of income stability for the past 6-12 months."
            />
            <FAQItem
              question="What are your interest rates?"
              answer="Interest rates vary based on loan type, amount, term length, credit history, and collateral. Our rates are competitive with the Bahamian market. Contact us for a personalized quote based on your specific situation."
            />
            <FAQItem
              question="Do you charge prepayment penalties?"
              answer="Most of our loan products allow early repayment without penalties. Some loans may have prepayment terms during the initial years. We'll clearly explain all terms before you commit to any loan agreement."
            />
            <FAQItem
              question="What documents do I need to apply?"
              answer="Basic requirements include valid government-issued ID, proof of income (payslips or tax returns), bank statements, and details about the property or collateral (if applicable). We'll provide a complete checklist during your consultation."
            />
          </div>

          <div className="mt-12 text-center p-8 bg-[#F4F4F4] rounded-2xl">
            <h3 className="text-2xl font-bold text-black mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Contact us for personalized assistance with your financing needs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-[#E87813] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#E97E15] transition-all shadow-lg"
            >
              Contact Us
              <ChevronRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#E87813] hover:bg-[#E97E15] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 animate-fadeIn animate-pulse-shadow"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
