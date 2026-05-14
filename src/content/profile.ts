export type SocialLink = {
  label: string
  href: string
}

export const profile = {
  name: 'Your Name',
  role: 'Frontend Developer',
  location: 'Your city (UTC+X)',
  availabilityBadge: 'Available for freelance',
  headline: `Hi, I’m Your Name.`,
  summary:
    'Frontend developer focused on React, TypeScript, UI systems, and building fast, accessible products.',
  socials: [
    { label: 'Email', href: 'mailto:you@example.com' },
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ] satisfies SocialLink[],
  skills: [
    'React',
    'TypeScript',
    'Vite',
    'Ant Design',
    'Testing',
    'Performance',
    'Accessibility',
  ],
} as const

