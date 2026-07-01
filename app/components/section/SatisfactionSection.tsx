'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/image'
import DottedArrow from '../ui/DottedArrow'

type SanityImageAsset = {
  _ref: string
  _type: 'reference'
}

interface SatisfactionSectionProps {
  data: {
    mainImage: {
      alt?: string
      asset: SanityImageAsset
    }

    remarkText: string
  }
}

export default function SatisfactionSection({
  data,
}: SatisfactionSectionProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        md:py-28
      "
      aria-label="Satisfaction graph section"
    >
      {/* Decorative circle */}
      <div
        className="
          absolute
          -bottom-20
          -right-20
          h-48
          w-48
          rounded-full
          bg-[#4CC7F4]
          opacity-80
        "
      />

      <div className="mx-auto max-w-7xl px-5">

        {/* Wrapper */}
        <div
          className="
            relative
            flex
            flex-col
            items-center
            justify-center
          "
        >

          {/* Main Graph Image */}
          <div
            className="
              relative
              w-full
              max-w-6xl
            "
          >
            {data?.mainImage && (
              <Image
                src={urlFor(data.mainImage).url()}
                alt={
                  data?.mainImage?.alt ||
                  'Satisfaction graph illustration'
                }
                width={800}
                height={800}
                priority
                className="
                  h-auto
                  w-100%
                  object-contain
                  mx-auto
                "
              />
            )}

            {/* Remark Text */}
            <div
              className="
                absolute
                right-[-2%]
                top-[10%]
                hidden
                max-w-[320px]
                md:block
              "
            >
              <div
                className="
                  relative
                  font-black
                  leading-tight
                  text-black
                  text-[20px]
                "
                style={{
                  fontFamily:
                    'Comic Sans MS, Marker Felt, cursive',
                }}
              >
                {data?.remarkText}

                {/* Arrow */}
                {/* <div
                  className="
                    absolute
                    left-0
                    top-full
                    mt-3
                  "
                >
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-15"
                  >
                    <path
                      d="M10 10C10 40 30 55 55 55"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="7 7"
                    />

                    <path
                      d="M45 48L57 56L45 63"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div> */}
                <DottedArrow className='absolute right-full top-[60%] w-30 scale-x-[-1]'/>
              </div>
            </div>
          </div>

          {/* Mobile Remark */}
          <div
            className="
              mt-8
              max-w-sm
              text-center
              md:hidden
            "
          >
            <p
              className="
                text-2xl
                font-black
                leading-snug
                text-black
              "
              style={{
                fontFamily:
                  'Comic Sans MS, Marker Felt, cursive',
              }}
            >
              {data?.remarkText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}