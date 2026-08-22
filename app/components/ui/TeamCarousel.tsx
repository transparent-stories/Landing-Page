'use client'
import TeamMember from './TeamMember'

type SanityImage = {
  alt?: string

  asset?: {
    _ref: string
    _type: 'reference'
  }
}

interface Member {
  name: string
  designation: string
  image: SanityImage
}

interface Props {
  members: Member[]
  direction: 'left' | 'right'
  duration?: number
}

const rotations = [
  -12,
  8,
  -18,
  5,
  14,
  -7,
  18,
  -4,
  10,
  -15,
  7,
  -9,
]

export default function TeamCarousel({
  members,
  direction,
  duration = 30,
}: Props) {
  const repeat = 6

  const infiniteMembers = Array.from({
    length: repeat,
  }).flatMap(() => members)

  return (
    <div className="py-0">
      {/* Only clip horizontally */}
      <div className="overflow-visible">
        <div
          className={`
            flex
            w-max
            items-center
            gap-12
            py-2
            ${
              direction === 'left'
                ? 'animate-team-left'
                : 'animate-team-right'
            }
            hover:[animation-play-state:paused]
          `}
          style={{
            animationDuration: `${duration}s`,
          }}
        >
          {infiniteMembers.map((member, index) => (
            <TeamMember
              key={`${member.name}-${index}`}
              {...member}
              rotation={
                rotations[
                  index % rotations.length
                ]
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}