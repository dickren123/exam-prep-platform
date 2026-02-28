'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ExamCard from '../../../components/ExamCard';
import { examCategories, getExamsByCategory } from '../../../data/exams';

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.id as string;
  
  const category = examCategories.find(c => c.id === categoryId);
  const exams = getExamsByCategory(categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
            <Link href="/" className="text-primary-600 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="text-6xl">{category.icon}</div>
              <div>
                <h1 className="text-5xl font-bold mb-2">{category.name}</h1>
                <p className="text-xl text-primary-100">
                  {exams.length} exam{exams.length !== 1 ? 's' : ''} available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Exams Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {exams.length > 0 ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  All {category.name} Exams
                </h2>
                <p className="text-gray-600">
                  Choose an exam to start your preparation journey
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exams.map((exam) => (
                  <ExamCard key={exam.id} exam={exam} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                No Exams Available Yet
              </h2>
              <p className="text-gray-600 mb-6">
                We're working on adding exams for this category. Check back soon!
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Browse Other Categories
              </Link>
            </div>
          )}
        </div>

        {/* Related Categories */}
        {exams.length > 0 && (
          <div className="bg-white border-t border-gray-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Explore Other Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {examCategories
                  .filter(c => c.id !== categoryId)
                  .slice(0, 4)
                  .map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.id}`}
                      className="p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-primary-500 hover:shadow-md transition-all group"
                    >
                      <div className="text-4xl mb-3">{cat.icon}</div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {cat.name}
                      </h3>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
