export interface OpportunityCard {
  title: string
  revenueGain: string
  position:
    | 'topLeft'
    | 'bottomLeft'
    | 'topRight'
    | 'bottomRight'
}

type SanityImageAsset = {
  _ref: string
  _type: 'reference'
}

export interface MarketingOpportunitiesSectionData {
  titleBeforeHighlight?: string
  highlightText?: string
  titleAfterHighlight?: string

  subtitle?: string

  mainImage?: SanityImageAsset

  ctaText?: string
  ctaLink?: string

  cards?: OpportunityCard[]
}