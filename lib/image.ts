import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './sanity'

const builder = createImageUrlBuilder(client)

export type SanityImageSource = {
  _type?: string
  asset?: {
    _ref: string
    _type: string
  }
}

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}