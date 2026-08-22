'use client'

import { useState } from 'react'
import Image from 'next/image'

import { urlFor } from '@/lib/image'

import PolaroidVideoCard from '../ui/PolaroidVideoCard'

type SanityImage = {
  alt?: string
  asset?: {
    _ref: string
    _type: 'reference'
  }
}

interface PerformanceCreativeSectionProps {
  data: {
    title: string
    highlightText: string
    title2: string
    subtitle: string

    leftIllustration?: SanityImage
    rightIllustration?: SanityImage

    videos: {
      caption: string
      thumbnail: SanityImage
      videoUrl: string
    }[]
  }
}

const rotations = [-5, 3, -2, 4, -4]

export default function PerformanceCreativeSection({
  data,
}: PerformanceCreativeSectionProps) {
  const [playingIndex, setPlayingIndex] =
    useState<number | null>(null)

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F6F5F3]
        py-20
        pb-0
        py-b-10
        md:py-28
      "
    >
      <div className="relative mx-auto max-w-7xl px-5">

        {/* Left Illustration */}

        {data.leftIllustration?.asset && (
          <Image
            src={urlFor(
              data.leftIllustration
            ).url()}
            alt=""
            aria-hidden="true"
            width={150}
            height={150}
            className="
              absolute
              left-0
              top-50
              hidden
              w-30
              lg:block
              z-40
            "
          />
        )}

        {/* Right Illustration */}

        {data.rightIllustration?.asset && (
          <Image
            src={urlFor(
              data.rightIllustration
            ).url()}
            alt=""
            aria-hidden="true"
            width={250}
            height={250}
            className="
              absolute
              bottom-0
              right-0
              hidden
              w-36
              lg:block
              z-40
            "
          />
        )}

        {/* Heading */}

        <div className="mx-auto max-w-5xl text-center">

          <h2
            className="
              text-[28px]
              sm:text-[36px]
              md:text-[42px]
              font-black
              leading-[1.05]
              tracking-tight
              text-black
            "
          >
            {data.title}
            <span
              className="
                inline-block
                bg-black
                px-3
                py-1
                text-white
              "
            >
                {data.highlightText}
            </span>{' '}

            <br />

            {data.title2}
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-base
              leading-relaxed
              text-black/80

              md:text-[19px]
            "
          >
            {data.subtitle}
          </p>

        </div>

        {/* Videos */}

        <div
          className="
            mt-20
            flex
            gap-0
            overflow-x-scroll
            md:overflow-x-visible
            pb-8

            snap-x
            snap-mandatory

            [-ms-overflow-style:none]
            md:[scrollbar-width:none]

            md:[&::-webkit-scrollbar]:hidden

            lg:justify-center
          "
        >
          {data.videos?.map(
            (video, index) => (
                <div key={index} className='flex flex-col'>
                    <PolaroidVideoCard
                    key={index}
                    caption={video.caption}
                    thumbnail={video.thumbnail}
                    videoUrl={video.videoUrl}
                    rotation={
                    rotations[
                        index %
                        rotations.length
                    ]
                    }
                    isPlaying={
                    playingIndex === index
                    }
                    onPlay={() =>
                    setPlayingIndex(index)
                    }
                    onPause={() =>
                    setPlayingIndex(null)
                    }
                />
                {/* Caption */}

                <div
                    className="
                    pt-4
                    pb-2
                    text-center
                    "
                >
                    <p
                    className="
                        relative
                        font-
                        italic
                        leading-tight
                        text-black
                        text-[14px]
                        "
                        style={{
                        transform: `rotate(${rotations[index %rotations.length]}deg)`,
                        fontFamily:
                            'Comic Sans MS, Marker Felt, cursive',
                        }}
                    >
                    {video.caption}
                    </p>
                </div>
                </div>
            )
          )}
        </div>

      </div>
    </section>
  )
}