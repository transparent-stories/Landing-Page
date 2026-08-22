import { getPage } from '@/lib/getPage'
import { getFooter } from '@/lib/getFooter'

import Header from '../components/section/Header'
import FooterSection from '../components/section/FooterSection'

export default async function PrivacyPolicy() {
  const pageData = await getPage()
  const footerData = await getFooter()

  return (
    <>
      <Header data={pageData?.header} />

      <main className="px-5 py-12 md:px-10 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-semibold md:text-5xl text-gray-900">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Effective Date: 7 August 2026
          </p>

          <div className="mt-10 space-y-10 text-gray-700">
            <section>
              <p className="leading-7">
                Transparent Stories respects your privacy and is committed to
                handling personal information responsibly.
              </p>

              <p className="mt-4 leading-7">
                This Privacy Policy explains how we may collect, use, store,
                share and protect information when you visit
                transparentstories.com, contact us, submit an enquiry, become a
                client, or otherwise interact with our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                1. Information We May Collect
              </h2>

              <p className="mt-3 leading-7">
                Depending on how you interact with us, we may collect
                information such as:
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company or brand name</li>
                <li>Job title</li>
                <li>Website address</li>
                <li>Social media handles</li>
                <li>Project requirements</li>
                <li>Marketing objectives</li>
                <li>Messages and communications</li>
                <li>Billing and business information</li>
              </ul>

              <p className="mt-4 leading-7">
                Please avoid submitting unnecessary sensitive personal
                information through our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                2. Information Collected Automatically
              </h2>

              <p className="mt-3 leading-7">
                When you visit our website, certain technical information may be
                collected automatically depending on the technologies used on
                the website.
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages viewed</li>
                <li>Approximate location based on IP address</li>
                <li>Date and time of visits</li>
                <li>Website interaction data</li>
                <li>Cookie or similar identifiers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                3. Information We Process for Clients
              </h2>

              <p className="mt-3 leading-7">
                As a marketing agency, Transparent Stories may access
                information through client accounts and systems while providing
                services.
              </p>

              <p className="mt-3 leading-7">
                This may include information available through:
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Advertising platforms</li>
                <li>Social media accounts</li>
                <li>Website analytics</li>
                <li>CRM systems</li>
                <li>E-commerce websites</li>
                <li>Amazon and Flipkart accounts</li>
                <li>Blinkit and Zepto accounts</li>
                <li>Google services</li>
                <li>Meta services</li>
                <li>Email marketing platforms</li>
              </ul>

              <p className="mt-4 leading-7">
                Where we process information on behalf of a client, we may act
                according to the client&apos;s instructions and the terms of the
                relevant service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                4. How We Use Information
              </h2>

              <p className="mt-3 leading-7">
                We may use personal information to:
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Respond to enquiries</li>
                <li>Communicate with clients and prospective clients</li>
                <li>Prepare proposals and quotations</li>
                <li>Provide marketing and creative services</li>
                <li>Manage client relationships</li>
                <li>Execute advertising campaigns</li>
                <li>Manage projects</li>
                <li>Provide customer support</li>
                <li>Process invoices and payments</li>
                <li>Maintain business records</li>
                <li>Improve our website and services</li>
                <li>Analyse website and campaign performance</li>
                <li>Maintain security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                5. Contact and Enquiry Forms
              </h2>

              <p className="mt-3 leading-7">
                When you submit a form through our website, we may collect the
                information entered in that form so our team can respond to your
                enquiry.
              </p>

              <p className="mt-3 leading-7">
                Submitting an enquiry does not automatically create a
                client-agency relationship.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                6. Marketing Communications
              </h2>

              <p className="mt-3 leading-7">
                If you provide your contact details to us, we may communicate
                with you regarding your enquiry, our services, proposals,
                relevant agency updates or an existing business relationship.
              </p>

              <p className="mt-3 leading-7">
                You may request that we stop sending non-essential marketing
                communications at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                7. Cookies and Similar Technologies
              </h2>

              <p className="mt-3 leading-7">
                Our website may use cookies and similar technologies to operate
                the website, understand visitor behaviour, measure traffic,
                analyse performance and improve user experience.
              </p>

              <p className="mt-3 leading-7">
                You may restrict or delete cookies through your browser
                settings. Disabling certain cookies may affect how parts of the
                website function.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                8. Analytics and Advertising Services
              </h2>

              <p className="mt-3 leading-7">
                Transparent Stories may use third-party tools and platforms in
                connection with its website and marketing activities.
              </p>

              <p className="mt-3 leading-7">
                These may include services provided by Google, Meta, LinkedIn,
                YouTube, hosting providers, analytics providers, CRM systems and
                other technology partners.
              </p>

              <p className="mt-3 leading-7">
                These providers may process information according to their own
                privacy policies and terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                9. Sharing of Personal Information
              </h2>

              <p className="mt-3 leading-7">
                Transparent Stories does not sell personal information to
                advertisers.
              </p>

              <p className="mt-3 leading-7">
                We may share information where reasonably necessary with:
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Employees and authorised team members</li>
                <li>Contractors and freelancers</li>
                <li>Website and hosting providers</li>
                <li>Cloud storage providers</li>
                <li>Analytics providers</li>
                <li>Advertising platforms</li>
                <li>Marketplace platforms</li>
                <li>Professional advisers</li>
                <li>Payment or invoicing providers</li>
                <li>Government authorities where legally required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                10. International Processing
              </h2>

              <p className="mt-3 leading-7">
                Some technology platforms and service providers we use may
                operate servers or teams outside India.
              </p>

              <p className="mt-3 leading-7">
                Personal information may therefore be processed or stored
                outside India where permitted by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                11. Data Retention
              </h2>

              <p className="mt-3 leading-7">
                We retain personal information only for as long as reasonably
                necessary for the purpose for which it was collected or as
                required for legal, accounting, taxation, security or business
                record purposes.
              </p>

              <p className="mt-3 leading-7">
                When information is no longer reasonably required, we may delete
                or anonymise it where appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                12. Data Security
              </h2>

              <p className="mt-3 leading-7">
                We use reasonable organisational and technical measures intended
                to protect personal information from unauthorised access, loss,
                misuse, alteration, disclosure or destruction.
              </p>

              <p className="mt-3 leading-7">
                However, no website, internet transmission or electronic
                storage system can be guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                13. Client Account Credentials
              </h2>

              <p className="mt-3 leading-7">
                Where clients provide access to advertising accounts, websites,
                marketplace accounts, analytics platforms or social media
                accounts, we use such access only as reasonably required to
                perform the agreed services.
              </p>

              <p className="mt-3 leading-7">
                Where supported, clients should provide official partner,
                employee or user-level access rather than sharing personal
                passwords.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                14. Your Privacy Rights
              </h2>

              <p className="mt-3 leading-7">
                Depending on applicable law and the circumstances, you may have
                the right to:
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Request information about personal data processed about you
                </li>
                <li>
                  Request correction of inaccurate or incomplete information
                </li>
                <li>Request deletion where applicable</li>
                <li>
                  Withdraw consent where processing is based on consent
                </li>
                <li>
                  Raise a grievance regarding the handling of your information
                </li>
              </ul>

              <p className="mt-4 leading-7">
                To submit a privacy request, contact us at{' '}
                <a
                  href="mailto:team@transparentstories.com"
                  className="underline"
                >
                  team@transparentstories.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                15. Digital Personal Data Protection
              </h2>

              <p className="mt-3 leading-7">
                Transparent Stories intends to handle digital personal data in
                accordance with applicable Indian data protection requirements,
                including the Digital Personal Data Protection Act, 2023 and
                related rules as and when the relevant provisions become
                applicable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                16. Children&apos;s Privacy
              </h2>

              <p className="mt-3 leading-7">
                Our website and agency services are primarily intended for
                businesses and professionals. We do not knowingly seek to
                collect personal data directly from children for the purpose of
                providing our agency services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                17. Third-Party Websites
              </h2>

              <p className="mt-3 leading-7">
                Our website may contain links to client websites, social media
                platforms, marketplaces, videos or other external websites.
              </p>

              <p className="mt-3 leading-7">
                Transparent Stories does not control the privacy practices of
                these third parties. You should review their privacy policies
                before providing personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                18. Portfolio, Testimonials and Case Studies
              </h2>

              <p className="mt-3 leading-7">
                With appropriate permission or where otherwise lawfully
                permitted, we may publish client names, logos, testimonials,
                campaign results, screenshots, creative work and case studies.
              </p>

              <p className="mt-3 leading-7">
                We will endeavour not to publish confidential personal or
                commercial information through our portfolio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                19. Security Incidents
              </h2>

              <p className="mt-3 leading-7">
                If we become aware of a personal data security incident, we will
                assess the incident and take reasonable steps to contain and
                address it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                20. Changes to This Privacy Policy
              </h2>

              <p className="mt-3 leading-7">
                We may update this Privacy Policy from time to time to reflect
                changes in our services, technology, business practices or
                applicable laws.
              </p>

              <p className="mt-3 leading-7">
                The latest version will be published on our website with the
                updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-black">
                21. Contact and Privacy Grievances
              </h2>

              <p className="mt-3 leading-7">
                For questions, privacy requests or grievances relating to this
                Privacy Policy or the handling of your personal information,
                contact:
              </p>

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

                <p className="mt-2">
                  Please use &quot;Privacy Request&quot; in the subject line
                  where applicable.
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