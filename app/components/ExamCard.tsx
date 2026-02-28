import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Exam } from '../data/exams';

interface ExamCardProps {
  exam: Exam;
}

export default function ExamCard({ exam }: ExamCardProps) {
  return (
    <Link
      href={`/exams/${exam.id}`}
      className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary-300 transition-all duration-200 group"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {exam.isFree && (
              <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                FREE
              </span>
            )}
            {exam.popular && (
              <span className="px-2 py-0.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                POPULAR
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
            {exam.title}
          </h3>
          {exam.provider && (
            <p className="text-sm text-gray-500 mt-1">{exam.provider}</p>
          )}
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed">
        {exam.description}
      </p>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <span className="text-primary-600 text-sm font-medium group-hover:underline">
          Start Studying →
        </span>
      </div>
    </Link>
  );
}
