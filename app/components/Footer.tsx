import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-white">ExamPrep Pro</span>
            </div>
            <p className="text-sm text-gray-400">
              Free professional exam preparation resources for thousands of students worldwide.
            </p>
          </div>

          {/* Popular Exams */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Exams</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/exams/sie" className="hover:text-primary-400">SIE</Link></li>
              <li><Link href="/exams/series-7" className="hover:text-primary-400">Series 7</Link></li>
              <li><Link href="/exams/nclex-rn" className="hover:text-primary-400">NCLEX-RN</Link></li>
              <li><Link href="/exams/cfp" className="hover:text-primary-400">CFP®</Link></li>
              <li><Link href="/exams/pmp" className="hover:text-primary-400">PMP</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides" className="hover:text-primary-400">Study Guides</Link></li>
              <li><Link href="/practice" className="hover:text-primary-400">Practice Tests</Link></li>
              <li><Link href="/flashcards" className="hover:text-primary-400">Flashcards</Link></li>
              <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li>
              <li><Link href="/glossary" className="hover:text-primary-400">Glossary</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary-400">About Us</Link></li>
              <li><Link href="/partner" className="hover:text-primary-400">Partner With Us</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary-400">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} ExamPrep Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
