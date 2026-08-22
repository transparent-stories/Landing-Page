import { client } from './sanity'
import groq from 'groq'

export async function getPage() {
  return client.fetch(groq`*[_type == "page"][0]{
    header,
      hero,
      clientLogos,
      satisfaction,
      performanceCreative{
        title,
        highlightText,
        title2,
        subtitle,

        leftIllustration,
        rightIllustration,

        videos[]{
          caption,
          thumbnail,

          "videoUrl": video.asset->url
        }
      },
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
      marketingOpportunities,
      marketingPlan,
      team
  }`)
}