'use client'

import Link from 'next/link'

type Props = {
  text?: string
  href?: string
  className?: string
}

export default function PushButton({
  text = 'GET YOUR FREE MARKETING PLAN',
  href = '#',
  className = '',
}: Props) {
  return (
    <Link
      href={href}
      aria-label={text}
      className={`
        group
        relative
        inline-block
        ${className}
      `}
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
          md:px-8
          py-2
          text-center
          text-sm
          md:text-l
          font-black
          uppercase
          tracking-wide
          text-white
          transition-transform
          duration-200
          group-hover:-translate-y-1
        "
      >
        {text}
      </span>
    </Link>
  )
}