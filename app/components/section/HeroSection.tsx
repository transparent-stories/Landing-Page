'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import DottedArrow from '../ui/DottedArrow'
import Cloud from '../ui/Cloud'

interface HeroSectionProps {
  data: {
    title: string
    flippingTitles: string[]
    subtitle: string
    ctaText: string
    ctaLink: string
  }
}

export default function HeroSection({ data }: HeroSectionProps) {
  const [activeTitle, setActiveTitle] = useState(0)

  useEffect(() => {
    if (!data?.flippingTitles?.length) return

    const interval = setInterval(() => {
      setActiveTitle((prev) =>
        prev === data.flippingTitles.length - 1 ? 0 : prev + 1
      )
    }, 2500)

    return () => clearInterval(interval)
  }, [data?.flippingTitles])

  return (
    <section
      className="
        relative
        bg-[#10A2D4]
        pt-36
        md:pt-24
      "
      aria-label="Hero Section"
    >
      {/* Clouds */}
      <div className="absolute left-[4%] top-[18%] hidden md:block">
        <Cloud />
      </div>

      <div className="absolute right-[8%] top-[30%] hidden md:block">
        <Cloud />
      </div>

      <div className="absolute left-3 top-5 md:hidden scale-75">
        <Cloud />
      </div>

      <div className="absolute right-4 top-8 md:hidden scale-75">
        <Cloud />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5">

        {/* Content */}
        <div className="mx-auto max-w-5xl text-center">

          {/* SEO H1 */}
          <h1
            className="
              mx-auto
              max-w-5xl
              font-black
              titlecase
              tracking-tight
              text-white
              leading-[0.95]
              text-[28px]
              sm:text-[36px]
              md:text-[42px]
            "
          >
            {data?.title}

            <span
              className="
                relative
                mt-2
                inline-flex
                min-h-[1.2em]
                items-center
                justify-center
                bg-[#5A5C86]
                px-2
                md:px-4
                py-1
                ml-0
                md:ml-3
              "
            >
              <span
                key={activeTitle}
                className="
                  animate-flipText
                  inline-block
                "
              >
                {data?.flippingTitles?.[activeTitle]}
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-center
              text-white
              text-sm
              md:text-[19px]
              leading-relaxed
              font-medium
            "
          >
            {data?.subtitle}
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Link
              href={data?.ctaLink || '#'}
              className="group relative inline-block"
              aria-label={data?.ctaText}
            >
              {/* Shadow */}
              <span
                className="
                  absolute
                  inset-0
                  translate-x-2
                  translate-y-2
                  rounded-xl
                  bg-[#575A83]
                  transition-all
                  duration-200
                  group-hover:translate-x-2.5
                  group-hover:translate-y-2.5
                "
              />

              {/* Main Button */}
              <span
                className="
                  relative
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border-4
                  border-[#575A83]
                  bg-[#F47F7F]
                  px-8
                  md:px-12
                  py-4
                  text-center
                  text-sm
                  md:text-xl
                  font-black
                  uppercase
                  tracking-wide
                  text-white
                  transition-transform
                  duration-200
                  group-hover:-translate-y-1
                "
              >
                {data?.ctaText}
              </span>
            </Link>
          </div>
        </div>

        {/* Folder Illustration */}
        <div
          className="
            relative
            mt-0
            md:mt-20
            flex
            justify-center
          "
        >
          {/* Floating Labels */}
          <FloatingLabels />

          <img
            src="/hero/folder.svg"
            alt="Marketing performance folder illustration"
            className="
              relative
              mt-20
              z-1
              w-full
              lg:max-w-325
              object-contain
            "
          />
        </div>
      </div>

      {/* Zig Zag Bottom Divider */}
      
    </section>
  )
}

/* --------------------------- */
/* Floating Labels Component   */
/* --------------------------- */

function FloatingLabels() {
  const labels = [
    {
      text: 'Customer Success Data',
      className: 'left-[14%] top-[2%]',
      arrowClassName: 'absolute right-[-50%] top-[30%] w-[130px]'
    },
    {
      text: 'Competitor Data',
      className: 'right-[12%] top-[8%]',
      arrowClassName: 'absolute right-[30%] top-[60%] w-[120px] scale-x-[-1]'
    },
    {
      text: 'Marketing Data',
      className: 'left-[2%] top-[28%]',
      arrowClassName: 'absolute right-[-70%] top-[30%] w-[130px]'
    },
    {
      text: 'Market Data',
      className: 'right-[0%] top-[35%]',
      arrowClassName: 'absolute right-[100%] top-[60%] w-[120px] scale-x-[-1]'
    },
    {
      text: 'Financial Data',
      className: 'left-[0%] top-[62%]',
      arrowClassName: 'absolute right-[-70%] top-[30%] w-[130px]'
    },
  ]

  return (
    <>
      {labels.map((label, index) => (
        <div
          key={index}
          className={`
            absolute
            hidden
            z-10
            md:block
            ${label.className}
          `}
        >
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                translate-x-1.5
                translate-y-1.5
                rounded-full
                bg-[#3CA9D8]
              "
            />

            <div
              className="
                relative
                rounded-full
                border-4
                border-[#575A83]
                bg-white
                px-6
                py-3
                text-sm
                font-black
                text-[#575A83]
              "
            >
              {label.text}
            </div>
          </div>

          <DottedArrow
            className={`${label.arrowClassName}`}
            />
        </div>
      ))}
    </>
  )
}
