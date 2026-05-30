interface OpportunityCardProps {
  title: string
  revenueGain: string

  position:
    | 'topLeft'
    | 'bottomLeft'
    | 'topRight'
    | 'bottomRight'

  visible: boolean
  delay?: number
}

export default function OpportunityCard({
  title,
  revenueGain,
  position,
  visible,
  delay = 1,
}: OpportunityCardProps) {
  const positions = {
    topLeft: {
      left: '-5%',
      top: '15%',
    },

    bottomLeft: {
      left: '-5%',
      bottom: '20%',
    },

    topRight: {
      right: '-5%',
      top: '20%',
    },

    bottomRight: {
      right: '-5%',
      bottom: '0%',
    },
  }

  return (
    <div
      className={`
        md:absolute
        z-20
        mx-4
        my-6
        md:m-0
        transition-all
        duration-1000
        ease-out

        ${
          visible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-12 opacity-0'
        }
      `}
      style={{
        ...positions[position],
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Shadow */}
      <div
        className="
          absolute
          inset-0
          translate-x-2
          translate-y-2
          rounded-xl
          md:rounded-3xl
          bg-[#575A83]
        "
      />

      {/* Card */}
      <div
        className="
          relative
          flex
          min-w-75
          items-center
          gap-4
          rounded-xl
          md:rounded-3xl
          border-4
          border-[#575A83]
          bg-white
          px-5
          py-4
        "
      >
        {/* Icon */}
        <div
          className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-full
            border-4
            border-[#575A83]
            bg-[#F47F7F]
            text-2xl
            font-black
            text-white
          "
        >
          !
        </div>

        {/* Content */}
        <div>
          <p
            className="
              text-lg
              font-black
              text-[#575A83]
            "
          >
            {title}
          </p>

          <p
            className="
              text-lg
              font-semibold
              text-black
            "
          >
            {revenueGain}
          </p>

          <p
            className="
              text-sm
              text-black/70
            "
          >
            Revenue Gain
          </p>
        </div>
      </div>
    </div>
  )
}