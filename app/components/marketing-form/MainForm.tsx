'use client'
import type { UseFormReturn } from 'react-hook-form'
import type { MarketingPlanFormData, FormStep } from './types'

import OptionChip from './OptionChip'
import FormButton from './FormButton'

interface MainFormProps {
  form: UseFormReturn<MarketingPlanFormData>

  step: number
  totalSteps: number

  submitted: boolean
  submitError: string

  currentStep: FormStep

  handleNext: () => void
  handleBack: () => void

  onSubmit: (
    data: MarketingPlanFormData
  ) => Promise<void>

  toggleMultiSelect: (
    field: 'services' | 'goals',
    value: string
  ) => void
}

export default function MainForm({
  step,
  totalSteps,
  currentStep,
  form,
  handleNext,
  handleBack,
  toggleMultiSelect,
  onSubmit,
  submitted,
  submitError
}: MainFormProps) {
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = form

  const services = watch('services') || []
  const goals = watch('goals') || []
  const budget = watch('budget')

  // Show Success / Error Screen
    if (submitted || submitError) {
    return (
        <div
        className="
            relative
            z-20
            flex
            w-full
            max-w-3xl
            flex-col
            items-center
            justify-center
            rounded-3xl
            border-4
            border-[#575A83]
            bg-white
            px-8
            py-20
            text-center
            shadow-[10px_10px_0px_#6CBDE3]
        "
        >
        {/* Icon */}

        <div
            className={`
            mb-8
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            border-4
            border-[#575A83]
            text-5xl

            ${
                submitted
                ? 'bg-[#59C36A]'
                : 'bg-[#F47F7F]'
            }
            `}
        >
            {submitted ? '✓' : '✕'}
        </div>

        {/* Title */}

        <h2
            className="
            text-3xl
            font-black
            text-[#575A83]
            "
        >
            {submitted
            ? 'Form submitted successfully!'
            : 'Submission failed'}
        </h2>

        {/* Description */}

        <p
            className="
            mt-5
            max-w-md
            text-lg
            leading-relaxed
            text-black/70
            "
        >
            {submitted
            ? "We'll soon reach out to you via your given email address."
            : submitError}
        </p>

        {/* Button */}

        <button
            onClick={() => {
            if (submitted) {
                window.location.href = '/'
            } else {
                window.location.reload()
            }
            }}
            className={`
            mt-10
            rounded-xl
            border-4
            border-[#575A83]
            px-8
            py-3
            font-black
            text-white
            shadow-[6px_6px_0px_#575A83]

            ${
                submitted
                ? 'bg-[#59C36A]'
                : 'bg-[#F47F7F]'
            }
            `}
        >
            {submitted ? 'Back to Home' : 'Try Again'}
        </button>
        </div>
    )
    }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        relative
        z-20
        flex
        w-full
        max-w-3xl
        flex-col
        rounded-3xl
        border-4
        border-[#575A83]
        bg-white
        px-6
        py-8
        shadow-[10px_10px_0px_#6CBDE3]

        md:px-16
        md:py-14
      "
    >
      {/* Progress */}

      <div className="mx-auto w-full max-w-md">
        <div className="flex gap-3">
          {Array.from({ length: totalSteps }).map(
            (_, index) => (
              <div
                key={index}
                className={`
                  h-3
                  flex-1
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    index < step
                      ? 'bg-[#F47F7F]'
                      : 'bg-[#E6E6E6]'
                  }
                `}
              />
            )
          )}
        </div>

        <p
          className="
            mt-4
            text-center
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-[#575A83]
          "
        >
          Step {step} of {totalSteps}
        </p>
      </div>

      {/* Content */}

      <div
        className="
          mt-10
          flex
          min-h-[450px]
          flex-col
        "
      >
        <div>
          <h2
            className="
              text-center
              text-2xl
              font-black
              text-[#575A83]
            "
          >
            {currentStep.title}
          </h2>

          {currentStep.subtitle && (
            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-center
                text-md
                text-black/60
              "
            >
              {currentStep.subtitle}
            </p>
          )}
        </div>

        {/* Options */}

        {currentStep.options && (
          <div
            className="
              mt-10
              grid
              grid-cols-2
              gap-4

              md:grid-cols-3
            "
          >
            {currentStep.options?.map(
              (option) => {
                const selected =
                  currentStep.field ===
                  'services'
                    ? services.includes(
                        option.value
                      )
                    : currentStep.field ===
                        'goals'
                      ? goals.includes(
                          option.value
                        )
                      : budget ===
                        option.value

                return (
                  <OptionChip
                    key={option.value}
                    label={option.label}
                    selected={selected}
                    onClick={() => {
                      if (
                        currentStep.field ===
                          'services' ||
                        currentStep.field ===
                          'goals'
                      ) {
                        toggleMultiSelect(
                          currentStep.field,
                          option.value
                        )
                      } else {
                        setValue(
                          'budget',
                          option.value
                        )
                      }
                    }}
                  />
                )
              }
            )}
          </div>
        )}

        {/* Website */}

        {currentStep.field ===
          'website' && (
          <div className="mt-12">
            <input
              {...register('website')}
              placeholder="mywebsite.com"
              className="
                w-full
                rounded-xl
                border-4
                border-[#575A83]
                px-6
                py-4
                text-sm
                md:text-lg
                outline-none
                placeholder-gray-300
                text-gray-900
                focus:border-[#F47F7F]
              "
            />
          </div>
        )}

        {/* Contact */}

        {currentStep.field ===
          'contact' && (
          <div className="mt-12 space-y-5">
            <input
              {...register('name')}
              placeholder="Your Name"
              className="
                w-full
                rounded-xl
                border-4
                border-[#575A83]
                placeholder-gray-300
                text-gray-900
                text-sm
                md:text-lg
                px-6
                py-4
              "
            />

            <input
              {...register('email')}
              placeholder="Your Business Email"
              className="
                w-full
                rounded-xl
                border-4
                border-[#575A83]
                placeholder-gray-300
                text-gray-900
                text-sm
                md:text-lg
                px-6
                py-4
              "
            />

            <input
              {...register('phone')}
              placeholder="Your Phone Number"
              className="
                w-full
                rounded-xl
                border-4
                border-[#575A83]
                placeholder-gray-300
                text-gray-900
                text-sm
                md:text-lg
                px-6
                py-4
              "
            />
          </div>
        )}

        {/* Navigation */}

        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            pt-10
          "
        >
          <div>
            {step > 1 && (
              <FormButton
                variant="secondary"
                onClick={handleBack}
              >
                Back
              </FormButton>
            )}
          </div>

          <FormButton
            type="button"
            loading={isSubmitting}
            onClick={() => {
                if (step === totalSteps) {
                handleSubmit(onSubmit)()
                } else {
                handleNext()
                }
            }}
            >
            {step === totalSteps
                ? 'Get My Marketing Plan'
                : 'Next'}
            </FormButton>
        </div>
      </div>
    </form>
  )
}