"use client";

import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
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
            <Link
              href="/"
              className="bg-[#E87813] text-white px-6 py-3 rounded-[2px] font-semibold hover:bg-[#E97E15] transition-all shadow-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#ff990a] to-[#e87813]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#E87813] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Shield className="text-white" size={40} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/90">
            Last Updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-[#F4F4F4] rounded-2xl p-8 mb-8">
            <p className="text-gray-700 leading-relaxed">
              At Sunshine Finance Ltd., we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">1. Information We Collect</h2>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">Personal Information</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Apply for a loan or financial product</li>
            <li>Register for an account on our website</li>
            <li>Subscribe to our newsletter or communications</li>
            <li>Contact us for support or inquiries</li>
            <li>Participate in surveys or promotional activities</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            This information may include:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Full name and contact information (address, phone number, email)</li>
            <li>Date of birth and government-issued identification</li>
            <li>Employment and income information</li>
            <li>Financial information (bank details, credit history, assets)</li>
            <li>Social insurance or tax identification numbers</li>
            <li>Property or collateral information</li>
          </ul>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">Automatically Collected Information</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            When you visit our website, we may automatically collect certain information about your device and browsing activity, including IP address, browser type, operating system, referring URLs, pages viewed, and access times. We use cookies and similar tracking technologies to enhance your experience and analyze website usage.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">2. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li><strong>Loan Processing:</strong> To evaluate your loan application, verify your identity, assess creditworthiness, and make lending decisions</li>
            <li><strong>Service Delivery:</strong> To provide, maintain, and improve our financial services and customer support</li>
            <li><strong>Communication:</strong> To send you important notices, updates, and information about your account or application</li>
            <li><strong>Compliance:</strong> To comply with legal and regulatory requirements, including anti-money laundering (AML) and know-your-customer (KYC) regulations</li>
            <li><strong>Marketing:</strong> To send you promotional materials and offers (with your consent)</li>
            <li><strong>Analytics:</strong> To analyze usage patterns and improve our website and services</li>
            <li><strong>Security:</strong> To detect, prevent, and address fraud, security issues, and technical problems</li>
          </ul>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">3. Information Sharing and Disclosure</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may share your information in the following circumstances:
          </p>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">With Your Consent</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may share your information with third parties when you have given us explicit permission to do so.
          </p>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">Service Providers</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may share your information with trusted third-party service providers who assist us in operating our business, including credit bureaus, payment processors, data analytics providers, and IT service providers. These parties are contractually obligated to protect your information and use it only for the purposes we specify.
          </p>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">Legal Requirements</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may disclose your information when required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
          </p>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">Business Transfers</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">4. Data Security</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Encryption of sensitive data in transit and at rest</li>
            <li>Secure servers and firewalls</li>
            <li>Regular security assessments and audits</li>
            <li>Access controls and employee training</li>
            <li>Secure document destruction procedures</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">5. Data Retention</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Financial records and loan documentation are typically retained for seven years following the closure of your account or completion of your loan, in accordance with Bahamian financial regulations.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">6. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
            <li><strong>Objection:</strong> Object to the processing of your personal information for certain purposes</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
            <li><strong>Data Portability:</strong> Request a copy of your information in a portable format</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            To exercise any of these rights, please contact us using the information provided below.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">7. Cookies and Tracking</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our website uses cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">8. Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">9. Children's Privacy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">10. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">11. Contact Us</h2>
          <div className="bg-[#F4F4F4] rounded-2xl p-8 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Sunshine Finance Ltd.</strong></p>
              <p>Shirley Street, P.O. Box N-3180, Nassau, The Bahamas</p>
              <p>Phone: (242) 502-6500</p>
              <p>Email: privacy@sunshinefinance.bs</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#E87813] to-[#E97E15] rounded-2xl p-8 text-white mt-12">
            <p className="font-semibold mb-2">Regulatory Compliance</p>
            <p className="text-white/90">
              Sunshine Finance Ltd. is licensed and regulated by the Bahamas Financial Services Board and complies with all applicable data protection and privacy laws in The Bahamas.
            </p>
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
