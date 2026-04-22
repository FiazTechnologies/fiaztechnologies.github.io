// Site-wide constants and configuration
export const SITE_CONFIG = {
  name: 'Fiaz Technologies',
  tagline: 'Developer-first tools and AI-powered solutions',
  description:
    'Fiaz Technologies builds developer-first tools, AI-powered solutions, SaaS products, mobile applications, and high-performance web platforms for global users.',
  url: 'https://fiaztechnologies.github.io',
  repo: 'https://github.com/FiazTechnologies/fiaztechnologies.github.io',
  ogImage: 'https://avatars.githubusercontent.com/u/141745376?s=200&v=4',
  favicon: 'https://avatars.githubusercontent.com/u/141745376?s=200&v=4',
  email: 'contact@muhammadfiaz.com',
  twitter: '@muhammadfiaz_',
  twitterUrl: 'https://x.com/muhammadfiaz_',
  country: 'India',
} as const;

export const FOUNDER = {
  name: 'Muhammad Fiaz',
  avatar: 'https://avatars.githubusercontent.com/u/75434191?v=4',
  github: 'https://github.com/muhammad-fiaz',
  linkedin: 'https://www.linkedin.com/in/muhammad-fiaz-/',
  portfolio: 'https://muhammadfiaz.com',
  twitter: 'https://x.com/muhammadfiaz_',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '/refund' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
  social: [
    { label: 'GitHub', href: FOUNDER.github },
    { label: 'LinkedIn', href: FOUNDER.linkedin },
    { label: 'Twitter / X', href: FOUNDER.twitter },
    { label: 'Portfolio', href: FOUNDER.portfolio },
  ],
} as const;

export const STATS = [
  { value: '99.9%', label: 'Industry Standard Quality' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '24/7', label: 'Global Support' },
  { value: '10+', label: 'Countries Served' },
] as const;

