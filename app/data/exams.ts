export interface Exam {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  description: string;
  provider?: string;
  states?: string[];
  isFree: boolean;
  popular?: boolean;
}

export const examCategories = [
  { id: 'securities', name: 'Securities & FINRA', icon: '📈' },
  { id: 'insurance', name: 'Insurance', icon: '🛡️' },
  { id: 'real-estate', name: 'Real Estate & Mortgage', icon: '🏠' },
  { id: 'healthcare', name: 'Healthcare', icon: '⚕️' },
  { id: 'finance', name: 'Finance & Accounting', icon: '💼' },
  { id: 'education', name: 'Education & Teaching', icon: '📚' },
  { id: 'food', name: 'Food Service & Safety', icon: '🍽️' },
  { id: 'legal', name: 'Legal', icon: '⚖️' },
  { id: 'business', name: 'Business & Management', icon: '💡' },
  { id: 'military', name: 'Military', icon: '🎖️' },
  { id: 'fitness', name: 'Fitness & Wellness', icon: '💪' },
  { id: 'beauty', name: 'Cosmetology & Beauty', icon: '💅' },
];

export const exams: Exam[] = [
  // Securities
  {
    id: 'sie',
    title: 'SIE',
    category: 'securities',
    description: 'The foundational exam for anyone entering the securities industry.',
    provider: 'FINRA',
    isFree: true,
    popular: true,
  },
  {
    id: 'series-6',
    title: 'Series 6',
    category: 'securities',
    description: 'Qualify to sell mutual funds, variable annuities, and 529 plans.',
    provider: 'FINRA',
    isFree: true,
  },
  {
    id: 'series-7',
    title: 'Series 7',
    category: 'securities',
    description: 'The most comprehensive license for selling all types of securities.',
    provider: 'FINRA',
    isFree: true,
    popular: true,
  },
  {
    id: 'series-63',
    title: 'Series 63',
    category: 'securities',
    description: 'Qualify to conduct securities business at the state level.',
    provider: 'NASAA',
    isFree: true,
  },
  {
    id: 'series-65',
    title: 'Series 65',
    category: 'securities',
    description: 'Qualify to provide investment advice for a fee.',
    provider: 'NASAA',
    isFree: true,
  },
  {
    id: 'series-66',
    title: 'Series 66',
    category: 'securities',
    description: 'Combined Series 63 + 65 for agent and adviser registration.',
    provider: 'NASAA',
    isFree: true,
  },
  
  // Insurance
  {
    id: 'life-health-national',
    title: 'Life & Health National Content',
    category: 'insurance',
    subcategory: 'life-health',
    description: 'Core concepts tested on all state exams. Study this first!',
    isFree: true,
    popular: true,
  },
  {
    id: 'pc-national',
    title: 'Property & Casualty National Content',
    category: 'insurance',
    subcategory: 'property-casualty',
    description: 'Core concepts tested on all state exams. Study this first!',
    isFree: true,
    popular: true,
  },
  
  // Real Estate
  {
    id: 're-national',
    title: 'Real Estate National Content',
    category: 'real-estate',
    description: 'Core concepts tested on all state exams. Study this first!',
    isFree: true,
    popular: true,
  },
  {
    id: 'nmls-safe',
    title: 'NMLS SAFE MLO',
    category: 'real-estate',
    description: 'Required for mortgage loan originators in all 50 states.',
    provider: 'NMLS',
    isFree: true,
  },
  
  // Healthcare
  {
    id: 'nclex-rn',
    title: 'NCLEX-RN',
    category: 'healthcare',
    description: 'Required for registered nurse licensure in all US states.',
    provider: 'NCSBN',
    isFree: true,
    popular: true,
  },
  {
    id: 'nclex-pn',
    title: 'NCLEX-PN',
    category: 'healthcare',
    description: 'Required for licensed practical/vocational nurse licensure.',
    provider: 'NCSBN',
    isFree: true,
  },
  {
    id: 'cna',
    title: 'CNA State Certification',
    category: 'healthcare',
    description: 'Essential certification for nursing assistants in healthcare facilities.',
    isFree: true,
    popular: true,
  },
  {
    id: 'ptce',
    title: 'PTCE',
    category: 'healthcare',
    description: 'National certification for pharmacy technicians. Updated for 2026.',
    provider: 'PTCB',
    isFree: true,
  },
  {
    id: 'nremt',
    title: 'NREMT EMT',
    category: 'healthcare',
    description: 'Entry-level EMT certification for emergency medical services.',
    provider: 'NREMT',
    isFree: true,
  },
  {
    id: 'cpc',
    title: 'CPC Medical Coding',
    category: 'healthcare',
    description: 'Gold-standard medical coding certification covering CPT, ICD-10-CM, and HCPCS.',
    provider: 'AAPC',
    isFree: true,
  },
  
  // Finance & Accounting
  {
    id: 'cfp',
    title: 'CFP®',
    category: 'finance',
    description: 'Premier certification for comprehensive financial planning.',
    provider: 'CFP® Board',
    isFree: true,
    popular: true,
  },
  {
    id: 'enrolled-agent',
    title: 'Enrolled Agent',
    category: 'finance',
    description: 'Federally-authorized tax practitioner with IRS representation rights.',
    provider: 'IRS',
    isFree: true,
  },
  {
    id: 'cma',
    title: 'CMA Part 1',
    category: 'finance',
    description: 'Financial Planning, Performance, and Analytics for management accountants.',
    provider: 'IMA',
    isFree: true,
  },
  
  // Education
  {
    id: 'parapro',
    title: 'ParaPro',
    category: 'education',
    description: 'Required for paraprofessional/paraeducator certification in many states.',
    provider: 'ETS',
    isFree: true,
  },
  {
    id: 'praxis-core',
    title: 'Praxis Core',
    category: 'education',
    description: 'Teacher licensing exam covering reading, writing, and math.',
    provider: 'ETS',
    isFree: true,
  },
  
  // Food Service
  {
    id: 'servsafe',
    title: 'ServSafe Manager',
    category: 'food',
    description: 'Industry-standard food safety certification for restaurant and food service managers.',
    provider: 'National Restaurant Assoc.',
    isFree: true,
    popular: true,
  },
  {
    id: 'food-handler',
    title: 'Food Handler',
    category: 'food',
    description: 'Required food safety certification for food service workers.',
    isFree: true,
  },
  
  // Legal
  {
    id: 'ca-bar',
    title: 'California Bar',
    category: 'legal',
    description: 'California Bar Examination for attorney licensure.',
    provider: 'State Bar',
    isFree: true,
  },
  
  // Business
  {
    id: 'pmp',
    title: 'PMP',
    category: 'business',
    description: "The world's most recognized project management certification.",
    provider: 'PMI',
    isFree: true,
    popular: true,
  },
  
  // Military
  {
    id: 'asvab',
    title: 'ASVAB',
    category: 'military',
    description: 'Military aptitude test required for enlistment in all U.S. armed forces.',
    isFree: true,
  },
  
  // Fitness
  {
    id: 'cscs',
    title: 'CSCS',
    category: 'fitness',
    description: 'Gold-standard certification for strength and conditioning professionals.',
    provider: 'NSCA',
    isFree: true,
  },
  {
    id: 'mblex',
    title: 'MBLEx',
    category: 'fitness',
    description: 'Required in 46+ states for massage therapy licensure.',
    provider: 'FSMTB',
    isFree: true,
  },
  
  // Beauty
  {
    id: 'cosmetology',
    title: 'Cosmetology',
    category: 'beauty',
    description: 'Become a licensed cosmetologist with state board exam prep.',
    provider: 'NIC / State Boards',
    isFree: true,
  },
];

export const getExamsByCategory = (categoryId: string) => {
  return exams.filter(exam => exam.category === categoryId);
};

export const getPopularExams = () => {
  return exams.filter(exam => exam.popular);
};

export const searchExams = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return exams.filter(exam => 
    exam.title.toLowerCase().includes(lowerQuery) ||
    exam.description.toLowerCase().includes(lowerQuery) ||
    exam.provider?.toLowerCase().includes(lowerQuery)
  );
};
