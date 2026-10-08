# Riyan Ahmed — Portfolio Website

A modern, dark-themed personal portfolio for **Riyan Ahmed**, AI Engineer & Backend Developer. It shows who I am, what I can do, and the projects I have built.

## Sections

- **Hero**: short introduction
- **About**: bio and quick stats
- **Skills**: grouped by AI & Backend, Databases & Data, and Tools & Ecosystem
- **Projects**: cards with description, highlights, tech stack, GitHub link, and live demo
- **Contact**: email, GitHub, and LinkedIn

## Featured Projects

| Project | Category | Tech |
| --- | --- | --- |
| Job Salary Analytics Dashboard | Data & Analytics | Excel, Data Analysis, Data Visualization, Statistics |
| BlogPost RESTful API | Backend & AI | FastAPI, PostgreSQL, SQLAlchemy, Python, JWT |

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) for linting

## Getting Started

You need [Node.js](https://nodejs.org/) installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the local URL that Vite prints (usually `http://localhost:5173`).

### Available Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs Oxlint on the code |

## Project Structure

```
.
├── public/
│   └── assets/            # Images used by the site (photo, project thumbnails)
├── src/
│   ├── components/        # Navbar, Hero, About, Skills, ProjectsSection, ProjectCard, Contact
│   ├── data/              # Content: projects.js, skills.js, aboutStats.js
│   ├── App.jsx            # Puts all sections together
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles (Tailwind)
├── index.html
├── vite.config.js
└── package.json
```

## Customizing the Content

The text on the site lives in `src/data/`, so you do not need to edit the components.

**Example: add a new project.** Open `src/data/projects.js` and add one more object to the list:

```js
{
  id: 'my-new-project',
  title: 'My New Project',
  category: 'Backend & AI',
  description: 'A short description of what it does.',
  highlights: ['First point', 'Second point'],
  tech: ['Python', 'FastAPI'],
  githubUrl: 'https://github.com/your-name/your-repo',
  liveUrl: 'https://your-demo-link.com',
  youtubeId: '',
  thumbnail: '/assets/my-new-project-thumb.png',
  featured: true
}
```

Put the thumbnail image in `public/assets/`. The new card appears on the site automatically.

## Contact

- GitHub: [riyan-developerr](https://github.com/riyan-developerr)
- LinkedIn: [riyan-ahmad](https://www.linkedin.com/in/riyan-ahmad/)
