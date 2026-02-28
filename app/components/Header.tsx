'use client';

import { Search, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ExamPrep Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/exams" className="text-gray-700 hover:text-primary-600 font-medium">
              Exams
            </Link>
            <Link href="/practice" className="text-gray-700 hover:text-primary-600 font-medium">
              Practice
            </Link>
            <Link href="/guides" className="text-gray-700 hover:text-primary-600 font-medium">
              Study Guides
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-600 font-medium">
              Blog
            </Link>
            <Link href="/flashcards" className="text-gray-700 hover:text-primary-600 font-medium">
              Flashcards
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <Link
              href="/signin"
              className="hidden md:block px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors"
            >
              Sign In
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search exams, topics, study guides..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/exams"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
            >
              Exams
            </Link>
            <Link
              href="/practice"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
            >
              Practice
            </Link>
            <Link
              href="/guides"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
            >
              Study Guides
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
            >
              Blog
            </Link>
            <Link
              href="/flashcards"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
            >
              Flashcards
            </Link>
            <Link
              href="/signin"
              className="block px-4 py-2 text-center bg-primary-600 text-white rounded-lg font-medium"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
