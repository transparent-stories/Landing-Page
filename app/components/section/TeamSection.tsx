'use client'
import TeamCarousel from '../ui/TeamCarousel'

type SanityImage = {
  alt?: string

  asset?: {
    _ref: string
    _type: 'reference'
  }
}

type Member = {
  name: string
  designation: string
  row: 'row1' | 'row2'
  image: SanityImage
}

interface Props {
  data: {
    titleBeforeHighlight: string
    highlightText: string
    titleAfterHighlight: string

    subtitle: string

    members: Member[]
  }
}

export default function TeamSection({
  data,
}: Props) {
  const row1 =
    data.members?.filter(
      (member) => member.row === 'row1'
    ) || []

  const row2 =
    data.members?.filter(
      (member) => member.row === 'row2'
    ) || []

  return (
    <section
      className="
        overflow-hidden
        bg-[#F7F6F3]
        py-24
      "
      id='team'
    >
      <div className=" max-w-full">
        {/* Heading */}

        <div className="mx-auto max-w-5xl text-center">
          <h2
            className="
            text-black
              text-[28px]
              font-black
              leading-[1.05]
              tracking-tight

              md:text-[42px]
            "
          >
            {data.titleBeforeHighlight}{' '}

            <span className="bg-black px-2 text-white">
              {data.highlightText}
            </span>{' '}

            {data.titleAfterHighlight}
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-4xl
              text-sm
              leading-relaxed
              text-black/80

              md:text-[19px]
            "
          >
            {data.subtitle}
          </p>
        </div>

        {/* Carousels */}

        <div className="mt-20 space-y-8">
          <TeamCarousel
            members={row1}
            direction="left"
            duration={50}
          />

          <TeamCarousel
            members={row2}
            direction="right"
            duration={45}
          />
        </div>
      </div>
    </section>
  )
}