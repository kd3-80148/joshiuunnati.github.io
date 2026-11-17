// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: 'Unnati Joshi',
  firstName: 'Unnati',
  role: 'Full Stack Developer',
  tagline: 'I build fast, thoughtful web products that millions of people use.',
  location: 'Pune, Maharashtra',
  email: 'joshiuunnati@gmail.com',
  phone: '+91 9284615140',
  linkedin: 'https://linkedin.com/in/unnati-joshi-80148u',
  github: 'https://github.com/kd3-80148',
  resume: 'Unnati_Joshi_Resume.pdf',
  available: true,
  summary:
    'Full Stack Developer with 2+ years of experience delivering features end to end on live, high-traffic products — including Mermaid (mermaid.ai), an AI-powered diagramming platform used by 5M+ users and 200K+ companies. Strong in React, TypeScript and Redux on the frontend, with working experience in Node.js, RESTful APIs, OpenAPI and PostgreSQL.',
}

// Paste your Formspree form ID here (e.g. 'xyzabcd') after signing up at formspree.io.
// While empty, the contact form opens the visitor's email app instead.
export const FORMSPREE_ID = ''

export const stats = [
  { value: '2+', label: 'Years shipping production code' },
  { value: '5M+', label: 'Users on product I worked for' },
]

export const experience = [
  {
    company: 'Heaptrace Technology',
    role: 'Software Developer Associate',
    period: 'May 2024 — Aug 2026',
    location: 'Pune, India',
    projects: [
      {
        name: 'Mermaid',
        link: 'https://mermaid.ai',
        blurb: 'AI-powered diagramming platform from the creators of Mermaid.js — 5M+ users, 200K+ companies.',
        points: [
          'Built and enhanced the AI chat interface in React and TypeScript, where users generate and edit diagrams from natural-language prompts.',
          'Reduced initial load time by ~40% by optimizing editor and AI cold-start performance.',
          'Redesigned the core editor to be fully responsive across desktop, tablet and mobile; built onboarding, share modal and bulk-selection UI.',
          'Improved the bulk image and file-upload flow, making multi-file uploads easier to use and track.',
        ],
        tags: ['React', 'TypeScript', 'AI chat', 'Performance'],
      },
      {
        name: 'Equitle',
        blurb: 'Sales engagement platform for multi-channel, multi-step outreach campaigns.',
        points: [
          'Delivered LinkedIn outreach automation and multi-step campaign sequences from design to production.',
          'Built campaign analytics dashboards presenting engagement and performance metrics.',
          'Independently built a handwriting-cloning feature with Google APIs, solving a complex character-mapping problem for accurate font rendering.',
        ],
        tags: ['Full stack', 'Dashboards', 'Google APIs'],
      },
      {
        name: 'Linnsync',
        blurb: 'Emergency and natural-disaster management platform.',
        points: [
          'Reviewed OpenAPI contracts and built RESTful integrations against them, replacing mock data with live backend data.',
          'Validated and troubleshot service APIs using Postman and Swagger to keep frontend and backend in sync.',
        ],
        tags: ['OpenAPI', 'REST', 'Swagger'],
      },
    ],
  },
  {
    company: 'Podar Educational Network',
    role: 'Mathematics Teacher',
    period: '2022 — 2023',
    location: 'India',
    note: 'Taught mathematics before moving into software development through the C-DAC PG-DAC program.',
  },
]

export const skills = [
  { group: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Redux', 'Hooks', 'Context API', 'Next.js', 'Svelte', 'Tailwind CSS', 'Material UI'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Hapi.js', 'REST APIs', 'Microservices', 'JWT auth'] },
  { group: 'APIs & Data', items: ['OpenAPI', 'Swagger', 'Postman', 'PostgreSQL', 'Supabase', 'Firebase'] },
  { group: 'Testing', items: ['Jest', 'Vitest', 'Playwright', 'Unit testing', 'E2E testing'] },
  { group: 'Cloud & Tools', items: ['AWS', 'Docker', 'CI/CD', 'Vercel', 'Git', 'GitHub', 'Jira', 'Agile/Scrum'] },
]

export const education = [
  { degree: 'PG-DAC, Advanced Computing', school: 'C-DAC · Sunbeam Institute, Karad', period: '2023 — 2024', score: '69.00%' },
  { degree: 'M.Sc. Mathematics', school: 'Dr. Babasaheb Ambedkar Marathwada University', period: '2019 — 2021', score: '75.90%' },
  { degree: 'B.Sc. Physics, Chemistry & Mathematics', school: 'Dr. Babasaheb Ambedkar Marathwada University', period: '2016 — 2019', score: '64.94%' },
]
