import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <img
                src="/Sunshine_Finance_Logo_2019.png"
                alt="Sunshine Finance"
                className="h-15 w-auto"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your trusted partner for private lending in The Bahamas since 2010.
            </p>

            {/* Social Media Links */}
            <div>
              <h4 className="font-bold text-sm mb-3 text-[#E87813]">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/sunshinefinance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-[#E87813] text-gray-600 hover:text-white rounded-[2px] flex items-center justify-center transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com/sunshinefinance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-[#E87813] text-gray-600 hover:text-white rounded-[2px] flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com/company/sunshinefinance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-[#E87813] text-gray-600 hover:text-white rounded-[2px] flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-[#E87813]">Contact</h4>
            <div className="space-y-3 text-gray-600">
              <p>Phone: (242) 502-6500</p>
              <p>Email: info@sunshinefinance.bs</p>
              <p className="pt-2"><strong className="text-[#e87814]">Shirley Street Location</strong><br />
              Shirley Street<br />
              P.O. Box N-3180<br />
              Nassau, The Bahamas</p>
              <p className="pt-2"><strong className="text-[#e87814]">Carmichael Road Location</strong><br />
              Carmichael Road<br />
              P.O. Box N-3180<br />
              Nassau, The Bahamas</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-[#E87813]">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/" className="hover:text-[#E87813] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#E87813] transition-colors">About</Link></li>
              <li><Link href="/financing" className="hover:text-[#E87813] transition-colors">Financing</Link></li>
              <li><Link href="/contact" className="hover:text-[#E87813] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-[#E87813]">Office Hours</h4>
            <div className="space-y-2 text-gray-600">
              <p>Monday - Friday<br />9:00 AM - 5:00 PM</p>
              <p>Saturday<br />9:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-[#E87813] text-white rounded-xl px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">
            <p className="text-sm">
              © 2025 Sunshine Finance Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-white hover:text-white/80 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-white hover:text-white/80 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
