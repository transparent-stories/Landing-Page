import { getPage } from '@/lib/getPage'
import { getFooter } from '@/lib/getFooter'

import Header from '../components/section/Header'
import FooterSection from '../components/section/FooterSection'

export default async function TermsNServices() {
  const pageData = await getPage()
  const footerData = await getFooter()

  return (
    <>
      <Header data={pageData?.header} />

      <main className="px-5 py-12 md:px-10 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-semibold md:text-5xl text-gray-900">
            Terms & Conditions
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Effective Date: 7 August 2026
          </p>

          <div className="mt-10 space-y-10 text-gray-700">
            <section>
              <p className="leading-7">
                These Terms & Conditions govern your access to and use of
                transparentstories.com and any services provided by Transparent
                Stories.
              </p>

              <p className="mt-4 leading-7">
                By accessing our website, submitting an enquiry, communicating
                with us, or engaging our services, you agree to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                1. About Transparent Stories
              </h2>

              <p className="mt-3 leading-7">
                Transparent Stories is a marketing and creative agency providing
                services including social media management, performance
                marketing, SEO, influencer marketing, content creation, brand
                strategy, photography, video production, website development,
                marketplace management and related digital marketing services.
              </p>

              <p className="mt-3 leading-7">
                The exact scope, deliverables, timelines and commercial terms
                for each project will be specified in the relevant proposal,
                quotation, invoice or service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                2. Website Use
              </h2>

              <p className="mt-3 leading-7">
                You may use this website only for lawful purposes.
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Do not attempt to gain unauthorised access to our website or
                  systems.
                </li>
                <li>
                  Do not introduce viruses, malicious code or harmful material.
                </li>
                <li>
                  Do not copy or commercially exploit website content without
                  permission.
                </li>
                <li>
                  Do not use the website in violation of applicable laws.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                3. Enquiries and Proposals
              </h2>

              <p className="mt-3 leading-7">
                Submitting an enquiry through our website, email, WhatsApp,
                telephone or another communication channel does not automatically
                create a client-agency relationship.
              </p>

              <p className="mt-3 leading-7">
                A project generally begins once the scope, commercial terms and
                payment requirements have been agreed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                4. Scope of Services
              </h2>

              <p className="mt-3 leading-7">
                The services provided will depend on the agreed scope of work.
                Requests outside the agreed scope may require additional fees
                or timelines.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                5. Client Responsibilities
              </h2>

              <p className="mt-3 leading-7">
                Clients are responsible for providing accurate and timely
                information, approvals, brand assets, product details, login
                access and other material required to perform the services.
              </p>

              <p className="mt-3 leading-7">
                Transparent Stories will not be responsible for delays or errors
                caused by incomplete or inaccurate information provided by the
                client.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                6. Approvals
              </h2>

              <p className="mt-3 leading-7">
                Clients may be required to approve advertisements, creatives,
                website pages, social media content and other deliverables before
                publication.
              </p>

              <p className="mt-3 leading-7">
                Once approved, the client is responsible for verifying product
                information, pricing, offers, claims, spellings and other factual
                details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                7. Advertising and Performance Marketing
              </h2>

              <p className="mt-3 leading-7">
                Advertising results depend on many external factors including
                competition, market conditions, platform algorithms, website
                performance, pricing, consumer behaviour and seasonality.
              </p>

              <p className="mt-3 leading-7">
                Advertising spend paid to platforms such as Meta, Google or
                Amazon is separate from Transparent Stories&apos; professional
                fees unless otherwise agreed.
              </p>

              <p className="mt-3 leading-7">
                We do not guarantee specific sales, leads, revenue, rankings,
                followers, ROAS or other commercial results.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">8. SEO</h2>

              <p className="mt-3 leading-7">
                SEO performance depends on search engine algorithms, competition,
                website authority and other external factors.
              </p>

              <p className="mt-3 leading-7">
                Transparent Stories does not guarantee specific rankings,
                traffic levels or a particular timeframe for SEO results.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                9. Third-Party Platforms
              </h2>

              <p className="mt-3 leading-7">
                Our services may involve platforms such as Instagram, Facebook,
                LinkedIn, YouTube, Google, Amazon, Flipkart, Blinkit and Zepto.
              </p>

              <p className="mt-3 leading-7">
                We are not responsible for platform outages, policy changes,
                algorithm updates, account restrictions or technical issues
                caused by third-party platforms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                10. Fees and Payment
              </h2>

              <p className="mt-3 leading-7">
                Fees, payment schedules and applicable taxes will be specified
                in the relevant proposal, quotation or invoice.
              </p>

              <p className="mt-3 leading-7">
                Work may be paused if payments become overdue.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                11. Intellectual Property
              </h2>

              <p className="mt-3 leading-7">
                Clients retain ownership of logos, trademarks, images and other
                materials supplied by them.
              </p>

              <p className="mt-3 leading-7">
                Transparent Stories retains ownership of its pre-existing
                processes, templates, strategies, systems and internal know-how.
              </p>

              <p className="mt-3 leading-7">
                Ownership or usage rights for final deliverables will be
                determined by the applicable agreement and may depend on full
                payment being received.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                12. Portfolio Usage
              </h2>

              <p className="mt-3 leading-7">
                Unless otherwise agreed, Transparent Stories may display
                publicly released client work in its portfolio, website, social
                media, case studies and presentations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                13. Confidentiality
              </h2>

              <p className="mt-3 leading-7">
                Both parties should treat confidential and non-public business
                information with reasonable care.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                14. No Guarantee of Business Results
              </h2>

              <p className="mt-3 leading-7">
                Marketing involves testing and external factors. Transparent
                Stories does not guarantee revenue, profitability, sales,
                rankings or any other commercial outcome.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                15. Limitation of Liability
              </h2>

              <p className="mt-3 leading-7">
                To the maximum extent permitted by law, Transparent Stories will
                not be liable for indirect or consequential losses including
                loss of profits, business opportunities, data or reputation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                16. Termination
              </h2>

              <p className="mt-3 leading-7">
                Transparent Stories may suspend or terminate services in cases
                including non-payment, material breach, illegal requests or
                repeated failure to provide required approvals.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                17. Governing Law
              </h2>

              <p className="mt-3 leading-7">
                These Terms are governed by the laws of India. Courts having
                competent jurisdiction in Mumbai, Maharashtra will have
                jurisdiction over disputes relating to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                18. Contact Us
              </h2>

              <div className="mt-3 leading-7">
                <p>Transparent Stories</p>

                <p className="mt-2">
                  141/1123, Motilal Nagar No. 1
                  <br />
                  Goregaon West, Mumbai – 400104
                  <br />
                  India
                </p>

                <p className="mt-2">
                  Email:{' '}
                  <a
                    href="mailto:team@transparentstories.com"
                    className="underline"
                  >
                    team@transparentstories.com
                  </a>
                </p>

                <p>
                  Phone:{' '}
                  <a href="tel:+918433879758" className="underline">
                    +91 84338 79758
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <FooterSection data={footerData} />
    </>
  )
}