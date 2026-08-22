'use client'

import Link from 'next/link'

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaDribbble,
  FaXTwitter,
  FaTiktok,
} from 'react-icons/fa6'

interface SocialIconProps {
  platform: string
  url: string
}

export default function SocialIcon({
  platform,
  url,
}: SocialIconProps) {
  const icons = {
    Instagram: FaInstagram,
    LinkedIn: FaLinkedinIn,
    Facebook: FaFacebookF,
    YouTube: FaYoutube,
    Dribbble: FaDribbble,
    X: FaXTwitter,
    TikTok: FaTiktok,
  }

  const Icon =
    icons[
      platform as keyof typeof icons
    ]

  if (!Icon) return null

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platform}
      className="
        group
        relative
        inline-block
      "
    >
      {/* Shadow */}

      <span
        className="
          absolute
          inset-0
          translate-x-1.5
          translate-y-1.5
          rounded-full
          bg-[#575A83]
          transition-all
          duration-200
          group-hover:translate-x-2
          group-hover:translate-y-2
        "
      />

      {/* Button */}

      <span
        className="
          relative
          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-full
          border-4
          border-[#575A83]
          bg-white

          text-[#575A83]
          text-xl

          transition-transform
          duration-200

          group-hover:-translate-y-1
        "
      >
        <Icon />
      </span>
    </Link>
  )
}