import type { DishId } from '../i18n'

export const DISH_IDS = ['peshawari', 'curry', 'biryani'] as const satisfies readonly DishId[]

export const MEDIA = {
  hero: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1920&q=80',
  story:
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
  dishes: {
    peshawari: '/images/peshawari.png',
    curry:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80',
    biryani:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80',
  },
} as const

export const CONTACT_EMAIL = 'mailto:hello@ghorerthali.example'

export const NAV_LINKS = [
  { href: '#story', labelKey: 'navStory' },
  { href: '#menu', labelKey: 'navMenu' },
  { href: '#visit', labelKey: 'navVisit' },
] as const

export const VISIT_DETAILS = [
  { labelKey: 'visitAddress', bodyKey: 'visitAddressBody' },
  { labelKey: 'visitHours', bodyKey: 'visitHoursBody' },
  { labelKey: 'visitReserve', bodyKey: 'visitReserveBody' },
] as const
