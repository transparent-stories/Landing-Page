'use client'

import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/image'
import { StaticImageData } from "next/image";

interface ClientLogosSectionProps {
  data: {
    title: string
    title_2: string
    highlightText: string
    subtitle: string

    logos: {
      logo: StaticImageData
      alt: string
      link: string
    }[]
  }
}

export default function ClientLogosSection({
  data,
}: ClientLogosSectionProps) {
  const splitTitle = data?.title?.split(data?.highlightText)

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F6F5F3]
        py-20
        md:py-28
      "
      aria-label="Client logos section"
    >
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}
        <div className="mx-auto max-w-6xl text-center">

          {/* SEO H2 */}
          <h2
            className="
              mx-auto
              max-w-5xl
              text-center
              font-black
              leading-[0.95]
              tracking-tight
              text-black
              text-[28px]
              sm:text-[36px]
              md:text-[42px]
            "
          >
            {splitTitle?.[0]}
            <span
              className="
                mx-2
                inline-block
                bg-black
                px-2
                md:px-4
                py-1
                text-white
              "
            >
              {data?.highlightText}
            </span>
            <span className='block'>{data?.title_2}</span>

            {splitTitle?.[1]}
          </h2>

          {/* Subtitle */}
          <p
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-center
              text-black/85
              text-sm
              md:text-[19px]
              leading-relaxed
              font-medium
            "
          >
            {data?.subtitle}
          </p>
        </div>

        {/* Logo Grid */}
        <div
          className="
            mt-16
            md:mt-24
            grid
            grid-cols-2
            gap-x-8
            gap-y-12
            sm:grid-cols-3
            md:grid-cols-5
            items-center
          "
        >
          {data?.logos?.map((item, index) => (
            <Link
              key={index}
              href={item?.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item?.alt}
              className="
                group
                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  relative
                  h-10
                  w-35
                  md:h-13.75
                  md:w-45
                  p-10
                  transition-all
                  duration-300
                  opacity-50
                  group-hover:opacity-70
                  group-hover:grayscale-0
                  group-hover:scale-105
                "
              >
                <Image
                  src={urlFor(item?.logo).url()}
                  alt={item?.alt || 'Client logo'}
                  fill
                  className="object-cover grayscale brightness-25"
                  sizes="(max-width: 768px) 140px, 180px"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}