'use client'

interface PlayPauseButtonProps {
  playing: boolean
  onClick: () => void
}

export default function PlayPauseButton({
  playing,
  onClick,
}: PlayPauseButtonProps) {
  return (
    <button
      type="button"
      aria-label={playing ? 'Pause video' : 'Play video'}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      className="
        group
        flex
        h-18
        w-18
        items-center
        justify-center

        rounded-full
        border-0
        border-[#575A83]
        bg-white

        opacity-20

        transition-all
        duration-300

        hover:-translate-y-1
        hover:opacity-100

        active:translate-y-0
        active:opacity-100
      "
    >
      {playing ? (
        <div className="flex gap-1">
          <span className="h-7 w-2 rounded-full bg-[#575A83]" />
          <span className="h-7 w-2 rounded-full bg-[#575A83]" />
        </div>
      ) : (
        <div
          className="
            ml-1
            h-0
            w-0

            border-y-[14px]
            border-y-transparent
            border-l-[22px]
            border-l-[#575A83]

            transition-transform
            duration-300

            group-hover:scale-110
          "
        />
      )}
    </button>
  )
}