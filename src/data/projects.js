const JARVIS_REPO = 'https://github.com/riyan-developerr/Jarvis';

const projects = [
  {
    id: 'jarvis',
    title: 'Jarvis — AI Voice Assistant for Windows',
    category: 'AI & Automation',
    badge: 'My First Personal Project',
    tagline: 'Say “Hey Luffy”, then tell your laptop what to do.',
    description: 'A free, voice-controlled AI assistant that runs a Windows laptop. The wake phrase and speech recognition run on-device, everyday commands are handled instantly by a built-in engine, and anything open-ended goes to an LLM agent that plans multi-step tasks with 11 tools, all behind a safety layer that asks before risky actions.',
    highlights: [
      'On-device wake phrase + speech recognition: your voice never leaves the laptop',
      'LLM agent with tool calling (apps, files, media, screen OCR, web, reminders, memory…)',
      'Safety policy: confirmations, hard refusals, Recycle-Bin-only deletes, audit log',
      'Natural online voices with automatic offline fallback; costs $0 to run'
    ],
    stats: [
      { value: '11', label: 'AI tools' },
      { value: '389', label: 'Passing tests' },
      { value: '100%', label: 'Local speech recognition' },
      { value: '$0', label: 'Monthly cost' }
    ],
    pipeline: ['Wake phrase', 'Speech → text', 'Built-in commands / LLM agent', '11 tools + safety checks', 'Natural voice reply'],
    pros: [
      'Private by design and free to run',
      'Instant offline commands, AI for everything else',
      'Switches between 3 free models at rate limits'
    ],
    limitations: [
      'Windows 10/11 (x64) only',
      'English only',
      'AI bound by Groq free-tier limits'
    ],
    tech: ['Python', 'LLM Agents', 'Groq API', 'sherpa-onnx', 'Whisper', 'Edge TTS', 'pywebview', 'Win32 / WinRT', 'pytest'],
    githubUrl: JARVIS_REPO,
    docsUrl: `${JARVIS_REPO}#installation`,
    liveUrl: '',
    youtubeId: '',
    thumbnail: '/assets/jarvis-thumb.webp',
    thumbnailAlt: 'Jarvis desktop window: waiting for the wake phrase, and answering a question',
    featured: true,
    spotlight: true
  },
  {
    id: 'salary-dashboard',
    title: 'Job Salary Analytics Dashboard',
    category: 'Data & Analytics',
    description: 'An interactive data analysis platform visualizing salary trends, compensation benchmarks, and skill-based pay distributions across tech roles.',
    highlights: [
      'Comprehensive statistical analysis of compensation metrics',
      'Interactive pivot tables and dynamic chart visualizations',
      'Skill premium and role-based salary correlation models'
    ],
    tech: ['Excel', 'Data Analysis', 'Data Visualization', 'Statistics'],
    githubUrl: 'https://github.com/riyan-developerr/Portfolio/tree/master/Excel/Projects/Salary_Dashboard(PROJECT_1)',
    liveUrl: 'https://pern-my.sharepoint.com/:x:/r/personal/u2025737_giki_edu_pk/_layouts/15/Doc.aspx?sourcedoc=%7B174306B6-9658-46B7-8B65-429DE837A66C%7D&file=Salary_Dashboard.xlsx&action=default&mobileredirect=true',
    youtubeId: '',
    thumbnail: '/assets/job-dashboard-thumb.png',
    featured: true
  },
  {
    id: 'blogpost-api',
    title: 'BlogPost RESTful API',
    category: 'Backend & AI',
    description: 'A high-performance backend web API built for a modern publishing platform with JWT authentication, relational ORM mapping, and PostgreSQL data persistence.',
    highlights: [
      'FastAPI async routing with automatic OpenAPI swagger docs',
      'SQLAlchemy ORM integration with clean PostgreSQL schema',
      'Robust input validation using Pydantic schemas'
    ],
    tech: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Python', 'JWT'],
    githubUrl: 'https://github.com/riyan-developerr/render-Fastapi-project/tree/fastapi-blogpost-project',
    liveUrl: 'https://fastapi-project-frontend.vercel.app/',
    youtubeId: '',
    thumbnail: '/assets/blogpost-api-thumb.png',
    featured: true
  }
];

export default projects;
