'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, Clock, Award, ArrowRight, PlayCircle, FileText } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { exams } from '../../data/exams';
import { getQuestionsByExam } from '../../data/questions';

export default function ExamDetailPage() {
  const params = useParams();
  const examId = params.id as string;
  
  const exam = exams.find(e => e.id === examId);
  const questions = getQuestionsByExam(examId);

  if (!exam) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Exam Not Found</h1>
            <Link href="/exams" className="text-primary-600 hover:underline">
              ← Back to All Exams
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const hasQuestions = questions.length > 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              {exam.isFree && (
                <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                  FREE
                </span>
              )}
              {exam.provider && (
                <span className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full">
                  {exam.provider}
                </span>
              )}
            </div>
            
            <h1 className="text-5xl font-bold mb-4">{exam.title} Exam</h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl">
              {exam.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {hasQuestions ? (
                <>
                  <Link
                    href={`/exams/${examId}/practice`}
                    className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center gap-2"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Start Practice Test
                  </Link>
                  <Link
                    href={`/exams/${examId}/study`}
                    className="px-8 py-4 bg-primary-700 text-white border-2 border-white rounded-xl font-semibold hover:bg-primary-800 transition-colors inline-flex items-center gap-2"
                  >
                    <BookOpen className="w-5 h-5" />
                    Study Guide
                  </Link>
                </>
              ) : (
                <div className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold inline-flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Practice questions coming soon
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {hasQuestions ? questions.length : '100+'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {hasQuestions ? 'Sample Questions' : 'Questions Available'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">2-4 weeks</div>
                  <div className="text-sm text-gray-600">Avg. Study Time</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">85%+</div>
                  <div className="text-sm text-gray-600">Pass Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Exam</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {exam.description}
                </p>
                {exam.provider && (
                  <p className="text-gray-600">
                    <strong>Provider:</strong> {exam.provider}
                  </p>
                )}
              </div>

              {/* Sample Questions Preview */}
              {hasQuestions && (
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sample Questions</h2>
                  <p className="text-gray-600 mb-6">
                    We have {questions.length} sample questions to help you prepare. These are example questions for demonstration purposes.
                  </p>
                  
                  <div className="space-y-4">
                    {questions.slice(0, 2).map((q, idx) => (
                      <div key={q.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold">
                            {idx + 1}
                          </span>
                          <p className="text-gray-900 font-medium">{q.question}</p>
                        </div>
                        <div className="ml-11 space-y-2">
                          {q.options.map((option, optIdx) => (
                            <div key={optIdx} className="text-sm text-gray-600">
                              {String.fromCharCode(65 + optIdx)}. {option}
                            </div>
                          ))}
                        </div>
                        <div className="ml-11 mt-3 text-sm text-gray-500">
                          Topic: {q.topic} • Difficulty: {q.difficulty}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/exams/${examId}/practice`}
                    className="mt-6 inline-flex items-center gap-2 text-primary-600 font-semibold hover:underline"
                  >
                    Try all {questions.length} questions <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}

              {/* Study Tips */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Study Tips</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Create a study schedule and stick to it consistently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Take practice tests regularly to identify weak areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Review explanations for both correct and incorrect answers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Join study groups or online communities for support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Take breaks to avoid burnout and maintain focus</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {hasQuestions && (
                    <Link
                      href={`/exams/${examId}/practice`}
                      className="block w-full px-4 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors text-center"
                    >
                      Start Practice Test
                    </Link>
                  )}
                  <Link
                    href={`/exams/${examId}/study`}
                    className="block w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center"
                  >
                    View Study Guide
                  </Link>
                  <Link
                    href={`/exams/${examId}/flashcards`}
                    className="block w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center"
                  >
                    Flashcards
                  </Link>
                </div>
              </div>

              {/* Official Resources */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Official Resources</h3>
                <div className="space-y-3 text-sm">
                  <a href="#" className="block text-primary-600 hover:underline">
                    → Official Exam Content Outline
                  </a>
                  <a href="#" className="block text-primary-600 hover:underline">
                    → Registration Information
                  </a>
                  <a href="#" className="block text-primary-600 hover:underline">
                    → Sample Questions (Official)
                  </a>
                  <a href="#" className="block text-primary-600 hover:underline">
                    → Exam Day Procedures
                  </a>
                </div>
              </div>

              {/* Related Exams */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Exams</h3>
                <div className="space-y-2 text-sm">
                  {exams
                    .filter(e => e.category === exam.category && e.id !== exam.id)
                    .slice(0, 3)
                    .map(relatedExam => (
                      <Link
                        key={relatedExam.id}
                        href={`/exams/${relatedExam.id}`}
                        className="block text-gray-600 hover:text-primary-600 hover:underline"
                      >
                        → {relatedExam.title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
