'use client'

interface OptionChipProps {
  label: string
  selected: boolean
  onClick: () => void
}

export default function OptionChip({
  label,
  selected,
  onClick,
}: OptionChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`
        relative
        w-full
        rounded-xl
        border-4
        px-5
        py-4
        text-center
        text-[10px]
        font-bold
        transition-all
        duration-200

        md:text-sm

        ${
          selected
            ? `
              border-[#575A83]
              bg-[#F47F7F]
              text-white
              shadow-[6px_6px_0px_#575A83]
              -translate-y-1
            `
            : `
              border-[#575A83]
              bg-white
              text-[#575A83]
              hover:bg-[#FFF6F6]
              hover:-translate-y-1
              hover:shadow-[6px_6px_0px_#575A83]
            `
        }
      `}
    >
      {label}
    </button>
  )
}