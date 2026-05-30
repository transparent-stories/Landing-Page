'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/image'

interface KPIVsTimeSectionProps {
  data: {
    title: string
    highlightText: string
    title_2: string
    subtitle: string

    graphImage: {
      alt?: string
      asset: any
    }

    infoCards: {
      title: string
      description: string
    }[]
  }
}

export default function KPIVsTimeSection({
  data,
}: KPIVsTimeSectionProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F6F5F3]
        py-20
        md:py-28
      "
      aria-label="KPI versus time section"
    >
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}
        <div className="mx-auto max-w-6xl text-center">

          {/* Small handwritten note */}
          <div
            className="
              absolute
              left-[5%]
              top-[5%]
              hidden
              rotate-[-5deg]
              md:block
            "
          >
            <p
              className="
                max-w-55
                text-[24px]
                font-black
                leading-tight
                text-black
              "
              style={{
                fontFamily:
                  'Comic Sans MS, Marker Felt, cursive',
              }}
            >
              This is our 1st most important differentiator
            </p>

            {/* Arrow */}
            <svg
              width="80"
              height="60"
              viewBox="0 0 80 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-16 mt-2"
            >
              <path
                d="M5 5C15 35 45 45 70 45"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="7 7"
              />

              <path
                d="M60 35L72 45L57 50"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Main Title */}
          <h2
            className="
              mx-auto
              max-w-6xl
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
            {data?.title}

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

            <span>{data?.title_2}</span>
          </h2>

          {/* Subtitle */}
          <p
            className="
              mx-auto
              mt-8
              max-w-5xl
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

        {/* Main Layout */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[1.7fr_0.7fr]
            items-start
          "
        >

          {/* Graph */}
          <div
            className="
              relative
              rounded-[26px]
              border-[6px]
              border-[#575A83]
              bg-white
              p-3
              shadow-[10px_10px_0px_#D9D9D9]
            "
          >
            {data?.graphImage && (
              <Image
                src={urlFor(data.graphImage).url()}
                alt={
                  data?.graphImage?.alt ||
                  'KPI versus time graph'
                }
                width={1600}
                height={1000}
                priority
                className="
                  h-auto
                  w-full
                  rounded-2xl
                  object-cover
                "
              />
            )}
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6">

            {data?.infoCards?.map((card, index) => (
              <div
                key={index}
                className="
                  rounded-3xl
                  border-[5px]
                  border-[#575A83]
                  bg-white
                  px-4
                  py-6
                  shadow-[10px_10px_0px_#D9D9D9]
                "
              >
                <h3
                  className="
                    text-center
                    text-[24px]
                    md:text-[20px]
                    font-black
                    leading-tight
                    text-black
                  "
                >
                  {card?.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-center
                    text-black/85
                    text-base
                    md:text-[14px]
                    leading-relaxed
                    font-medium
                  "
                >
                  {card?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}