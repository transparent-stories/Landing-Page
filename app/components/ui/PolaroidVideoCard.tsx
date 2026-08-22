'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

import { urlFor } from '@/lib/image'
import PlayPauseButton from './PlayPauseButton'

type SanityImage = {
  alt?: string
  asset?: {
    _ref: string
    _type: 'reference'
  }
}

interface PolaroidVideoCardProps {
  caption: string
  thumbnail: SanityImage
  videoUrl: string

  rotation: number

  isPlaying: boolean

  onPlay: () => void
  onPause: () => void
}

export default function PolaroidVideoCard({
  caption,
  thumbnail,
  videoUrl,
  rotation,
  isPlaying,
  onPlay,
  onPause,
}: PolaroidVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    if (isPlaying) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [isPlaying])

  return (
    <div
      className="
        shrink-0
        snap-center
      "
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div
        className="
          group
          transition-all
          duration-300
          hover:-translate-y-2
        "
      >
        {/* Polaroid */}

        <div
          className="
            relative
            overflow-hidden
            rounded-none
            border-0
            border-[#575A83]
            bg-white
            p-3
            shadow-[0px_1px_4px_rgba(0,0,0,0.16)]
            transition-all
            duration-300

            group-hover:shadow-[0px_1px_4px_rgba(0,0,0,0.16)]
          "
        >
          <div
            className="
              relative
              aspect-[9/16]
              w-[180px]

              overflow-hidden
              rounded-none

              md:w-[210px]
            "
          >
            {/* Video */}

            <video
              ref={videoRef}
              src={videoUrl}
              preload="metadata"
              playsInline
              controls={false}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
              onClick={() => {
                if (isPlaying) {
                  onPause()
                } else {
                  onPlay()
                }
              }}
              onEnded={onPause}
            />

            {/* Thumbnail */}

            {thumbnail?.asset && (
              <Image
                src={urlFor(thumbnail).url()}
                alt={caption}
                fill
                className={`
                  absolute
                  inset-0
                  object-cover
                  transition-all
                  duration-500

                  ${
                    isPlaying
                      ? 'pointer-events-none opacity-0 scale-105'
                      : 'opacity-100'
                  }
                `}
              />
            )}

            {/* Dark Overlay */}

            <div
              className={`
                absolute
                inset-0
                bg-black/20
                transition-opacity
                duration-300

                ${
                  isPlaying
                    ? 'opacity-0'
                    : 'opacity-100'
                }
              `}
            />

            {/* Play / Pause */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >
              <PlayPauseButton
                playing={isPlaying}
                onClick={() => {
                  if (isPlaying) {
                    onPause()
                  } else {
                    onPlay()
                  }
                }}
              />
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}