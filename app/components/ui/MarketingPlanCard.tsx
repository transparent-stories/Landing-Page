import Image from 'next/image'

import type { MarketingPlanCard } from '../../types/marketingPlan'
import { urlFor } from '@/lib/image'

interface Props {
  cards: MarketingPlanCard[]
}

export function MarketingPlanCards({
  cards,
}: Props) {
  const layout: Record<
    MarketingPlanCard['position'],
    {
      card: string
      arrow: {
        width: number
        height: number
        className: string
      }
    }
  > = {
    farLeft: {
      card: 'left-[0%] top-[5%]',
      arrow: {
        width: 70,
        height: 70,
        className:
          'left-[70%] top-full mt-2',
      },
    },

    left: {
      card: 'left-[20%] top-[0%]',
      arrow: {
        width: 50,
        height: 50,
        className:
          'left-[60%] top-full mt-2',
      },
    },

    center: {
      card: 'left-1/2 top-[-2%] -translate-x-1/2',
      arrow: {
        width: 70,
        height: 70,
        className:
          'left-1/2 top-full mt-2 -translate-x-1/2',
      },
    },

    right: {
      card: 'right-[20%] top-[0%]',
      arrow: {
        width: 60,
        height: 60,
        className:
          'right-[60%] top-full mt-2',
      },
    },

    farRight: {
      card: 'right-[0%] top-[5%]',
      arrow: {
        width: 70,
        height: 70,
        className:
          'right-[70%] top-full mt-2',
      },
    },
  }

  return (
    <>
      {cards?.map((card, index) => {
        const config = layout[card.position]

        return (
          <div
            key={index}
            className={`
              absolute
              hidden
              lg:block
              z-20
              ${config.card}
            `}
          >
            <div className="relative">
              {/* Shadow */}

              <div
                className="
                  absolute
                  inset-0
                  translate-x-1
                  translate-y-1
                  rounded-2xl
                  bg-[#D6D7E2]
                "
              />

              {/* Card */}

              <div
                className="
                  relative
                  w-60
                  rounded-2xl
                  border-4
                  border-[#575A83]
                  bg-white
                  px-4
                  py-4
                "
              >
                <h3
                  className="
                    text-center
                    text-sm
                    font-black
                    underline
                    text-[#575A83]
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-xs
                    leading-relaxed
                    text-black/80
                  "
                >
                  {card.description}
                </p>
              </div>

              {/* Arrow - Hidden automatically on mobile because parent is hidden */}

              {card.arrowImage?.asset?._ref && (
                <Image
                  src={urlFor(card.arrowImage).url()}
                  alt={card.arrowImage.alt || ''}
                  width={config.arrow.width}
                  height={config.arrow.height}
                  className={`
                    pointer-events-none
                    absolute
                    z-10
                    object-contain
                    ${config.arrow.className}
                  `}
                />
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}