export interface ContactData {
  email: string
  phone: string
  location: string
  social: {
    github: string
    linkedin: string
    twitter?: string
    facebook?: string
  }
}

export const contactData: ContactData = {
  email: 'nouribrahem207@gmail.com',
  phone: '+20 114 161 5397',
  location: 'Cairo, Egypt',
  social: {
    github: 'https://github.com/Nour-ibrahem30',
    linkedin: 'https://linkedin.com/in/nour-ibrahem-499172346',
    twitter: 'https://twitter.com/yourusername',
    facebook: 'https://www.facebook.com/Nour.ibrahim.30/?locale=ar_AR'
  }
}