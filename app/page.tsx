'use client';

import { Search, BookOpen, Brain, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import ExamCard from './components/ExamCard';
import { examCategories, getPopularExams } from './data/exams';

export default function Home() {
  const popularExams = getPopularExams();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Free Professional Exam Preparation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Master your certification exam with our comprehensive study materials, practice tests, and AI-powered learning tools.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search exams, topics, study guides..."
                  className="w-full pl-14 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/exams"
                  className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Browse Exams
                </Link>
                <button className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-colors">
                  Try AI Tutor
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Browse by Category
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {examCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:shadow-md transition-all group"
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Exams */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Most Popular Exams
              </h2>
              <p className="text-lg text-gray-600">
                Start with our most studied certifications
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularExams.slice(0, 6).map((exam) => (
                <ExamCard key={exam.id} exam={exam} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/exams"
                className="inline-block px-8 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
              >
                View All Exams
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Everything You Need to Pass
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Comprehensive Study Guides
                </h3>
                <p className="text-gray-600">
                  Detailed guides covering every topic tested on your exam
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Practice Questions
                </h3>
                <p className="text-gray-600">
                  Thousands of practice questions with detailed explanations
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AI-Powered Learning
                </h3>
                <p className="text-gray-600">
                  Personalized study plans and instant answers to your questions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Studying?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of students who have passed their exams with ExamPrep Pro
            </p>
            <Link
              href="/exams"
              className="inline-block px-10 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Get Started Free
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
