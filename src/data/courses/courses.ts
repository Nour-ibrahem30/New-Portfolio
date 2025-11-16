export interface CourseData {
  title: string
  provider: string
  duration: string
  description: string
  skills: string[]
  completed: boolean
  score?:string
}

export const coursesData: CourseData[] = [
  {
    title: 'Web Design',
    provider: 'Nti',
    duration: '90 hours',
    description: 'Modern JavaScript from the beginning - all the way up to ES6+ and beyond',
    skills: ['Html',`Css`, 'ES6', 'Bootstrap'],
    completed: true,
    score:`91%`
  },
  {
    title: 'React - The Complete Guide',
    provider: 'Udemy',
    duration: '40 hours',
    description: 'Complete React course covering hooks, context, routing, and state management',
    skills: ['React', 'Redux', 'React Router', 'Hooks'],
    completed: true
  },
  {
    title: 'Advanced CSS and Sass',
    provider: 'Udemy',
    duration: '28 hours',
    description: 'Modern CSS techniques, Flexbox, Grid, and Sass preprocessing',
    skills: ['CSS3', 'Sass', 'Flexbox', 'Grid'],
    completed: true
  }
]