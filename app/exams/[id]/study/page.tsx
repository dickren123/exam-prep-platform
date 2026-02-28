'use client';

import { useParams, useRouter } from 'next/navigation';
import { BookOpen, ArrowLeft } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { exams } from '../../../data/exams';

export default function StudyGuidePage() {
  const params = useParams();
  const router = useRouter();
  const examId = params.id as string;
  
  const exam = exams.find(e => e.id === examId);

  if (!exam) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Exam Not Found</h1>
            <button
              onClick={() => router.push('/exams')}
              className="text-primary-600 hover:underline"
            >
              ← Back to All Exams
            </button>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => router.push(`/exams/${examId}`)}
            className="inline-flex items-center gap-2 text-primary-600 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {exam.title}
          </button>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{exam.title} Study Guide</h1>
                <p className="text-gray-600">Comprehensive preparation materials</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <p className="text-blue-900 font-medium mb-2">📚 Study Guide Coming Soon</p>
                <p className="text-blue-800 text-sm">
                  We're working on comprehensive study materials for this exam. Check back soon for detailed content covering all exam topics.
                </p>
              </div>

              <h2>What to Expect</h2>
              <p>{exam.description}</p>

              <h2>Exam Format</h2>
              <ul>
                <li>Multiple choice questions</li>
                <li>Scenario-based questions</li>
                <li>Time-limited test format</li>
              </ul>

              <h2>Study Recommendations</h2>
              <ol>
                <li><strong>Review the official content outline</strong> - Understand what topics are covered</li>
                <li><strong>Practice regularly</strong> - Use our practice tests to gauge your readiness</li>
                <li><strong>Focus on weak areas</strong> - Identify topics where you need more study</li>
                <li><strong>Join study groups</strong> - Learn from others preparing for the same exam</li>
                <li><strong>Take timed practice tests</strong> - Get comfortable with the test format</li>
              </ol>

              <h2>Official Resources</h2>
              <p>
                {exam.provider && `The ${exam.provider} provides official study materials and sample questions. `}
                We recommend reviewing their official content outline and any sample tests they provide.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
                <p className="text-yellow-900 font-medium mb-2">⚠️ Disclaimer</p>
                <p className="text-yellow-800 text-sm">
                  This study guide provides general information and is not affiliated with or endorsed by the official exam provider. 
                  Always refer to official sources for the most accurate and up-to-date exam information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
