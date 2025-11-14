export interface ExperienceData {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export const experienceData: ExperienceData[] = [
  {
    title: 'Frontend Developer',
    company: 'Freelance',
    period: '2023 - Present',
    description: 'Developing responsive web applications using modern frontend technologies.',
    technologies: ['React', 'TypeScript', 'SCSS', 'Bootstrap']
  },
  {
    title: 'Web Developer',
    company: 'Personal Projects',
    period: '2022 - 2023',
    description: 'Built various web projects including portfolios, templates, and interactive games.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
  }
]