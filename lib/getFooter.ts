import groq from 'groq'

import { client } from './sanity'

export async function getFooter() {
  return client.fetch(groq`
    *[_type == "footerSection"][0]{
      title,

      buttonText,
      buttonLink,

      office{
        illustration,
        country,
        address,
        phone
      },

      contactBox{
        illustration,
        title,
        subtitle,
        buttonText,
        email
      },

      socialHeading,

      socialLinks[]{
        platform,
        url
      },

      partnerLogos,

      copyright,

      termsText,
      termsLink,

      privacyText,
      privacyLink,

      bottomIllustration
    }
  `)
}