'use client'

import Image from 'next/image'
import Link from 'next/link'

import PushButton from '../ui/PushButton'
import SocialIcon from '../ui/SocialIcon'

import { urlFor } from '@/lib/image'

type SanityImage = {
  asset?: {
    _ref: string
    _type: 'reference'
  }
}

interface FooterSectionProps {
  data: {
    title: string

    buttonText: string
    buttonLink: string

    office: {
      illustration: SanityImage
      country: string
      address: string
      phone: string
    }

    contactBox: {
      illustration: SanityImage
      title: string
      subtitle: string
      buttonText: string
      email: string
    }

    socialHeading: string

    socialLinks: {
      platform: string
      url: string
    }[]

    partnerLogos: SanityImage[]

    copyright: string

    termsText: string
    termsLink: string

    privacyText: string
    privacyLink: string

    bottomIllustration: SanityImage
  }
}

export default function FooterSection({
  data,
}: FooterSectionProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#75996F]
        pt-24
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
        "
      >
        {/* ======================== */}
        {/* CTA */}
        {/* ======================== */}

        <div
          className="
            mx-auto
            max-w-5xl
            text-center
          "
        >
          <h2
            className="
              mx-auto
              max-w-5xl

              text-[28px]
              sm:text-[36px]
              md:text-[42px]

              font-black
              leading-[0.95]
              tracking-tight

              text-white
            "
          >
            {data.title}
          </h2>

          <div
            className="
              mt-10
              flex
              justify-center
            "
          >
            <PushButton
              text={data.buttonText}
              href={data.buttonLink}
            />
          </div>
        </div>

        {/* ======================== */}
        {/* Office + Contact */}
        {/* ======================== */}

        <div
          className="
            mt-24

            grid
            gap-8

            lg:grid-cols-[1.2fr_1fr]
          "
        >
          {/* Office */}
                        {/* shadow-[10px_10px_0px_#575A83] */}

          <div
            className="
              rounded-[32px]
              border-4
              border-[#575A83]
              bg-white
              p-8

            "
          >
            {data.office?.illustration?.asset && (
              <Image
                src={urlFor(
                  data.office.illustration
                ).url()}
                alt={data.office.country}
                width={140}
                height={140}
                className="
                  mx-auto
                  h-auto
                  w-24
                "
              />
            )}

            <h3
              className="
                mt-8
                text-center

                text-xl
                font-black

                text-[#575A83]
              "
            >
              {data.office.country}
            </h3>

            <p
              className="
                mt-6

                whitespace-pre-line

                text-center
                text-sm
                leading-relaxed

                text-[#575A83]
              "
            >
              {data.office.address}
            </p>

            <div
              className="
                mt-8
                flex
                justify-center
              "
            >
              <Link
                href={`tel:${data.office.phone}`}
                className="
                  text-xl
                  font-black

                  text-[#F47F7F]

                  transition-opacity

                  hover:opacity-70
                "
              >
                {data.office.phone}
              </Link>
            </div>
          </div>

                    {/* Contact Card */}

          <div
            className="
              rounded-[32px]
              border-4
              border-[#575A83]
              bg-[#F6F5F3]
              p-8

              
            "
          >
            {/* Illustration */}

            {data.contactBox?.illustration?.asset && (
              <Image
                src={urlFor(
                  data.contactBox.illustration
                ).url()}
                alt={data.contactBox.title}
                width={180}
                height={180}
                className="
                  mx-auto
                  h-auto
                  w-16
                "
              />
            )}

            {/* Heading */}

            <h3
              className="
                mt-8
                text-center

                text-xl
                font-black

                text-[#575A83]
              "
            >
              {data.contactBox.title}
            </h3>

            {/* Subtitle */}

            <p
              className="
                mt-3
                text-center

                text-sm

                text-[#575A83]/80
              "
            >
              {data.contactBox.subtitle}
            </p>

            {/* Email Button */}

            <div
              className="
                mt-8
                flex
                justify-center
              "
            >
              <PushButton
                text={data.contactBox.buttonText}
                href={`mailto:${data.contactBox.email}`}
              />
            </div>
          </div>

        </div>

        {/* ====================================== */}
        {/* Social */}
        {/* ====================================== */}

        <div
          className="
            mt-24
            text-center
          "
        >
          <h3
            className="
              text-sm
              font-black
              uppercase
              tracking-[0.3em]

              text-white
            "
          >
            {data.socialHeading}
          </h3>

          <div
            className="
              mt-8

              flex
              flex-wrap
              justify-center
              gap-5
            "
          >
            {data.socialLinks?.map(
              (social) => (
                <SocialIcon
                  key={social.platform}
                  platform={social.platform}
                  url={social.url}
                />
              )
            )}
          </div>
        </div>

        {/* ====================================== */}
        {/* Partner Logos */}
        {/* ====================================== */}

        {data.partnerLogos?.length > 0 && (
          <div
            className="
              mt-20

              flex
              flex-wrap
              items-center
              justify-center
              gap-10
            "
          >
            {data.partnerLogos.map(
              (logo, index) => (
                <Image
                  key={index}
                  src={urlFor(logo).url()}
                  alt={`Partner ${index + 1}`}
                  width={180}
                  height={80}
                  className="
                    h-14
                    w-auto
                    object-contain
                  "
                />
              )
            )}
          </div>
        )}

                {/* ====================================== */}
        {/* Footer Bottom */}
        {/* ====================================== */}

        <div
          className="
            mt-20
            border-t-4
            border-white/20
            py-8

            flex
            flex-col
            items-center
            justify-between
            gap-6

            text-center

            md:flex-row
            md:text-left
          "
        >
          {/* Copyright */}

          <p
            className="
              text-sm
              font-medium
              text-white
            "
          >
            {data.copyright}
          </p>

          {/* Links */}

          <div
            className="
              flex
              items-center
              gap-6

              text-sm
              font-semibold
            "
          >
            <Link
              href={data.termsLink || '#'}
              className="
                text-white
                transition-opacity
                hover:opacity-70
              "
            >
              {data.termsText}
            </Link>

            <Link
              href={data.privacyLink || '#'}
              className="
                text-white
                transition-opacity
                hover:opacity-70
              "
            >
              {data.privacyText}
            </Link>
          </div>
        </div>

      </div>

      {/* ====================================== */}
      {/* Bottom Illustration */}
      {/* ====================================== */}

      {data.bottomIllustration?.asset && (
        <div
          className="
            relative
            mt-8

            h-24
            md:h-32
            lg:h-24

            w-full
          "
        >
          <Image
            src={urlFor(
              data.bottomIllustration
            ).url()}
            alt="Footer Illustration"
            fill
            priority={false}
            className="
              object-cover
              object-bottom
            "
          />
        </div>
      )}
    </section>
  )
}