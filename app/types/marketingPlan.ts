export interface MarketingPlanCard {
  title: string
  description: string

  arrowImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
    }

    alt?: string
  }

  position:
    | 'farLeft'
    | 'left'
    | 'center'
    | 'right'
    | 'farRight'
}