'use client'

import Image from 'next/image'

import { urlFor } from '@/lib/image'

type SanityImage = {
  alt?: string

  asset?: {
    _ref: string
    _type: 'reference'
  }
}

interface TeamMemberProps {
  name: string
  designation: string
  image: SanityImage

  rotation: number
}

export default function TeamMember({
  name,
  designation,
  image,
  rotation,
}: TeamMemberProps) {
  return (
    <div
      className="
        group
        relative
        z-10
        flex
        shrink-0
        items-center
        justify-center
        hover:z-[999]
      "
    >
      {/* Tooltip */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-full
          left-1/2
          z-[999]
          mb-5
          w-max
          -translate-x-1/2
          rounded-xl
          bg-[#575A83]
          px-4
          py-3
          text-center
          text-white
          opacity-0
          shadow-2xl
          transition-all
          duration-300
          group-hover:-translate-y-2
          group-hover:opacity-100
        "
      >
        <p className="text-sm font-black">
          {name}
        </p>

        <p className="mt-1 text-xs opacity-90">
          {designation}
        </p>
      </div>

      {/* Rotate ONLY the image */}

      <div
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <Image
          src={urlFor(image).url()}
          alt={image?.alt || name}
          width={170}
          height={170}
          className="
            h-32
            w-auto
            object-contain
            drop-shadow-xl
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:drop-shadow-2xl
            md:h-40
          "
        />
      </div>
    </div>
  )
}