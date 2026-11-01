export type ExperienceRole = {
  title: string
  period: string
}

export type ExperienceItem = {
  number: string
  company: string
  location: string
  roles: ExperienceRole[]
}

export const experience: ExperienceItem[] = [
  {
    number: '01',
    company: 'RBC Wealth management',
    location: 'Toronto',
    roles: [
      { title: 'Full Stack Developer · Permanent, full-time', period: 'January 2025 — Present' },
      { title: 'Frontend Developer · Permanent, full-time', period: 'July 2022 — January 2025' },
    ],
  },
  {
    number: '02',
    company: 'WaveStar Networks Inc.',
    location: 'Greater Toronto Area',
    roles: [{ title: 'Headend Technician · Permanent, full-time', period: 'March 2022 — July 2022' }],
  },
  {
    number: '03',
    company: 'Shopify',
    location: 'Greater Ottawa Metropolitan Area',
    roles: [{ title: 'Internal Operations', period: 'July 2017 — May 2019' }],
  },
  {
    number: '04',
    company: 'Nordstrom',
    location: 'Ottawa, Ontario',
    roles: [{ title: 'Food Specialist · Permanent, full-time', period: 'September 2016 — June 2017' }],
  },
]

export const education = [
  {
    institution: 'Durham College',
    details: 'Electronics Engineering Technician · Electrical and Electronics Engineering · 2019–2021',
  },
  {
    institution: 'Universidad Tecnológica de la Mixteca',
    details: 'Bachelor’s degree · Electronics Engineering · 2006–2012',
  },
]

export const recognition = [
  {
    title: 'President’s Honour Roll, Durham College',
    details: 'Fall 2019, Winter 2020, Fall 2020, Winter 2021',
  },
  {
    title: 'Build Web Apps with Vue JS 3 & Firebase',
    details: 'Udemy certificate, May 2021',
  },
  {
    title: 'Associate Member',
    details: 'Ontario Association of Certified Engineering Technicians and Technologists (OACETT), May 2021',
  },
]
