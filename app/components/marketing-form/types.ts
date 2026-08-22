export interface MarketingPlanFormData {
  // Step 1
  services: string[]

  // Step 2
  goals: string[]

  // Step 3
  budget: string

  // Step 4
  website: string

  // Step 5
  name: string
  email: string
  phone: string
}

export interface Option {
  label: string
  value: string
}

export interface FormStep {
  id: number
  title: string
  subtitle?: string
  multiple: boolean
  field:
    | 'services'
    | 'goals'
    | 'budget'
    | 'website'
    | 'contact'

  options?: Option[]
}

export const FORM_STEPS: FormStep[] = [
  {
    id: 1,
    title: 'What do you need help with?',
    subtitle: 'Select all that apply',
    field: 'services',
    multiple: true,
    options: [
      {
        label: 'Paid Advertising',
        value: 'Paid Advertising',
      },
      {
        label: 'Content Marketing',
        value: 'Content Marketing',
      },
      {
        label: 'Creative Work',
        value: 'Creative Work',
      },
      {
        label: 'Search Engine Optimization (SEO)',
        value: 'SEO',
      },
      {
        label: 'Conversion Rate Optimization (CRO)',
        value: 'CRO',
      },
      {
        label: 'Paid Search',
        value: 'Paid Search',
      },
      {
        label: 'Paid Social',
        value: 'Paid Social',
      },
      {
        label: 'Other',
        value: 'Other',
      },
    ],
  },

  {
    id: 2,
    title: 'What are your goals?',
    subtitle: 'Select all that apply',
    field: 'goals',
    multiple: true,
    options: [
      {
        label: 'Increase revenue',
        value: 'Increase revenue',
      },
      {
        label: 'Increase profit',
        value: 'Increase profit',
      },
      {
        label: 'Get more conversions',
        value: 'Get more conversions',
      },
      {
        label: 'Lower my acquisition cost',
        value: 'Lower my acquisition cost',
      },
      {
        label: 'Improve my ROI',
        value: 'Improve my ROI',
      },
      {
        label: 'All of the above',
        value: 'All of the above',
      },
      {
        label: 'Other',
        value: 'Other',
      },
    ],
  },

  {
    id: 3,
    title:
      "What's your current monthly digital marketing budget?",
    subtitle:
      "Don't worry, we won't judge — an estimated guess is fine too.",
    field: 'budget',
    multiple: false,
    options: [
      {
        label: '$0 - $1,000',
        value: '$0 - $1,000',
      },
      {
        label: '$1,001 - $5,000',
        value: '$1,001 - $5,000',
      },
      {
        label: '$5,001 - $10,000',
        value: '$5,001 - $10,000',
      },
      {
        label: '$10,001 - $25,000',
        value: '$10,001 - $25,000',
      },
      {
        label: '$25,001 - $100,000',
        value: '$25,001 - $100,000',
      },
      {
        label: '$100,001+',
        value: '$100,001+',
      },
    ],
  },

  {
    id: 4,
    title: "What's your company's website?",
    subtitle: 'mywebsite.com',
    field: 'website',
    multiple: false,
  },

  {
    id: 5,
    title:
      "We're putting your marketing plan & pricing options together. Who can we send them to?",
    field: 'contact',
    multiple: false,
  },
]