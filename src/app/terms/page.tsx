"use client";

import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
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
            <FileText className="text-white" size={40} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Service</h1>
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
              Welcome to Sunshine Finance Ltd. These Terms of Service ("Terms") govern your use of our website and services. By accessing our website or applying for our financial services, you agree to be bound by these Terms. Please read them carefully.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            By accessing or using the Sunshine Finance Ltd. website (the "Site") or any of our financial services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these Terms, you may not access or use our services.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">2. Eligibility</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To use our services, you must:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Be at least 18 years of age</li>
            <li>Be a resident of The Bahamas or have legal authorization to conduct business in The Bahamas</li>
            <li>Have the legal capacity to enter into binding contracts</li>
            <li>Provide accurate, current, and complete information during the application process</li>
            <li>Not be prohibited from receiving loans under Bahamian law or regulations</li>
          </ul>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">3. Services Offered</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sunshine Finance Ltd. offers private lending services, including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Real estate financing (residential and commercial)</li>
            <li>Personal credit and loans</li>
            <li>Refinancing solutions</li>
            <li>Bridge loans and short-term financing</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            All loan products are subject to credit approval, verification of information, and our internal lending criteria. We reserve the right to decline any application at our sole discretion.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">4. Loan Application Process</h2>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">Application Submission</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            When you submit a loan application, you authorize us to verify the information provided, conduct credit checks, contact references and employers, and obtain any additional information necessary to evaluate your application. You agree to provide truthful, accurate, and complete information.
          </p>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">Credit Authorization</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            By applying for a loan, you authorize Sunshine Finance Ltd. to obtain your credit report from one or more credit bureaus. This authorization remains valid for the duration of your relationship with us and for any future applications or account reviews.
          </p>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">Pre-Approval and Final Approval</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pre-approval does not constitute a binding commitment to lend. Final approval is contingent upon satisfactory completion of all required documentation, property appraisal (if applicable), title search, insurance verification, and our final underwriting review.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">5. Loan Terms and Conditions</h2>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">Interest Rates and Fees</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Interest rates, fees, and charges vary based on loan type, amount, term, creditworthiness, and collateral. All applicable rates and fees will be clearly disclosed in your loan agreement prior to closing. Rates quoted are subject to change until the loan is finalized.
          </p>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">Repayment Obligations</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            You agree to repay the loan according to the payment schedule outlined in your loan agreement. Payments must be made on or before the due date. Late payments may result in late fees, damage to your credit score, and potential legal action to recover the debt.
          </p>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">Prepayment</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Prepayment terms vary by loan product. Some loans may be prepaid without penalty, while others may have prepayment fees during specified periods. Prepayment terms will be clearly stated in your loan agreement.
          </p>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">Default and Remedies</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Failure to make payments as agreed, providing false information, or violation of any loan covenant constitutes default. In the event of default, we may accelerate the loan (make the entire balance due immediately), repossess or foreclose on collateral, report the default to credit bureaus, and pursue legal remedies to collect the debt, including court proceedings and collection actions.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">6. Collateral and Security</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many of our loans are secured by collateral, including real estate, vehicles, or other assets. By providing collateral, you grant us a security interest in the collateral until the loan is repaid in full. You agree to maintain insurance on collateral as required and not to sell, transfer, or encumber the collateral without our prior written consent.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">7. Website Use</h2>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">Acceptable Use</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            You agree to use our website only for lawful purposes. You may not:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Use the Site in any way that violates applicable laws or regulations</li>
            <li>Impersonate any person or entity or provide false information</li>
            <li>Attempt to gain unauthorized access to our systems or networks</li>
            <li>Transmit viruses, malware, or other harmful code</li>
            <li>Engage in any activity that interferes with or disrupts the Site</li>
            <li>Scrape, mine, or harvest data from the Site without permission</li>
            <li>Use the Site to harass, abuse, or harm others</li>
          </ul>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">Intellectual Property</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            All content on this Site, including text, graphics, logos, images, and software, is the property of Sunshine Finance Ltd. or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from our content without express written permission.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">8. Account Security</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you create an account on our Site, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other security breach.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">9. Disclaimers and Limitations of Liability</h2>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">No Warranty</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the Site will be uninterrupted, error-free, or free from viruses or other harmful components.
          </p>

          <h3 className="text-2xl font-bold text-black mt-8 mb-4">Limitation of Liability</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            To the maximum extent permitted by law, Sunshine Finance Ltd., its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services or website.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">10. Indemnification</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            You agree to indemnify, defend, and hold harmless Sunshine Finance Ltd. and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of your use of our services, violation of these Terms, or infringement of any third-party rights.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">11. Governing Law and Dispute Resolution</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            These Terms shall be governed by and construed in accordance with the laws of The Commonwealth of The Bahamas, without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms or our services shall be resolved through binding arbitration in Nassau, The Bahamas, or in the courts of The Bahamas, as specified in your loan agreement.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">12. Communication and Notices</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            By using our services, you consent to receive electronic communications from us, including emails, text messages, and notifications through our website. You agree that all agreements, notices, disclosures, and other communications that we provide electronically satisfy any legal requirement that such communications be in writing. You may opt out of marketing communications but will continue to receive important account-related notices.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">13. Third-Party Services</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our Site may contain links to third-party websites or services. We are not responsible for the content, terms, or privacy practices of these third parties. Your use of third-party services is at your own risk and subject to their respective terms and conditions.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">14. Modifications to Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website with an updated "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">15. Termination</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may terminate or suspend your access to our services and website immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Site will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">16. Severability</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">17. Entire Agreement</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            These Terms, together with our Privacy Policy and any loan agreement you enter into with us, constitute the entire agreement between you and Sunshine Finance Ltd. regarding your use of our services and supersede all prior agreements and understandings.
          </p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">18. Contact Information</h2>
          <div className="bg-[#F4F4F4] rounded-2xl p-8 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions or concerns about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Sunshine Finance Ltd.</strong></p>
              <p>Shirley Street, P.O. Box N-3180, Nassau, The Bahamas</p>
              <p>Phone: (242) 502-6500</p>
              <p>Email: legal@sunshinefinance.bs</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#E87813] to-[#E97E15] rounded-2xl p-8 text-white mt-12">
            <p className="font-semibold mb-2">Important Notice</p>
            <p className="text-white/90">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. Sunshine Finance Ltd. is licensed and regulated by the Bahamas Financial Services Board.
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
