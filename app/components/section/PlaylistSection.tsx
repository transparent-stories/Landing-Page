'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { urlFor } from '@/lib/image'

interface PlaylistAudio {
  title?: string
  description?: string
  audioUrl?: string
}

interface PlaylistSectionData {
  titleBeforeHighlight?: string
  highlightText?: string
  titleAfterHighlight?: string

  subtitle?: string
  remarkText?: string

  mainImage?: {
    alt?: string
    asset?: {
      _ref?: string
    }
  }

  audios?: PlaylistAudio[]
}

interface PlaylistSectionProps {
  data: PlaylistSectionData
}

export default function PlaylistSection({
  data,
}: PlaylistSectionProps) {
  const [activeAudio, setActiveAudio] =
    useState<number | null>(null)

  const [progress, setProgress] = useState<number[]>([])

  const audioRefs = useRef<(HTMLAudioElement | null)[]>([])

  const toggleAudio = (index: number) => {
    const currentAudio = audioRefs.current[index]

    if (!currentAudio) return

    // Pause all others
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) {
        audio.pause()
      }
    })

    // Toggle current
    if (activeAudio === index) {
      currentAudio.pause()
      setActiveAudio(null)
    } else {
      currentAudio.play().catch(console.error)
      setActiveAudio(index)
    }
  }

  const updateProgress = (index: number) => {
    const audio = audioRefs.current[index]

    if (!audio) return

    const percentage =
      (audio.currentTime / audio.duration) * 100

    setProgress((prev) => {
      const updated = [...prev]
      updated[index] = percentage || 0
      return updated
    })
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F6F5F3]
        py-20
        md:py-28
      "
      aria-label="Marketing innovation playlist section"
    >
      <div className="mx-auto max-w-7xl px-5">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="relative mx-auto max-w-6xl text-center">

          {/* Handwritten Note */}
          <div
            className="
              absolute
              right-[-15%]
              -top-20
              hidden
              rotate-[-4deg]
              md:block
            "
          >
            <p
              className="
                max-w-65
                text-left
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
              {data?.remarkText}
            </p>

            {/* Arrow */}
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2"
            >
              <path
                d="M60 10C55 40 35 50 15 55"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="7 7"
              />

              <path
                d="M25 45L13 56L28 60"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* TITLE */}
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
            {data?.titleBeforeHighlight}

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

            {data?.titleAfterHighlight}
          </h2>

          {/* SUBTITLE */}
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

        {/* ========================= */}
        {/* MAIN WRAPPER */}
        {/* ========================= */}

        <div
          className="
            mt-16
            rounded-[28px]
            border
            border-black/5
            bg-white/70
            px-5
            py-6
            shadow-[0_10px_30px_rgba(0,0,0,0.05)]
            md:px-10
            md:py-10
          "
        >

          <div
            className="
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-[1fr_0.95fr]
              items-start
            "
          >

            {/* ========================= */}
            {/* LEFT IMAGE */}
            {/* ========================= */}

            <div className="relative">

              {data?.mainImage && (
                <Image
                  src={urlFor(data.mainImage).url()}
                  alt={
                    data?.mainImage?.alt ||
                    'Marketing innovation playlist'
                  }
                  width={1200}
                  height={1200}
                  className="
                    h-auto
                    w-full
                    rounded-xl
                    object-cover
                  "
                />
              )}
            </div>

            {/* ========================= */}
            {/* AUDIO CARDS */}
            {/* ========================= */}

            <div className="flex flex-col gap-5">

              {data?.audios?.map(
                (audio: PlaylistAudio, index: number) => (
                  <div
                    key={index}
                    className="
                      rounded-[18px]
                      bg-[#F5F5F5]
                      p-5
                      shadow-[0_4px_10px_rgba(0,0,0,0.06)]
                    "
                  >

                    {/* AUDIO TITLE */}
                    <h3
                      className="
                        text-[24px]
                        md:text-[20px]
                        font-black
                        leading-tight
                        text-black
                      "
                    >
                      {audio?.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-3
                        line-clamp-2
                        text-base
                        md:text-[14px]
                        leading-relaxed
                        text-black/80
                      "
                    >
                      {audio?.description}
                    </p>

                    {/* PLAYER */}
                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        gap-4
                      "
                    >

                      {/* PLAY BUTTON */}
                      <button
                        onClick={() => toggleAudio(index)}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-black
                          text-white
                          transition-transform
                          hover:scale-105
                        "
                        aria-label="Play audio"
                      >
                        {activeAudio === index ? (
                          <div className="flex gap-1">
                            <span className="h-4 w-1 bg-white" />
                            <span className="h-4 w-1 bg-white" />
                          </div>
                        ) : (
                          <div
                            className="
                              ml-1
                              h-0
                              w-0
                              border-b-8
                              border-l-14
                              border-t-8
                              border-b-transparent
                              border-l-white
                              border-t-transparent
                            "
                          />
                        )}
                      </button>

                      {/* PROGRESS BAR */}
                      <div
                        className="
                          relative
                          h-1.25
                          flex-1
                          overflow-hidden
                          rounded-full
                          bg-[#C9CDD3]
                        "
                      >
                        <div
                          className="
                            absolute
                            left-0
                            top-0
                            h-full
                            rounded-full
                            bg-black
                            transition-all
                            duration-150
                          "
                          style={{
                            width: `${progress[index] || 0}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* HIDDEN AUDIO */}
                    {audio?.audioUrl && (
                      <audio
                        ref={(
                          el: HTMLAudioElement | null
                        ) => {
                          audioRefs.current[index] = el
                        }}
                        src={audio.audioUrl}
                        preload="metadata"
                        onTimeUpdate={() =>
                          updateProgress(index)
                        }
                        onEnded={() => {
                          setActiveAudio(null)

                          setProgress((prev) => {
                            const updated = [...prev]
                            updated[index] = 0
                            return updated
                          })
                        }}
                      />
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}