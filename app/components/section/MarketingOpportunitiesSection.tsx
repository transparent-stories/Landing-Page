'use client'

import Image from 'next/image'

import { useInView } from '@/hooks/useInView'
import OpportunityCard from '@/app/components/ui/OpportunityCard'
import PushButton from '@/app/components/ui/PushButton'
import { urlFor } from '@/lib/image'

interface OpportunityCardItem {
  title: string
  revenueGain: string
  position:
    | 'topLeft'
    | 'bottomLeft'
    | 'topRight'
    | 'bottomRight'
}

type SanityImage = {
  _type?: 'image'
  alt?: string
  asset: {
    _ref: string
    _type: 'reference'
  }
}

interface MarketingOpportunitiesSectionData {
  titleBeforeHighlight?: string
  highlightText?: string
  titleAfterHighlight?: string

  subtitle?: string

  ctaText?: string
  ctaLink?: string

  mainImage?: SanityImage

  cards?: OpportunityCardItem[]
}

interface Props {
  data: MarketingOpportunitiesSectionData
}

export default function MarketingOpportunitiesSection({
  data,
}: Props) {
  const { ref, isVisible } = useInView()

  if (!data) return null;

  return (
    <section
      ref={ref}
      className="
        overflow-hidden
        bg-white
        py-20
        md:py-28
      "
    >
      <div className="mx-auto max-w-7xl px-4">

        {/* ========================= */}
        {/* HEADING */}
        {/* ========================= */}

        <div className="mx-auto max-w-5xl text-center">
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

          {data.subtitle && (
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
          )}
        </div>

        {/* ========================= */}
        {/* ILLUSTRATION AREA */}
        {/* ========================= */}

        <div
          className="
            relative
            mx-auto
            mt-16
            max-w-5xl
          "
        >
          {/* Dotted Arrows */}

          <Image
            src="/marketing-opportunities/arrowweb.svg"
            alt=""
            width={500}
            height={500}
            aria-hidden="true"
            className={`
              pointer-events-none
              absolute
              inset-0
              z-30
              h-full
              w-full
              hidden
              md:block
              transition-all
              duration-1000

              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }
            `}
          />

          {/* Main Image */}

          {data.mainImage && (
            <div
              className={`
                relative
                z-20
                rounded-2xl
                overflow-clip
                transition-all
                duration-0
                ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }
              `}
            >
              <Image
                src={urlFor(data.mainImage).url()}
                alt={
                  data.mainImage?.alt ||
                  'Marketing opportunities'
                }
                width={1600}
                height={900}
                className="
                  h-auto
                  w-full
                  object-contain
                  opacity-80
                "
              />
            </div>
          )}

          {/* Kite */}

          <Image
            src="/marketing-opportunities/kite.svg"
            alt=""
            width={500}
            height={500}
            aria-hidden="true"
            className={`
              absolute
              right-[5%]
              top-[-10%]
              z-30
              hidden
              w-44
              lg:block

              transition-all
              duration-1000
              delay-300

              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-14 opacity-0'
              }
            `}
          />

          {/* Floating Cards */}

          {data.cards?.map(
            (
              card: OpportunityCardItem,
              index: number
            ) => (
              <OpportunityCard
                key={index}
                title={card.title}
                revenueGain={card.revenueGain}
                position={card.position}
                visible={isVisible}
                delay={index * 150}
              />
            )
          )}
        </div>

        {/* ========================= */}
        {/* CTA */}
        {/* ========================= */}

        {(data.ctaText || data.ctaLink) && (
          <div className="mt-16 flex justify-center">
            <PushButton
              text={
                data.ctaText ||
                'GET YOUR FREE MARKETING PLAN'
              }
              href={data.ctaLink || '#'}
            />
          </div>
        )}
      </div>
    </section>
  )
}