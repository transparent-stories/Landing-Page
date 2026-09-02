import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://transparentstories.com'),

  title: 'Transparent Stories — Performance Marketing & Creative Agency',

  description:
    'We help brands grow through performance marketing, creative strategy, content, CRO, SEO and data-backed decision making.',

  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    title: 'Transparent Stories — Performance Marketing & Creative Agency',

    description:
      'We help brands grow through performance marketing, creative strategy, content, CRO, SEO and data-backed decision making.',

    url: '/',

    siteName: 'Transparent Stories',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Transparent Stories',
      },
    ],

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Transparent Stories — Performance Marketing & Creative Agency',

    description:
      'We help brands grow through performance marketing, creative strategy, content, CRO, SEO and data-backed decision making.',

    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}

        {/* Meta Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1272504081098433');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  )
}