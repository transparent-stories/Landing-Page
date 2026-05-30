export interface OpportunityCard {
  title: string
  revenueGain: string
  position:
    | 'topLeft'
    | 'bottomLeft'
    | 'topRight'
    | 'bottomRight'
}

export interface MarketingOpportunitiesSectionData {
  titleBeforeHighlight?: string
  highlightText?: string
  titleAfterHighlight?: string

  subtitle?: string

  mainImage?: any

  ctaText?: string
  ctaLink?: string

  cards?: OpportunityCard[]
}