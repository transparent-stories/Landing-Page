import Image from "next/image"
import { getPage } from "../lib/getPage"

export default async function Home() {
  const data = await getPage()

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        {/* Example dynamic content */}
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold">
            {data?.heroTitle}
          </h1>

          <p className="mt-4 text-lg text-zinc-600">
            {data?.heroSubtitle}
          </p>

          <button className="mt-6 px-6 py-3 bg-black text-white rounded-xl">
            {data?.ctaText}
          </button>
        </div>

        {/* Keep your existing UI if you want */}
        <Image
          className="dark:invert mt-10"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

      </main>
    </div>
  )
}