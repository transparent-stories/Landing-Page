'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FORM_STEPS,MarketingPlanFormData } from './types'
import MainForm from './MainForm'

export default function MarketingForm() {

  const [step, setStep] = useState(1)
  const currentStep = FORM_STEPS[step - 1]

  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleNext = async () => {
    switch (currentStep.field) {
      case 'services':
        if (watch('services').length === 0) return
        break

      case 'goals':
        if (watch('goals').length === 0) return
        break

      case 'budget':
        if (!watch('budget')) return
        break

      case 'website': {
        const valid = await trigger('website')

        if (!valid) return

        break
      }
    }

    if (step < FORM_STEPS.length) {
      setStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const form = useForm<MarketingPlanFormData>({
    defaultValues: {
      services: [],
      goals: [],

      budget: '',

      website: '',

      name: '',
      email: '',
      phone: '',
    },
  })

  const {
    watch,
    setValue,
    trigger,
  } = form

  const toggleMultiSelect = (
    field: 'services' | 'goals',
    value: string
  ) => {
    const current = watch(field)

    if (current.includes(value)) {
      setValue(
        field,
        current.filter(item => item !== value),
        {
          shouldValidate: true,
        }
      )
    } else {
      setValue(
        field,
        [...current, value],
        {
          shouldValidate: true,
        }
      )
    }
  }

  const onSubmit = async (
    data: MarketingPlanFormData
  ) => {
    setSubmitError('')

    try {
      const response = await fetch(
        '/api/marketing-plan',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      const result = await response.json()

      if (!response.ok) {
        throw new Error(
          result.message ||
            'Unable to submit request.'
        )
      }

      setSubmitted(true)
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Something went wrong.'
      )
    }
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#10A2D4]
        px-5
        pt-10
        pb-20
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mx-auto max-w-5xl text-center">
          <h1
            className="
              font-black
              leading-[1.05]
              tracking-tight
              text-white
              text-[28px]
              sm:text-[36px]
              md:text-[42px]
            "
          >
            Get Your Free Marketing Plan

            <br />

            From{' '}

            <span className="bg-[#5A5C86] px-2">
              Real Client Data
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-sm
              md:text-[19px]
              leading-relaxed
              text-white
            "
          >
            We crowdsource winning marketing strategies
            from our 250+ active clients so you win
            faster.
          </p>
        </div>

        {/* Illustration + Card */}

        <div
          className="
            relative
            mx-auto
            mt-10
            flex
            justify-center
          "
        >
          {/* Desktop Illustration */}

          <Image
            src="/marketing-form/illustration.svg"
            alt=""
            aria-hidden="true"
            width={1450}
            height={760}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              hidden
              w-full
              max-w-7xl
              -translate-x-1/2
              -translate-y-1/2
              lg:block
            "
          />

          {/* Mobile Illustration */}

          <Image
            src="/marketing-form/illustration.svg"
            alt=""
            aria-hidden="true"
            width={700}
            height={500}
            className="
              mb-8
              w-full
              max-w-md
              hidden
            "
          />

          {/* Form Card */}
          <MainForm
            form={form}
            step={step}
            totalSteps={FORM_STEPS.length}
            currentStep={currentStep}
            handleNext={handleNext}
            handleBack={handleBack}
            onSubmit={onSubmit}
            toggleMultiSelect={toggleMultiSelect}
            submitted={submitted}
            submitError={submitError}
          />

        </div>

      </div>
    </section>
  )
}