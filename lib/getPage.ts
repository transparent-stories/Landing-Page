import { client } from './sanity'
import groq from 'groq'

export async function getPage() {
  return client.fetch(groq`*[_type == "page"][0]{
    header,
      hero,
      clientLogos,
      satisfaction,
      kpivstime,

      playlistSection{
        titleBeforeHighlight,
        highlightText,
        titleAfterHighlight,

        subtitle,
        remarkText,

        mainImage,

        audios[]{
          title,
          description,
          "audioUrl": audioFile.asset->url
        }
      },
      priorityTable,
      marketingOpportunities
  }`)
}