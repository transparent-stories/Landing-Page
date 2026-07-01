'use client'

import Image from 'next/image'

import { MarketingPlanCards } from '../ui/MarketingPlanCard'

interface MarketingPlanCard {
  title: string
  description: string
  position:
    | 'farLeft'
    | 'left'
    | 'center'
    | 'right'
    | 'farRight'
}

interface MarketingPlanSectionProps {
  data: {
    titleBeforeHighlight: string
    highlightText: string
    titleAfterHighlight: string

    subtitle: string

    ctaText: string
    ctaLink: string

    mainImage: any

    cards: MarketingPlanCard[]
  }
}

export default function MarketingPlanSection({
  data,
}: MarketingPlanSectionProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F6F3]
        py-24
        pb-0
      "
    >
      <div className="mx-auto max-w-7xl px-5">
        {/* Title */}

        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="
              font-black
              leading-[1.05]
              tracking-tight
              text-black
              text-[28px]
              sm:text-[36px]
              md:text-[42px]
            "
          >
            {data.titleBeforeHighlight}{' '}

            <span className="bg-black px-2 text-white">
              {data.highlightText}
            </span>{' '}

            {data.titleAfterHighlight}
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-4xl
              text-sm
              md:text-[19px]
              leading-relaxed
              text-black/80
            "
          >
            {data.subtitle}
          </p>

          <a
            href={data.ctaLink}
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              text-xs
              md:text-[16px]
              font-bold
              text-[#F47F7F]
            "
          >
            {data.ctaText}

            <span>→</span>
          </a>
        </div>

        {/* Illustration */}

        <div
          className="
            relative
            mt-12
            flex
            flex-col
            items-center
            lg:mt-20
            lg:pt-40
          "
        >
          {/* MOBILE CARDS */}

          <div
            className="
              mb-8
              flex
              w-full
              flex-col
              gap-4
              lg:hidden
            "
          >
            {data.cards?.map((card, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Shadow */}

                <div
                  className="
                    absolute
                    inset-0
                    translate-x-1
                    translate-y-1
                    rounded-2xl
                    bg-[#D6D7E2]
                  "
                />

                {/* Card */}

                <div
                  className="
                    relative
                    rounded-2xl
                    border-4
                    border-[#575A83]
                    bg-white
                    px-4
                    py-4
                  "
                >
                  <h3
                    className="
                      text-center
                      text-sm
                      font-black
                      underline
                      text-[#575A83]
                    "
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-relaxed
                      text-black/80
                    "
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP FLOATING CARDS */}

          <MarketingPlanCards cards={data.cards} />

          {/* Folder */}

          <Image
            src="/hero/folder.svg"
            alt="Marketing Plan Folder"
            width={800}
            height={500}
            className="
              relative
              z-10
              w-full
              max-w-[900px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  )
}