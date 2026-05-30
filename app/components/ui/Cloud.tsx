export default function Cloud() {
  return (
    <div className="relative z-10 h-16 w-28">

      {/* Shadow */}
      <div className="absolute inset-0 translate-x-1.5 translate-y-1.5">

        <div className="absolute bottom-0 left-4 h-8 w-16 rounded-full bg-[#575A83]" />

        <div className="absolute bottom-4 left-0 h-10 w-10 rounded-full bg-[#575A83]" />

        <div className="absolute bottom-5 left-7 h-12 w-12 rounded-full bg-[#575A83]" />

        <div className="absolute bottom-3 right-2 h-10 w-10 rounded-full bg-[#575A83]" />
      </div>

      {/* Main Cloud */}
      <div className="relative h-full w-full">

        <div
          className="
            absolute
            bottom-0
            left-4
            h-8
            w-16
            rounded-full
            border-4
            border-[#575A83]
            bg-white
          "
        />

        <div
          className="
            absolute
            bottom-4
            left-0
            h-10
            w-10
            rounded-full
            border-4
            border-[#575A83]
            bg-white
          "
        />

        <div
          className="
            absolute
            bottom-5
            left-7
            h-12
            w-12
            rounded-full
            border-4
            border-[#575A83]
            bg-white
          "
        />

        <div
          className="
            absolute
            bottom-3
            right-2
            h-10
            w-10
            rounded-full
            border-4
            border-[#575A83]
            bg-white
          "
        />
      </div>
    </div>
  )
}