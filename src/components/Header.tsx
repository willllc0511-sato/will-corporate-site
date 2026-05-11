"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold text-indigo-600">
          合同会社Will
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a
            href="#services"
            className="hover:text-indigo-600 transition-colors"
          >
            サービス
          </a>
          <a href="#flow" className="hover:text-indigo-600 transition-colors">
            ご利用の流れ
          </a>
          <a
            href="#local"
            className="hover:text-indigo-600 transition-colors"
          >
            私たちについて
          </a>
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            お問い合わせ
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 text-sm text-gray-600">
          <a
            href="#services"
            className="block py-2 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            サービス
          </a>
          <a
            href="#flow"
            className="block py-2 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            ご利用の流れ
          </a>
          <a
            href="#local"
            className="block py-2 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            私たちについて
          </a>
          <a
            href="#contact"
            className="block bg-indigo-600 text-white text-center px-4 py-2 rounded-lg hover:bg-indigo-700"
            onClick={() => setIsOpen(false)}
          >
            お問い合わせ
          </a>
        </nav>
      )}
    </header>
  );
}
