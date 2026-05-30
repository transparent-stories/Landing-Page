'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/image'
import PushButton from '../ui/PushButton'

export default function Header({ data }: any) {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex md:flex-row items-center justify-center md:justify-between px-6 py-4">
        
        {/* Logo */}
        <a href={data?.brandLogo?.link || '/'} className='flex justify-center'>
          {data?.brandLogo ? (
            <Image
              src={urlFor(data.brandLogo).width(500).url()}
              alt={data?.brandLogo?.alt || 'Transparent Stories'}
              width={250}
              height={100}
              className="h-14 w-auto object-contain"
            />
          ) : (
            <div className="text-2xl font-bold">Transparent</div>
          )}
        </a>

        {/* Dynamic Menu */}
        <nav className="hidden md:flex items-center gap-8 text-md font-bold text-zinc-700">
          {data?.menuItems?.map((item: any, index: number) => (
            <a key={index} href={item.link || '#'}>
                {item.label || 'Menu'}
            </a>
          ))}
        </nav>

        {/* Dynamic CTA */}
        <PushButton
            text={data?.ctaText}
            href={data?.ctaLink}
        />

      </div>
    </header>
  )
}