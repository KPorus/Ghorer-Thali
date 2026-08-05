export type Lang = 'bn' | 'en'

export type DishId = 'peshawari' | 'curry' | 'biryani'

export type DishCopy = {
  name: string
  desc: string
  price: string
  alt: string
}

export type LocaleCopy = {
  skip: string
  brand: string
  brandHome: string
  navLabel: string
  navStory: string
  navMenu: string
  navVisit: string
  langSwitch: string
  langAria: string
  heroHeadline: string
  heroSupport: string
  heroCtaMenu: string
  heroCtaVisit: string
  storyLabel: string
  storyTitle: string
  storyLead: string
  storyAlt: string
  menuLabel: string
  menuTitle: string
  menuLead: string
  menuListLabel: string
  priceLabel: string
  dishes: Record<DishId, DishCopy>
  visitLabel: string
  visitTitle: string
  visitLead: string
  visitAddress: string
  visitAddressBody: readonly [string, string]
  visitHours: string
  visitHoursBody: readonly [string, string]
  visitReserve: string
  visitReserveBody: readonly [string, string]
  visitCta: string
  footerNote: string
  documentTitle: string
}
