type Props = {
  className?: string
}

export default function DottedArrow({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 10 C 80 10, 120 90, 190 90"
        stroke="#575A83"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="8 10"
      />

      {/* Arrow head */}
      <path
        d="M175 75 L190 90 L172 95"
        fill="none"
        stroke="#575A83"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}