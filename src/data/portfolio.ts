// Personal Information
export const personalInfo = {
  name: 'Ankit Sahu',
  title: 'Software Developer | Full-Stack & AI',
  tagline: 'Building Intelligent Solutions for Real-World Problems',
  bio: `I'm a passionate Computer Science student with expertise in AI and ML-integrated systems. I specialize in building full-stack applications using modern technologies like Next.js, Python, and AWS. Currently pursuing B.Tech while gaining hands-on experience through internships and hackathons.`,
  email: 'ankitsahu41190@gmail.com',
  location: 'Jabalpur, Madhya Pradesh',
  availability: 'Open to opportunities',
  phone: '+91 9171899810',
};

// Skills Data
export const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'JavaScript', level: 80, icon: '💛' },
      { name: 'Java', level: 75, icon: '☕' },
      { name: 'SQL', level: 78, icon: '🗄️' },
      { name: 'HTML5', level: 90, icon: '🌐' },
      { name: 'CSS3', level: 85, icon: '🎨' },
    ],
  },
  {
    category: 'Frameworks & Technologies',
    items: [
      { name: 'Next.js', level: 82, icon: '▲' },
      { name: 'Node.js', level: 78, icon: '🟢' },
      { name: 'Express.js', level: 75, icon: '🚂' },
      { name: 'Bootstrap', level: 80, icon: '🅱️' },
      { name: 'EJS', level: 70, icon: '📄' },
      { name: 'RESTful APIs', level: 80, icon: '🔌' },
    ],
  },
  {
    category: 'AI/ML & Cloud',
    items: [
      { name: 'TensorFlow', level: 70, icon: '🧠' },
      { name: 'NLP', level: 68, icon: '💬' },
      { name: 'AWS', level: 75, icon: '☁️' },
      { name: 'Firebase', level: 80, icon: '🔥' },
      { name: 'GIS Integration', level: 72, icon: '🗺️' },
      { name: 'Git/GitHub', level: 85, icon: '📦' },
    ],
  },
];

// Projects Data
export const projects = [
  {
    id: 1,
    title: 'Disaster Management System',
    description: 'Full-stack AI, GIS & ML-based platform for real-time disaster risk prediction with early warning alerts and rescue coordination. Enhanced disaster response efficiency by up to 70%.',
    image: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=800&q=80',
    tech: ['Next.js', 'Firebase', 'AWS', 'AI/ML', 'GIS', 'TensorFlow'],
    category: 'Full-Stack',
    liveUrl: 'https://github.com/ankitsahu',
    githubUrl: 'https://github.com/ankitsahu',
    featured: true,
    timeline: 'Aug 2024 – Nov 2024',
  },
  {
    id: 2,
    title: 'Bail Information System',
    description: 'Legal information platform providing searchable data on IPC and CrPC sections, identifying bailable vs. non-bailable offenses with secure admin dashboard and CRUD operations.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    tech: ['Next.js', 'Node.js', 'SQL', 'RESTful APIs', 'Bootstrap'],
    category: 'Full-Stack',
    liveUrl: 'https://github.com/ankitsahu',
    githubUrl: 'https://github.com/ankitsahu',
    featured: true,
    timeline: 'Jan 2025',
  },
  {
    id: 3,
    title: 'SSR Web Applications',
    description: 'Server-side rendered web pages with secure authentication, authorization mechanisms, and responsive layouts using advanced CSS and dynamic DOM manipulation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tech: ['Node.js', 'Express', 'EJS', 'Bootstrap', 'CSS3'],
    category: 'Backend',
    liveUrl: 'https://github.com/ankitsahu',
    githubUrl: 'https://github.com/ankitsahu',
    featured: false,
    timeline: 'Nov 2025 – Dec 2025',
  },
  {
    id: 4,
    title: 'AI/ML Integration Projects',
    description: 'Various AI and machine learning projects utilizing TensorFlow for natural language processing and predictive modeling.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tech: ['Python', 'TensorFlow', 'NLP', 'Machine Learning'],
    category: 'AI/ML',
    liveUrl: 'https://github.com/ankitsahu',
    githubUrl: 'https://github.com/ankitsahu',
    featured: false,
    timeline: '2024',
  },
];

// Experience Data
export const experience = [
  {
    id: 1,
    company: 'Cognifyz Technologies',
    position: 'Web Development Intern',
    duration: 'Nov 2025 - Dec 2025',
    location: 'Remote',
    description: [
      'Developed server-side rendered (SSR) web pages using Node.js, Express, and EJS for dynamic content generation',
      'Implemented secure user authentication and authorization mechanisms to protect API endpoints and sensitive data',
      'Designed responsive layouts using advanced CSS and Bootstrap with dynamic DOM manipulation',
      'Built RESTful APIs and integrated backend services for real-time user interactions',
    ],
    technologies: ['Node.js', 'Express', 'EJS', 'Bootstrap', 'CSS3', 'JavaScript'],
  },
  {
    id: 2,
    company: 'Hack SRIT 2025',
    position: 'Hackathon Participant',
    duration: 'Jan 2025',
    location: 'Shri Ram Institute of Technology',
    description: [
      'Engineered Bail Information System - a full-stack legal information platform',
      'Built secure admin dashboard with full CRUD operations for authorized management',
      'Optimized user interface for high-speed lookups and ensured data integrity',
      'Collaborated with team members to deliver functional prototype within tight deadlines',
    ],
    technologies: ['Next.js', 'Node.js', 'SQL', 'RESTful APIs', 'Bootstrap'],
  },
  {
    id: 3,
    company: 'Academic Projects',
    position: 'Student Developer',
    duration: '2024 - Present',
    location: 'Shri Ram Group, Jabalpur',
    description: [
      'Developed Disaster Management System with AI/ML integration achieving 70% efficiency improvement',
      'Implemented GIS-based real-time risk prediction and early warning alert systems',
      'Built full-stack applications using Next.js, Firebase, and AWS cloud services',
      'Participated in various coding competitions and technical workshops',
    ],
    technologies: ['Next.js', 'Firebase', 'AWS', 'AI/ML', 'GIS', 'Python'],
  },
];

// Education Data
export const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Shri Ram Group, Jabalpur',
    year: '2023 - 2027',
    honors: 'CGPA: 7.08',
  },
  {
    degree: '12th (Senior Secondary) - NCERT',
    institution: 'Govt High Secondary School, Imaliya',
    year: '2021 - 2022',
    honors: 'Grade: 77.4%',
  },
  {
    degree: '10th (Secondary) - NCERT',
    institution: 'Govt High Secondary School, Imaliya',
    year: '2019 - 2020',
    honors: 'Grade: 84.0%',
  },
];

// Certifications Data
export const certifications = [
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    year: '2024',
    icon: '🤖',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    year: '2024',
    icon: '🔐',
  },
];

// Achievements Data
export const achievements = [
  {
    title: 'Disaster Response Efficiency',
    description: 'Improved disaster response efficiency by 70% through optimized backend workflows',
    icon: '🎯',
  },
  {
    title: 'Hack SRIT 2025',
    description: 'Successfully built and presented Bail Information System at institutional hackathon',
    icon: '🏆',
  },
  {
    title: 'AI/ML Integration',
    description: 'Implemented real-time AI-powered risk prediction systems with GIS integration',
    icon: '🧠',
  },
];