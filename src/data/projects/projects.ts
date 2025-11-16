export interface ProjectData {
  name: string
  description: string
  technologies: string[]
  image?: string
  highlights?: string[]
  learning?: string
  pdf?: string
}

export const projectsData: Record<string, ProjectData> = {
  'New-Portfolio': {
    name: 'Personal Portfolio Website',
    description: 'Built a fully responsive portfolio with HTML5, SCSS, JavaScript ES6+, and TypeScript. Integrated GitHub API to fetch and filter real-time repositories. Applied accessibility and performance best practices.',
    technologies: ['HTML5', 'SCSS', 'JavaScript ES6+', 'TypeScript', 'GitHub API'],
    image: '/assets/images/new-portfolio.webp',
    highlights: ['GitHub API integration for real-time repositories', 'Fully responsive with accessibility standards', 'Performance optimization and best practices'],
    learning: 'Enhanced skills in API integration, accessibility standards (WCAG 2.1), and performance optimization techniques.'
  },
  'Kasper-Template': {
    name: 'Kasper Template',
    description: 'A professional business template designed for creative agencies, featuring service showcases, team profiles, and testimonials.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    image: '/assets/images/kasper-template.webp',
    highlights: ['Responsive design using Bootstrap grid system', 'Smooth scroll and section transitions', 'Modern and minimal aesthetic'],
    learning: 'Enhanced my understanding of Bootstrap components and responsive breakpoints.'
  },
  'Leon-Template': {
    name: 'Leon Template',
    description: 'A clean and minimalist portfolio layout for freelancers, with an engaging hero section, about info, services, and contact form.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/assets/images/leon-template.webp',
    highlights: ['Fully responsive landing page', 'Custom CSS animations for sections', 'Simple structure ideal for freelancing portfolios'],
    learning: 'Learned to build pure CSS responsive layouts without frameworks.'
  },
  'Dashboard': {
    name: 'Admin Dashboard',
    description: 'A full-featured admin control panel for analytics, user management, and real-time monitoring.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js'],
    image: '/assets/images/dashboard.jpg',
    highlights: ['Real-time chart visualizations using Chart.js', 'Dark/light mode support', 'Fully responsive admin layout'],
    learning: 'Strengthened my knowledge in data visualization and dashboard UI structure.'
  },
  'Bondi-Template': {
    name: 'Bondi Template',
    description: 'A modern responsive business template showcasing services, team, testimonials, and company info with a clean design.',
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    image: '/assets/images/bondi-template.webp',
    highlights: ['Bootstrap-based responsive layout', 'Animated sections with scroll effects', 'Polished UI suitable for corporate websites'],
    learning: 'Developed advanced control over Bootstrap utilities and layout balancing.'
  },
  'Special-Design': {
    name: 'Special Design',
    description: 'A creative and visually dynamic website with animated UI elements and interactive galleries, ideal for design agencies.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/assets/images/special-design.jpg',
    highlights: ['Unique animated landing page', 'Modern UI transitions', 'Showcases strong creative design sense'],
    learning: 'Improved my animation timing and performance handling in CSS and JS.'
  },
  'Memory-Game': {
    name: 'Memory Game',
    description: 'A fun and interactive card-matching game with difficulty levels, timer, and scoring system.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    image: '/assets/images/memory-game.webp',
    highlights: ['Score and time tracking system', 'Dynamic card flipping animation', 'Supports multiple difficulty levels'],
    learning: 'Learned to manage DOM manipulation and game logic flow efficiently.'
  },
  'Hangman-Game': {
    name: 'Hangman Game',
    description: 'A classic hangman game with multiple categories, hint system, and score tracking.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    image: '/assets/images/hangman-game.webp',
    highlights: ['Category selection and hints', 'Lives and score system', 'Interactive and educational gameplay'],
    learning: 'Enhanced my problem-solving and DOM event handling in pure JavaScript.'
  },
  'Quiz-App': {
    name: 'Quiz App',
    description: 'An educational quiz platform featuring multiple-choice questions, timer countdown, and final results display.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'JSON'],
    image: '/assets/images/quiz-app.webp',
    highlights: ['Dynamic question loading from JSON', 'Timer and progress tracking', 'Responsive and user-friendly layout'],
    learning: 'Mastered working with JSON data and timed logic in web apps.'
  },
  'To-Do-List': {
    name: 'To-Do List',
    description: 'A simple and efficient task manager allowing users to create, edit, and organize tasks with local storage persistence.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
    image: '/assets/images/todo-list.jpg',
    highlights: ['Task CRUD functionality', 'LocalStorage data saving', 'Filter and priority management'],
    learning: 'Learned how to persist user data in the browser efficiently using LocalStorage.'
  },
  'VivaDecor': {
    name: 'VivaDecor',
    description: 'A stylish and responsive interior design and decoration website built with Bootstrap and SCSS, featuring elegant layouts and smooth transitions.',
    technologies: ['HTML5', 'SCSS', 'Bootstrap', 'JavaScript'],
    image: '/assets/images/vivadecor.webp',
    highlights: ['Fully responsive layout using Bootstrap grid system', 'Newsletter and contact sections with modern UI', 'Elegant typography and color balance for interior design aesthetics'],
    learning: 'Refined my skills in Bootstrap layout customization and advanced SCSS structuring for modular design.'
  },
  'Sholar': {
    name: 'Sholar',
    description: 'An educational website designed to showcase online courses, instructors, and student testimonials with a clean, modern design and smooth filtering animations.',
    technologies: ['HTML5', 'SCSS', 'JavaScript'],
    image: '/assets/images/sholar.webp',
    highlights: ['Course filtering system with CSS transitions', 'Responsive design for both desktop and mobile', 'Enhanced UI/UX for learning and interaction'],
    learning: 'Mastered animation timing and element transitions using pure CSS and JavaScript event handling.'
  },
  'Kalay-Template': {
    name: 'Kalay Template',
    description: 'A complete modern business template built from scratch using HTML and CSS, including hero, services, testimonials, call-to-action, and contact sections.',
    technologies: ['HTML5', 'CSS3', 'SCSS'],
    image: '/assets/images/kalay-template.webp',
    highlights: ['Clean structure and section-based layout', 'Custom responsive design without frameworks', 'Smooth transitions and hover animations'],
    learning: 'Strengthened my understanding of layout flow and responsive grids using only CSS and SCSS.'
  },
  'Solar-System': {
    name: 'Solar System Animation',
    description: 'A CSS-based solar system simulation project showcasing planet movements, orbital transitions, and glowing effects using gradients and keyframes.',
    technologies: ['HTML5', 'CSS3', 'SCSS'],
    image: '/assets/images/solar-system.jpg',
    highlights: ['Realistic orbital motion with keyframe animations', 'Gradient effects for planet surfaces', 'Smooth transitions between planetary paths'],
    learning: 'Improved my animation logic and mastery of CSS keyframes for creating smooth planetary motion effects.'
  },
  'Login-UI': {
    name: 'Login & Sign-Up UI',
    description: 'A responsive dual-form authentication interface with animated transitions between Sign-In and Sign-Up modes, built using SCSS and TypeScript.',
    technologies: ['HTML5', 'SCSS', 'TypeScript', 'Bootstrap'],
    image: '/assets/images/login-ui.webp',
    highlights: ['Dynamic switch between forms with CSS transitions', 'Modal confirmation upon login success', 'LocalStorage integration for saving user data'],
    learning: 'Learned state handling and animation synchronization using TypeScript and CSS variables.'
  },
  'Movies-App': {
    name: 'Movies App',
    description: 'A movie browsing web app featuring popular and upcoming movies, built with HTML, CSS, and Bootstrap with a responsive and elegant layout.',
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    image: '/assets/images/movies-app.jpg',
    highlights: ['Dynamic movie cards with hover animations', 'Coming soon and popular movies sections', 'Newsletter and footer integrated for full-page experience'],
    learning: 'Practiced responsive UI building and grid management using Bootstrap for structured layouts.'
  },
  'Jadoo': {
    name: 'Jadoo Website',
    description: 'A redesigned version of the Jadoo travel agency landing page built using HTML and SCSS with smooth responsiveness and modern design aesthetics.',
    technologies: ['HTML5', 'SCSS', 'JavaScript'],
    image: '/assets/images/jadoo.webp',
    highlights: ['Fully restructured responsive SCSS design', 'Hero section with call-to-action and imagery', 'Modern color palette and visual hierarchy'],
    learning: 'Enhanced my design eye and SCSS modular workflow through complex layout adjustments.'
  },

}