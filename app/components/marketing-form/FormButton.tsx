'use client'

interface FormButtonProps {
  children: React.ReactNode

  type?: 'button' | 'submit'

  variant?: 'primary' | 'secondary'

  disabled?: boolean

  loading?: boolean

  onClick?: () => void

  className?: string
}

export default function FormButton({
  children,
  type = 'button',
  variant = 'primary',
  disabled = false,
  loading = false,
  onClick,
  className = '',
}: FormButtonProps) {
  const isPrimary = variant === 'primary'

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        group
        relative
        inline-block
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
    >
      {/* Shadow */}

      <span
        className={`
          absolute
          inset-0
          translate-x-2
          translate-y-2
          rounded-xl
          bg-[#575A83]
          transition-all
          duration-200

          ${
            !disabled
              ? 'group-hover:translate-x-2.5 group-hover:translate-y-2.5'
              : ''
          }
        `}
      />

      {/* Main Button */}

      <span
        className={`
          relative
          inline-flex
          md:min-w-55
          items-center
          justify-center
          rounded-xl
          border-4
          border-[#575A83]
          px-8
          py-3

          text-center
          text-[10px]
          font-black
          uppercase
          tracking-wide

          transition-transform
          duration-200

          md:text-base

          ${
            isPrimary
              ? 'bg-[#F47F7F] text-white'
              : 'bg-white text-[#575A83]'
          }

          ${
            !disabled
              ? 'group-hover:-translate-y-1'
              : ''
          }
        `}
      >
        {loading ? 'Submitting...' : children}
      </span>
    </button>
  )
}