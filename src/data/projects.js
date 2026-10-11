const projects = [
  {
    id: 'jarvis',
    title: 'Jarvis',
    tagline: 'A free voice assistant for Windows',
    category: 'AI & Automation',
    badge: 'My first personal project',
    spotlight: true,
    description:
      'Say the wake phrase, then say what you want. Everyday commands run instantly and offline, and anything more complex goes to an AI agent that plans the steps and uses tools to control the laptop. A safety layer checks every action first.',
    screenshot: {
      webp: '/assets/jarvis-screenshot.webp',
      src: '/assets/jarvis-screenshot.jpg',
      width: 1600,
      height: 1100,
      alt: 'The Jarvis window waiting for the wake phrase (left) and answering a question in the chat (right)',
      caption: 'Waiting for "Hey Luffy" (left) and mid-conversation (right).'
    },
    stats: [
      { value: '11', label: 'tools the AI agent can use' },
      { value: '389', label: 'automated tests' },
      { value: '$0', label: 'per month to run' },
      { value: 'Local', label: 'wake phrase and speech recognition, on the laptop' }
    ],
    pipeline: [
      { title: 'Wake phrase', detail: 'A custom phrase, spotted on the laptop by a sherpa-onnx keyword spotter.' },
      { title: 'Speech to text', detail: 'Moonshine or Whisper transcribe locally, so your voice is not uploaded.' },
      { title: 'Rules or AI agent', detail: 'Common commands run instantly; the rest goes to a Groq LLM agent with 11 tools.' },
      { title: 'Safety check', detail: 'A hard-coded policy asks before risky actions, refuses dangerous ones and logs all.' },
      { title: 'Act and reply', detail: 'Jarvis controls Windows and answers aloud in a neural or offline voice.' }
    ],
    highlights: [
      'An agent loop with tool calling that switches between three free Groq models when one hits its rate limit',
      'A safety policy: deletes go to the Recycle Bin, PowerShell and bulk moves need a yes, system folders and the registry are off-limits',
      'An offline command engine for music, apps, volume, timers, typing and screenshots',
      'Voice training: say the wake phrase three times and Jarvis tunes its detector to your voice',
      'A desktop app with an HTML/CSS/JS window (pywebview), tray icon, global hotkeys and an emergency stop',
      'A pytest suite of 389 tests covering commands, safety rules, wake-phrase matching and the agent loop'
    ],
    limitations: [
      'Runs on 64-bit Windows 10 and 11 only, not on macOS, Linux or Windows on ARM',
      'English only',
      'AI requests need a free Groq API key and share its free-tier rate limits',
      'Needs Python and about 1 GB of disk for packages and speech models'
    ],
    tech: ['Python', 'sherpa-onnx', 'faster-whisper', 'Groq API', 'LLM tool calling', 'edge-tts', 'Kokoro / Piper', 'pywebview', 'pywin32', 'pytest'],
    credit: 'Developed with Claude Code as an AI pair programmer.',
    githubUrl: 'https://github.com/riyan-developerr/Jarvis',
    docsUrl: 'https://github.com/riyan-developerr/Jarvis#installation'
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
