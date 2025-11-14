export interface SkillData {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'design'
  icon?: string
}

export const skillsData: SkillData[] = [
  { name: 'HTML5', level: 95, category: 'frontend', icon: 'fab fa-html5' },
  { name: 'CSS3', level: 90, category: 'frontend', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', level: 85, category: 'frontend', icon: 'fab fa-js-square' },
  { name: 'TypeScript', level: 80, category: 'frontend', icon: 'fab fa-js-square' },
  { name: 'React', level: 85, category: 'frontend', icon: 'fab fa-react' },
  { name: 'Bootstrap', level: 90, category: 'frontend', icon: 'fab fa-bootstrap' },
  { name: 'SCSS', level: 85, category: 'frontend', icon: 'fab fa-sass' },
  { name: 'Git', level: 80, category: 'tools', icon: 'fab fa-git-alt' },
  { name: 'Figma', level: 75, category: 'design', icon: 'fab fa-figma' },
  { name: 'Photoshop', level: 70, category: 'design', icon: 'fab fa-adobe' }
]