"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  FileCheck,
  Loader2,
} from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  employerName: string;
  jobTitle: string;
  annualIncome: string;
  employmentLength: string;
  payFrequency: string;
  loanType: string;
  loanAmount: string;
  repaymentTerm: string;
  loanPurpose: string;
  collateral: string;
  additionalNotes: string;
  consent: boolean;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  address: "",
  employerName: "",
  jobTitle: "",
  annualIncome: "",
  employmentLength: "",
  payFrequency: "",
  loanType: "",
  loanAmount: "",
  repaymentTerm: "",
  loanPurpose: "",
  collateral: "",
  additionalNotes: "",
  consent: false,
};

const steps = [
  {
    title: "Personal Details",
    description: "Tell us a little about yourself so we can start your application.",
  },
  {
    title: "Employment",
    description: "Share your employment information to help us understand your income.",
  },
  {
    title: "Loan Request",
    description: "Let us know the loan details so we can tailor a solution for you.",
  },
  {
    title: "Review & Submit",
    description: "Confirm everything looks good and send your application to our team.",
  },
];

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationId, setApplicationId] = useState<string | null>(null);

  const isLastStep = step === steps.length - 1;
  const progressWidth = useMemo(() => `${((step + 1) / steps.length) * 100}%`, [step]);

  const resetForm = () => {
    setStep(0);
    setFormData(initialFormData);
    setErrors({});
    setApplicationId(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (step === 0) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Enter a valid email address";
      }
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
      if (!formData.address.trim()) newErrors.address = "Address is required";
    }

    if (step === 1) {
      if (!formData.employerName.trim()) newErrors.employerName = "Employer name is required";
      if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
      if (!formData.annualIncome.trim()) newErrors.annualIncome = "Annual income is required";
      if (!formData.employmentLength.trim()) newErrors.employmentLength = "Employment length is required";
      if (!formData.payFrequency) newErrors.payFrequency = "Select a pay frequency";
    }

    if (step === 2) {
      if (!formData.loanType) newErrors.loanType = "Select a loan type";
      if (!formData.loanAmount.trim()) newErrors.loanAmount = "Loan amount is required";
      if (!formData.repaymentTerm.trim()) newErrors.repaymentTerm = "Repayment term is required";
      if (!formData.loanPurpose.trim()) newErrors.loanPurpose = "Tell us the purpose for the loan";
    }

    if (step === 3) {
      if (!formData.consent) newErrors.consent = "Please confirm that the information provided is accurate.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStepSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateStep()) return;

    if (isLastStep) {
      setIsSubmitting(true);
      setTimeout(() => {
        const id = `SF-${Date.now().toString().slice(-6)}`;
        setApplicationId(id);
        setIsSubmitting(false);
      }, 1800);
      return;
    }

    setStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="financing" />

      {/* Hero */}
      <section className="relative pt-44 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/family-happy-outdoors.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff990a]/85 to-[#e87813]/90" />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
            <FileCheck size={18} />
            <span className="text-sm font-semibold tracking-wide uppercase">Secure Online Application</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Start Your Sunshine Finance Application</h1>
          <p className="text-lg text-white/90">
            Complete the guided form below. It only takes a few minutes and helps our team prepare the best offer for you.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="relative -mt-12 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Progress */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-[#FFF4E8] px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-[#E87813] font-semibold tracking-wide uppercase">Step {step + 1} of {steps.length}</p>
                  <h2 className="text-2xl font-bold text-[#141414]">{steps[step].title}</h2>
                  <p className="text-sm text-gray-600 mt-1">{steps[step].description}</p>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  {steps.map((s, idx) => (
                    <div
                      key={s.title}
                      className={`h-2 w-16 rounded-full transition-all duration-300 ${
                        idx <= step ? "bg-[#E87813]" : "bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="h-1.5 bg-white/60 rounded-full overflow-hidden">
                <div className="h-full bg-[#E87813] transition-all duration-300" style={{ width: progressWidth }} />
              </div>
            </div>

            {applicationId ? (
              <div className="px-6 sm:px-10 py-12 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle className="text-green-600" size={36} />
                </div>
                <h3 className="text-3xl font-bold text-[#141414] mb-3">Application Submitted!</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Thank you for submitting your details. A Sunshine Finance specialist will reach out within one business day.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 max-w-md mx-auto mb-8">
                  <p className="text-sm uppercase text-gray-500 tracking-wide">Confirmation Number</p>
                  <p className="text-2xl font-bold text-[#E87813] mt-2">{applicationId}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-white text-[#E87813] border border-[#E87813] px-6 py-3 rounded-[2px] font-semibold hover:bg-[#FFF4E8] transition-all"
                  >
                    Start a New Application
                  </button>
                  <Link
                    href="/"
                    className="bg-[#E87813] text-white px-6 py-3 rounded-[2px] font-semibold hover:bg-[#E97E15] transition-all"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleStepSubmit} className="px-6 sm:px-10 py-12 space-y-10">
                {step === 0 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="firstName">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813] ${
                          errors.firstName ? "border-red-500" : "border-gray-200"
                        }`}
                        placeholder="John"
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="lastName">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813] ${
                          errors.lastName ? "border-red-500" : "border-gray-200"
                        }`}
                        placeholder="Doe"
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813] ${
                          errors.email ? "border-red-500" : "border-gray-200"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="phone">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813] ${
                          errors.phone ? "border-red-500" : "border-gray-200"
                        }`}
                        placeholder="(242) 502-6500"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="dateOfBirth">
                        Date of Birth *
                      </label>
                      <input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813] ${
                          errors.dateOfBirth ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                      {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="address">
                        Current Address *
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={3}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813] ${
                          errors.address ? "border-red-500" : "border-gray-200"
                        }`}
                        placeholder="Street, City, Island"
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="employerName">
                        Employer Name *
                      </label>
                      <input
                        id="employerName"
                        name="employerName"
                        value={formData.employerName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813] ${
                          errors.employerName ? "border-red-500" : "border-gray-200"
                        }`}
                        placeholder="Sunshine Group"
                      />
                      {errors.employerName && <p className="text-red-500 text-sm mt-1">{errors.employerName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="jobTitle">
                        Job Title *
                      </label>
                      <input
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813] ${
                          errors.jobTitle ? "border-red-500" : "border-gray-200"
                        }`}
                        placeholder="Loan Officer"
                      />
                      {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="annualIncome">
                        Annual Income (BSD) *
                      </label>
                      <input
                        id="annualIncome"
                        name="annualIncome"
                        value={formData.annualIncome}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813] ${
                          errors.annualIncome ? "border-red-500" : "border-gray-200"
                        }`}
                        placeholder="$65,000"
                      />
                      {errors.annualIncome && <p className="text-red-500 text-sm mt-1">{errors.annualIncome}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="employmentLength">
                        Length of Employment *
                      </label>
                      <input
                        id="employmentLength"
                        name="employmentLength"
                        value={formData.employmentLength}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813] ${
                          errors.employmentLength ? "border-red-500" : "border-gray-200"
                        }`}
                        placeholder="5 years"
                      />
                      {errors.employmentLength && <p className="text-red-500 text-sm mt-1">{errors.employmentLength}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="payFrequency">
                        Pay Frequency *
                      </label>
                      <select
                        id="payFrequency"
                        name="payFrequency"
                        value={formData.payFrequency}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813] ${
                          errors.payFrequency ? "border-red-500" : "border-gray-200"
                        }`}
                      >
                        <option value="">Select an option</option>
                        <option value="weekly">Weekly</option>
                        <option value="biweekly">Bi-weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.payFrequency && <p className="text-red-500 text-sm mt-1">{errors.payFrequency}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="collateral">
                        Available Collateral (Optional)
                      </label>
                      <input
                        id="collateral"
                        name="collateral"
                        value={formData.collateral}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813]"
                        placeholder="Home equity, vehicle, etc."
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="loanType">
                        Loan Type *
                      </label>
                      <select
                        id="loanType"
                        name="loanType"
                        value={formData.loanType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813] ${
                          errors.loanType ? "border-red-500" : "border-gray-200"
                        }`}
                      >
                        <option value="">Select a loan type</option>
                        <option value="real-estate">Real Estate Financing</option>
                        <option value="personal">Personal Credit</option>
                        <option value="vacation">Vacation & Lifestyle</option>
                        <option value="auto">Auto Loan</option>
                        <option value="debt-consolidation">Debt Consolidation</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.loanType && <p className="text-red-500 text-sm mt-1">{errors.loanType}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="loanAmount">
                        Requested Loan Amount (BSD) *
                      </label>
                      <input
                        id="loanAmount"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813] ${
                          errors.loanAmount ? "border-red-500" : "border-gray-200"
                        }`}
                        placeholder="$50,000"
                      />
                      {errors.loanAmount && <p className="text-red-500 text-sm mt-1">{errors.loanAmount}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="repaymentTerm">
                        Preferred Repayment Term *
                      </label>
                      <input
                        id="repaymentTerm"
                        name="repaymentTerm"
                        value={formData.repaymentTerm}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813] ${
                          errors.repaymentTerm ? "border-red-500" : "border-gray-200"
                        }`}
                        placeholder="e.g. 5 years"
                      />
                      {errors.repaymentTerm && <p className="text-red-500 text-sm mt-1">{errors.repaymentTerm}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="loanPurpose">
                        Purpose of Loan *
                      </label>
                      <textarea
                        id="loanPurpose"
                        name="loanPurpose"
                        value={formData.loanPurpose}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813] ${
                          errors.loanPurpose ? "border-red-500" : "border-gray-200"
                        }`}
                        placeholder="Tell us how you plan to use the funds..."
                      />
                      {errors.loanPurpose && <p className="text-red-500 text-sm mt-1">{errors.loanPurpose}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="additionalNotes">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E87813]"
                        placeholder="Anything else we should know?"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-[#F9F9F9] rounded-2xl p-6 border border-gray-200">
                        <h4 className="text-lg font-semibold text-[#141414] mb-4">Personal Summary</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li><strong className="text-[#141414]">Name:</strong> {formData.firstName} {formData.lastName}</li>
                          <li><strong className="text-[#141414]">Email:</strong> {formData.email}</li>
                          <li><strong className="text-[#141414]">Phone:</strong> {formData.phone}</li>
                          <li><strong className="text-[#141414]">Date of Birth:</strong> {formData.dateOfBirth}</li>
                          <li><strong className="text-[#141414]">Address:</strong> {formData.address}</li>
                        </ul>
                      </div>
                      <div className="bg-[#F9F9F9] rounded-2xl p-6 border border-gray-200">
                        <h4 className="text-lg font-semibold text-[#141414] mb-4">Employment Summary</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li><strong className="text-[#141414]">Employer:</strong> {formData.employerName}</li>
                          <li><strong className="text-[#141414]">Position:</strong> {formData.jobTitle}</li>
                          <li><strong className="text-[#141414]">Income:</strong> {formData.annualIncome}</li>
                          <li><strong className="text-[#141414]">Length:</strong> {formData.employmentLength}</li>
                          <li><strong className="text-[#141414]">Pay Frequency:</strong> {formData.payFrequency || "—"}</li>
                        </ul>
                      </div>
                      <div className="bg-[#F9F9F9] rounded-2xl p-6 border border-gray-200 md:col-span-2">
                        <h4 className="text-lg font-semibold text-[#141414] mb-4">Loan Details</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li><strong className="text-[#141414]">Loan Type:</strong> {formData.loanType || "—"}</li>
                          <li><strong className="text-[#141414]">Amount:</strong> {formData.loanAmount}</li>
                          <li><strong className="text-[#141414]">Repayment Term:</strong> {formData.repaymentTerm}</li>
                          <li><strong className="text-[#141414]">Purpose:</strong> {formData.loanPurpose}</li>
                          <li><strong className="text-[#141414]">Collateral:</strong> {formData.collateral || "None provided"}</li>
                          <li><strong className="text-[#141414]">Notes:</strong> {formData.additionalNotes || "—"}</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 h-5 w-5 border-2 border-gray-300 rounded"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                        I confirm that the information provided is accurate and I consent to Sunshine Finance contacting me regarding this application.
                      </label>
                    </div>
                    {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 0 || isSubmitting}
                    className={`inline-flex items-center justify-center px-6 py-3 rounded-[2px] font-semibold border transition-all ${
                      step === 0 || isSubmitting
                        ? "border-gray-200 text-gray-400 cursor-not-allowed"
                        : "border-[#E87813] text-[#E87813] hover:bg-[#FFF4E8]"
                    }`}
                  >
                    <ArrowLeft className="mr-2" size={18} /> Previous
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-[2px] font-semibold bg-[#E87813] text-white hover:bg-[#E97E15] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={18} />
                        Submitting...
                      </>
                    ) : (
                      <>
                        {isLastStep ? "Submit Application" : "Next Step"}
                        <ArrowRight className="ml-2" size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
