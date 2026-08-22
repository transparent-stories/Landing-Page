import { NextResponse } from 'next/server'

import { sendEmail } from '@/lib/mail'

import {
  adminMarketingPlanEmail,
  customerMarketingPlanEmail,
} from '@/lib/marketingPlanEmail'

import type { MarketingPlanFormData } from '@/app/components/marketing-form/types'

export async function POST(request: Request) {
  try {
    const data: MarketingPlanFormData = await request.json()

    /* ------------------------------ */
    /* Send Admin Email               */
    /* ------------------------------ */

    await sendEmail({
      to: process.env.TO_EMAIL!,
      subject: `New Marketing Plan Request • ${data.name}`,
      html: adminMarketingPlanEmail(data),
    })

    /* ------------------------------ */
    /* Send Customer Email            */
    /* ------------------------------ */

    await sendEmail({
      to: data.email,
      subject: 'We received your Marketing Plan request',
      html: customerMarketingPlanEmail(data),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Marketing plan request submitted.',
      },
      {
        status: 200,
      }
    )
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: 'Unable to submit request.',
      },
      {
        status: 500,
      }
    )
  }
}