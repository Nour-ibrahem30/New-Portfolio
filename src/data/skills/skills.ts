export interface SkillData {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'design'
  icon?: string
}

export const skillsData: SkillData[] = [
  { name: 'HTML5', level: 95, category: 'frontend', icon: 'fab fa-html5' },
  { name: 'CSS3', level: 90, category: 'frontend', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript (ES6+)', level: 80, category: 'frontend', icon: 'fab fa-js-square' },
  { name: 'TypeScript', level: 75, category: 'frontend', icon: 'fab fa-js-square' },
  { name: 'React', level: 85, category: 'frontend', icon: 'fab fa-react' },
  { name: 'SCSS/Sass', level: 85, category: 'frontend', icon: 'fab fa-sass' },
  { name: 'Bootstrap 5', level: 90, category: 'frontend', icon: 'fab fa-bootstrap' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend', icon: 'fas fa-wind' },
  { name: 'Git & GitHub', level: 80, category: 'tools', icon: 'fab fa-git-alt' },
  { name: 'VS Code', level: 90, category: 'tools', icon: 'fas fa-code' },
  { name: 'Chrome DevTools', level: 85, category: 'tools', icon: 'fab fa-chrome' },
  { name: 'Webpack', level: 70, category: 'tools', icon: 'fab fa-webpack' },
  { name: 'Jest', level: 65, category: 'tools', icon: 'fas fa-vial' }
]