export const SERVICES = [
  {
    title: 'AI-Powered Solutions',
    tagline: 'Smarter decisions, faster execution',
    description:
      'We harness the power of artificial intelligence to build systems that think, learn, and adapt. From custom machine learning models that predict customer behavior to natural language processing engines that understand context — our AI solutions turn raw data into actionable intelligence.',
    longDescription:
      'Imagine a system that analyzes millions of data points in seconds, identifies patterns humans would miss, and makes recommendations that drive real business outcomes. That\'s what we build. Our AI solutions aren\'t just prototypes — they\'re production-grade systems deployed at scale, handling real-world complexity with 99.9% reliability.',
    icon: 'brain',
    features: [
      'Custom ML model development & training',
      'Intelligent process automation',
      'Natural language processing & understanding',
      'Computer vision & image recognition',
      'Predictive analytics & forecasting',
      'AI-powered recommendation engines',
    ],
  },
  {
    title: 'SaaS Development',
    tagline: 'Built for scale from day one',
    description:
      'We architect and build multi-tenant SaaS platforms that are designed to scale from your first user to your millionth. Every platform we deliver includes subscription management, role-based access control, and real-time dashboards — all backed by an API-first architecture.',
    longDescription:
      'Your SaaS product deserves an architecture that grows with your ambition. We design database schemas that handle tenant isolation elegantly, implement billing systems that work across currencies and regions, and build admin dashboards that give you full visibility into your platform\'s health.',
    icon: 'cloud',
    features: [
      'Multi-tenant architecture design',
      'Subscription & billing management',
      'Role-based access control (RBAC)',
      'Real-time analytics dashboards',
      'API-first design & documentation',
      'Automated CI/CD pipelines',
    ],
  },
  {
    title: 'Developer Tools',
    tagline: 'Tools developers actually love using',
    description:
      'We build the tools that other developers reach for daily. From command-line interfaces that make complex workflows simple, to SDK libraries that abstract away boilerplate — our developer tools are designed with obsessive attention to developer experience.',
    longDescription:
      'Great developer tools don\'t just work — they feel intuitive. Every CLI command has helpful error messages. Every SDK method is discoverable. Every piece of documentation includes real-world examples. We build tools that save developers hours every week and make them smile while doing it.',
    icon: 'code',
    features: [
      'CLI tools & interactive SDKs',
      'IDE extensions & plugins',
      'CI/CD pipeline integrations',
      'Static analysis & linting tools',
      'API documentation generators',
      'Open-source library development',
    ],
  },
  {
    title: 'Web Applications',
    tagline: 'Performant, beautiful, accessible',
    description:
      'We craft high-performance web platforms that look stunning and work flawlessly across every device. Using cutting-edge frameworks like React, Next.js, and Astro, we build everything from content-rich marketing sites to complex real-time collaboration platforms.',
    longDescription:
      'Performance isn\'t an afterthought — it\'s a foundation. Every web application we build achieves 90+ Lighthouse scores, implements progressive enhancement, and delivers sub-second initial loads. We combine server-side rendering with client-side interactivity to create experiences that feel instantaneous.',
    icon: 'globe',
    features: [
      'Progressive web apps (PWA)',
      'Real-time collaborative features',
      'E-commerce & marketplace platforms',
      'Content management systems',
      'Analytics dashboards & data viz',
      'Accessibility (WCAG 2.1 AA) compliance',
    ],
  },
  {
    title: 'Mobile Applications',
    tagline: 'Native feel, cross-platform reach',
    description:
      'We build cross-platform mobile applications that feel native on both iOS and Android. Using React Native and modern mobile frameworks, we deliver apps with smooth animations, offline support, and push notifications — all from a single codebase.',
    longDescription:
      'Our mobile apps don\'t compromise. They support offline-first data sync, biometric authentication, deep linking, and platform-specific gestures. We handle the complexity of app store submissions, code signing, and OTA updates so you can focus on your users.',
    icon: 'smartphone',
    features: [
      'React Native cross-platform development',
      'iOS & Android native features',
      'Push notification systems',
      'Offline-first architecture',
      'App store optimization (ASO)',
      'In-app purchases & subscriptions',
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    name: 'Rahul S.',
    role: 'CTO, Tech Startup',
    content:
      'Working with Fiaz Technologies was a game-changer for our team. They understood our vision from day one and delivered a solution that exceeded every expectation. Highly recommended.',
    avatar: 'RS',
    location: 'India',
  },
  {
    name: 'Priya M.',
    role: 'Founder & CEO',
    content:
      'The quality of work and attention to detail is outstanding. The team is responsive, professional, and truly cares about delivering the best possible outcome for their clients.',
    avatar: 'PM',
    location: 'India',
  },
  {
    name: 'Arjun K.',
    role: 'Engineering Lead',
    content:
      'What sets Fiaz Technologies apart is their deep technical expertise combined with a genuine understanding of business needs. They don\'t just build software — they build solutions.',
    avatar: 'AK',
    location: 'India',
  },
  {
    name: 'Sneha R.',
    role: 'Product Manager',
    content:
      'From ideation to deployment, the entire experience was seamless. They kept us in the loop at every stage and the final product was polished and production-ready from day one.',
    avatar: 'SR',
    location: 'India',
  },
  {
    name: 'Vikram P.',
    role: 'Director of Engineering',
    content:
      'I\'ve worked with many development teams over the years, and Fiaz Technologies stands out for their commitment to quality, clean code, and on-time delivery. A truly reliable partner.',
    avatar: 'VP',
    location: 'India',
  },
  {
    name: 'Ananya D.',
    role: 'CEO, EdTech Company',
    content:
      'They took the time to understand our unique challenges and delivered a platform that our users absolutely love. The ongoing support has been exceptional as well.',
    avatar: 'AD',
    location: 'India',
  },
] as const;

export const TECH_STACK = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Astro', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Rust', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'AI/ML' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'PyTorch', category: 'AI/ML' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'GCP', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'GraphQL', category: 'API' },
  { name: 'REST', category: 'API' },
] as const;

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We dive deep into your requirements, understand your vision, and define the project scope with clear milestones.',
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Our team designs the system architecture and user experience, ensuring scalability and performance from the start.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Agile development with regular check-ins, code reviews, and iterative delivery to keep you in the loop.',
  },
  {
    step: '04',
    title: 'Deploy & Support',
    description: 'We handle deployment, monitoring, and provide ongoing support to ensure your product runs smoothly in production.',
  },
] as const;
