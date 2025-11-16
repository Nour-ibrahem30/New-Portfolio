export interface EducationData {
  degree: string
  institution: string
  period: string
  description: string
  gpa?: string
}

export const educationData: EducationData[] = [
  {
    degree: 'Bachelor\'s in Management Information Systems',
    institution: 'Higher Institute of Computer Science and Management Information Systems (HICMIS)',
    period: '2022 - 2026',
    description: 'Currently pursuing a Bachelor\'s degree in Management Information Systems with focus on web development and information technology.',
    gpa: '3.0/4.0'
  }
]