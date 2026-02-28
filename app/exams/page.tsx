'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExamCard from '../components/ExamCard';
import { examCategories, exams, getExamsByCategory } from '../data/exams';

export default function ExamsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const displayExams = selectedCategory 
    ? getExamsByCategory(selectedCategory)
    : exams;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              All Exams
            </h1>
            <p className="text-lg text-gray-600">
              Browse our complete collection of professional certification exams
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === null
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                All Categories
              </button>
              {examCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Exam Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{displayExams.length}</span> exams
            </p>
          </div>

          {/* Exams Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayExams.map((exam) => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
