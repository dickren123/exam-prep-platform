export interface Question {
  id: string;
  examId: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface ExamSession {
  id: string;
  examId: string;
  startTime: number;
  endTime?: number;
  answers: { [questionId: string]: number };
  score?: number;
  totalQuestions: number;
}

// Sample questions for demonstration
export const sampleQuestions: Question[] = [
  // SIE Exam
  {
    id: 'sie-001',
    examId: 'sie',
    question: 'What is the primary purpose of the Securities Investor Protection Corporation (SIPC)?',
    options: [
      'To insure customer accounts against market losses',
      'To protect customer securities and cash in the event of broker-dealer failure',
      'To regulate securities trading on exchanges',
      'To provide investment advice to retail investors'
    ],
    correctAnswer: 1,
    explanation: 'SIPC protects customers if a broker-dealer fails, covering up to $500,000 per customer (including $250,000 for cash claims). It does NOT protect against market losses.',
    topic: 'Regulatory Fundamentals',
    difficulty: 'medium'
  },
  {
    id: 'sie-002',
    examId: 'sie',
    question: 'Which of the following is a characteristic of common stock?',
    options: [
      'Guaranteed dividend payments',
      'Priority in liquidation over preferred stock',
      'Voting rights in corporate elections',
      'Fixed maturity date'
    ],
    correctAnswer: 2,
    explanation: 'Common stockholders typically have voting rights to elect the board of directors and vote on major corporate issues. Dividends are not guaranteed, and common stock has no maturity date.',
    topic: 'Equity Securities',
    difficulty: 'easy'
  },
  {
    id: 'sie-003',
    examId: 'sie',
    question: 'A customer buys 100 shares of XYZ stock at $50 per share. What is the total cost basis?',
    options: [
      '$50',
      '$500',
      '$5,000',
      '$50,000'
    ],
    correctAnswer: 2,
    explanation: 'Cost basis = Number of shares × Price per share = 100 × $50 = $5,000. This is the amount the customer paid for the investment.',
    topic: 'Investment Math',
    difficulty: 'easy'
  },
  {
    id: 'sie-004',
    examId: 'sie',
    question: 'What is the maximum contribution limit for a Traditional IRA in 2024 for someone under age 50?',
    options: [
      '$5,500',
      '$6,000',
      '$6,500',
      '$7,000'
    ],
    correctAnswer: 3,
    explanation: 'For 2024, the IRA contribution limit is $7,000 for individuals under 50. Those 50 and older can contribute an additional $1,000 catch-up contribution.',
    topic: 'Retirement Accounts',
    difficulty: 'medium'
  },
  {
    id: 'sie-005',
    examId: 'sie',
    question: 'Which regulatory body has jurisdiction over municipal securities dealers?',
    options: [
      'SEC only',
      'FINRA only',
      'MSRB (with SEC and FINRA enforcement)',
      'Federal Reserve'
    ],
    correctAnswer: 2,
    explanation: 'The Municipal Securities Rulemaking Board (MSRB) creates rules for municipal securities, but enforcement is carried out by the SEC (for dealers) and FINRA (for broker-dealers).',
    topic: 'Regulatory Framework',
    difficulty: 'hard'
  },

  // Series 7 Exam
  {
    id: 's7-001',
    examId: 'series-7',
    question: 'An investor sells short 100 shares of ABC at $60. The stock rises to $70. What is the investor\'s loss?',
    options: [
      '$600',
      '$700',
      '$1,000',
      '$1,600'
    ],
    correctAnswer: 2,
    explanation: 'Short sale loss = (Sell price - Buy price) × Shares = ($60 - $70) × 100 = -$1,000. The investor must buy back at $70 what they sold at $60.',
    topic: 'Options and Trading',
    difficulty: 'medium'
  },
  {
    id: 's7-002',
    examId: 'series-7',
    question: 'What is the maximum annual contribution to a 401(k) plan for 2024 (under age 50)?',
    options: [
      '$19,500',
      '$20,500',
      '$22,500',
      '$23,000'
    ],
    correctAnswer: 3,
    explanation: 'The 401(k) contribution limit for 2024 is $23,000 for those under 50. Participants 50+ can make catch-up contributions of $7,500.',
    topic: 'Retirement Plans',
    difficulty: 'medium'
  },

  // NCLEX-RN
  {
    id: 'nclex-001',
    examId: 'nclex-rn',
    question: 'A nurse is caring for a client with diabetic ketoacidosis. Which finding would the nurse expect?',
    options: [
      'Fruity breath odor',
      'Increased blood pressure',
      'Slow, shallow respirations',
      'Cool, clammy skin'
    ],
    correctAnswer: 0,
    explanation: 'Diabetic ketoacidosis (DKA) produces ketones, which cause a characteristic fruity or acetone breath odor. Other signs include Kussmaul respirations, dehydration, and altered mental status.',
    topic: 'Endocrine Disorders',
    difficulty: 'medium'
  },
  {
    id: 'nclex-002',
    examId: 'nclex-rn',
    question: 'What is the correct order for donning personal protective equipment (PPE)?',
    options: [
      'Gloves, gown, mask, goggles',
      'Gown, mask, goggles, gloves',
      'Mask, goggles, gown, gloves',
      'Goggles, mask, gloves, gown'
    ],
    correctAnswer: 1,
    explanation: 'The correct order for donning PPE is: 1) Gown, 2) Mask or respirator, 3) Goggles or face shield, 4) Gloves. This sequence provides optimal protection.',
    topic: 'Infection Control',
    difficulty: 'easy'
  },

  // CFP
  {
    id: 'cfp-001',
    examId: 'cfp',
    question: 'What is the maximum annual gift tax exclusion per recipient for 2024?',
    options: [
      '$15,000',
      '$16,000',
      '$17,000',
      '$18,000'
    ],
    correctAnswer: 3,
    explanation: 'The annual gift tax exclusion for 2024 is $18,000 per recipient. Married couples can jointly gift $36,000 per recipient without triggering gift tax.',
    topic: 'Tax Planning',
    difficulty: 'medium'
  },

  // PMP
  {
    id: 'pmp-001',
    examId: 'pmp',
    question: 'In Agile methodology, what is a "sprint"?',
    options: [
      'A project milestone',
      'A time-boxed iteration of work',
      'A risk management technique',
      'A stakeholder meeting'
    ],
    correctAnswer: 1,
    explanation: 'A sprint is a time-boxed iteration (typically 1-4 weeks) during which a Scrum team works to complete a set amount of work. It\'s a core component of Agile/Scrum methodology.',
    topic: 'Agile Frameworks',
    difficulty: 'easy'
  },

  // ServSafe
  {
    id: 'serv-001',
    examId: 'servsafe',
    question: 'What is the minimum internal cooking temperature for ground beef?',
    options: [
      '145°F (63°C) for 15 seconds',
      '155°F (68°C) for 15 seconds',
      '165°F (74°C) for 15 seconds',
      '145°F (63°C) for 4 minutes'
    ],
    correctAnswer: 1,
    explanation: 'Ground meats (beef, pork, lamb) must be cooked to a minimum internal temperature of 155°F (68°C) for 15 seconds to ensure food safety and destroy harmful bacteria.',
    topic: 'Food Safety Temperatures',
    difficulty: 'medium'
  },
];

export const getQuestionsByExam = (examId: string): Question[] => {
  return sampleQuestions.filter(q => q.examId === examId);
};

export const getQuestionById = (questionId: string): Question | undefined => {
  return sampleQuestions.find(q => q.id === questionId);
};

export const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
