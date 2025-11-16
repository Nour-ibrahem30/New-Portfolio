export interface ExtracurricularData {
  role: string
  organization: string
  period: string
  description: string
  achievements: string[]
  image?: string
}

export const extracurricularData: ExtracurricularData[] = [
  {
    role: 'Volunteer – Public Relations',
    organization: 'Youth Leading Youth (YLY)',
    period: '2025',
    description: 'Promoted events and community activities within the PR team. Enhanced communication and visibility through digital outreach.',
    achievements: [
      'Enhanced communication and visibility through digital outreach',
      'Promoted community events and activities',
      'Worked within PR team for event promotion'
    ]
  },
  {
    role: 'Volunteer – Front-End Development',
    organization: 'Shabab Betesaed Shabab',
    period: '2025',
    description: 'Contributed to front-end tasks within the technology team. Helped design and improve community web solutions.',
    achievements: [
      'Contributed to front-end development tasks',
      'Helped design community web solutions',
      'Improved existing web platforms for the community'
    ]
  }
]