export interface CertificateData {
  name: string
  issuer: string
  date: string
  description: string
  credentialId?: string
  url?: string
}

export const certificatesData: CertificateData[] = [
    {
    name: 'Web Development Certificate',
    issuer: 'Green Studio',
    date: '2025',
    description: 'Certificate in web development and design fundamentals',
    url: '/assets/resume/Green Studio.pdf'
  },
  {
    name: 'Front-End Development Training',
    issuer: 'NTI (National Telecommunication Institute)',
    date: '2025',
    description: 'Training on front-end fundamentals and modern web technologies',
    url: '/assets/resume/Nti.pdf'
  },
  {
    name: 'Web Development Internship',
    issuer: 'Web Master Company',
    date: '2025',
    description: 'Hands-on training in front-end development with HTML, CSS, and JavaScript',
    url: '/assets/resume/Web master.pdf'
  },
]