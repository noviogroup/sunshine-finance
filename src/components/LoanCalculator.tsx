"use client";

import { useState, useEffect } from "react";
import { Calculator, DollarSign, Percent, Calendar } from "lucide-react";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(250000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    calculatePayment();
  }, [loanAmount, interestRate, loanTerm]);

  const calculatePayment = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      const payment = principal / numberOfPayments;
      setMonthlyPayment(payment);
      setTotalPayment(principal);
      setTotalInterest(0);
    } else {
      const payment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      const total = payment * numberOfPayments;
      const interest = total - principal;

      setMonthlyPayment(payment);
      setTotalPayment(total);
      setTotalInterest(interest);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#E87813]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#E87813] rounded-xl flex items-center justify-center">
          <Calculator className="text-white" size={24} />
        </div>
        <h3 className="text-2xl font-bold text-black">Loan Calculator</h3>
      </div>

      <div className="space-y-6">
        {/* Loan Amount */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <DollarSign size={18} className="text-[#E87813]" />
              Loan Amount
            </label>
            <span className="text-lg font-bold text-[#E87813]">
              {formatCurrency(loanAmount)}
            </span>
          </div>
          <input
            type="range"
            min="5000"
            max="1000000"
            step="5000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#E87813]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$5K</span>
            <span>$1M</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Percent size={18} className="text-[#E87813]" />
              Interest Rate
            </label>
            <span className="text-lg font-bold text-[#E87813]">
              {interestRate.toFixed(2)}%
            </span>
          </div>
          <input
            type="range"
            min="2"
            max="15"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#E87813]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>2%</span>
            <span>15%</span>
          </div>
        </div>

        {/* Loan Term */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Calendar size={18} className="text-[#E87813]" />
              Loan Term
            </label>
            <span className="text-lg font-bold text-[#E87813]">
              {loanTerm} years
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#E87813]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1 year</span>
            <span>30 years</span>
          </div>
        </div>

        {/* Results */}
        <div className="mt-8 pt-6 border-t-2 border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-[#E87813] to-[#E97E15] rounded-xl p-4 text-white">
              <p className="text-sm font-medium opacity-90">Monthly Payment</p>
              <p className="text-2xl font-bold mt-1">{formatCurrency(monthlyPayment)}</p>
            </div>
            <div className="bg-[#F4F4F4] rounded-xl p-4">
              <p className="text-sm font-medium text-gray-600">Total Interest</p>
              <p className="text-2xl font-bold text-[#003366] mt-1">{formatCurrency(totalInterest)}</p>
            </div>
            <div className="bg-[#F4F4F4] rounded-xl p-4">
              <p className="text-sm font-medium text-gray-600">Total Payment</p>
              <p className="text-2xl font-bold text-[#003366] mt-1">{formatCurrency(totalPayment)}</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center mt-4">
          * This calculator provides estimates only. Actual rates and terms may vary. Contact us for a personalized quote.
        </p>
      </div>
    </div>
  );
}
