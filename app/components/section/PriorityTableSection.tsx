interface PriorityRow {
  priority: string
  revenueGain: string
  profit: string
  what: string
  investment: string
  speed: string
}

interface PriorityTableData {
  titleBeforeHighlight?: string
  highlightText?: string
  titleAfterHighlight?: string

  subtitle?: string

  leftRemark?: string
  rightRemark?: string

  rows?: PriorityRow[]
}

interface Props {
  data: PriorityTableData
}

export default function PriorityTableSection({
  data,
}: Props) {
  return (
    <section className="bg-[#F7F6F3] py-24">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADER */}

        <div className="relative mx-auto max-w-5xl text-center">

          {/* Left Remark */}
          {data?.leftRemark && (
            <div
              className="
                absolute
                -left-10
                -top-30
                hidden
                lg:block
              "
            >
              <p
                className="
                  max-w-65
                    text-left
                    text-[24px]
                    font-black
                    leading-tight
                    text-black
                "
                style={{
                  fontFamily:
                    'Comic Sans MS, Marker Felt, cursive',
                }}
              >
                {data.leftRemark}
              </p>

              {/* Arrow */}
                <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-2"
                >
                <path
                    d="M0 10 C5 40 25 50 45 55"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="7 7"
                />

                <path
                    d="M35 45L47 56L32 60"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            </div>
          )}

          {/* Right Remark */}
          {data?.rightRemark && (
            <div
              className="
                absolute
                -right-20
                top-20
                hidden
                lg:block
              "
            >
              <p
                className="
                  max-w-55
                  text-left
                  text-xl
                  leading-tight
                "
                style={{
                  fontFamily:
                    'Comic Sans MS, Marker Felt, cursive',
                }}
              >
                {data.rightRemark}
              </p>

              <div className="ml-20 text-3xl">
                ↙
              </div>
            </div>
          )}

          {/* Title */}
          <h2
            className="
              font-black
              leading-tight
              text-black
              text-[28px]
              sm:text-[36px]
              md:text-[42px]
            "
          >
            {data?.titleBeforeHighlight}{' '}

            <span className="bg-black px-2 text-white">
              {data?.highlightText}
            </span>{' '}

            {data?.titleAfterHighlight}
          </h2>

          {/* Subtitle */}
          <p
            className="
              mx-auto
              mt-6
              max-w-4xl
              text-sm
              md:text-[19px]
              leading-relaxed
              text-black/80
            "
          >
            {data?.subtitle}
          </p>
        </div>

        {/* TABLE */}

        <div className="mt-14 overflow-x-auto">

          <table
            className="
              px-3
              w-full
              min-w-300
              border-separate
              border-spacing-y-6
            "
          >
            <thead className="
              relative
              rounded-lg
              border-[6px]
              border-[#575A83]
              bg-white
              p-3
              shadow-[8px_8px_0px_#D9D9D9]">
              <tr>
                <th className="rounded-l-xl border-6 border-[#5C6085] bg-[#67C7E3] px-6 py-5 text-center font-bold text-white">
                  Priority
                </th>

                <th className="border-y-6 border-[#5C6085] bg-[#67C7E3] px-6 py-5 text-center font-bold text-white">
                  Revenue Gain
                </th>

                <th className="border-y-6 border-[#5C6085] bg-[#67C7E3] px-6 py-5 text-center font-bold text-white">
                  Profit
                </th>

                <th className="border-y-6 border-[#5C6085] bg-[#67C7E3] px-6 py-5 text-center font-bold text-white">
                  What
                </th>

                <th className="border-y-6 border-[#5C6085] bg-[#67C7E3] px-6 py-5 text-center font-bold text-white">
                  Investment
                </th>

                <th className="rounded-r-xl border-6 border-[#5C6085] bg-[#67C7E3] px-6 py-5 text-center font-bold text-white">
                  Speed
                </th>
              </tr>
            </thead>

            <tbody className="text-[#5C6085]">
              {data?.rows?.map((row, index) => (
                <tr key={index}>

                  <td
                    className="
                      rounded-l-xl
                      border-6
                      border-r-0
                      border-[#5C6085]
                      bg-white
                      px-6
                      py-8
                      text-center
                      font-bold
                    "
                  >
                    {row.priority}
                  </td>

                  <td
                    className="
                      border-y-6
                      w-50
                      border-[#5C6085]
                      bg-white
                      px-6
                      py-8
                      text-center
                      font-semibold
                      whitespace-pre-line
                    "
                  >
                    {row.revenueGain}
                  </td>

                  <td
                    className="
                      border-y-6
                      w-50
                      border-[#5C6085]
                      bg-white
                      px-6
                      py-8
                      text-center
                      font-semibold
                      whitespace-pre-line
                    "
                  >
                    {row.profit}
                  </td>

                  <td
                    className="
                      border-y-6
                      border-[#5C6085]
                      bg-white
                      px-6
                      py-8
                      text-center
                    "
                  >
                    {row.what}
                  </td>

                  <td
                    className="
                      border-y-6
                      border-[#5C6085]
                      bg-white
                      px-6
                      py-8
                      text-center
                    "
                  >
                    {row.investment}
                  </td>

                  <td
                    className="
                      rounded-r-xl
                      border-6
                      border-l-0
                      border-[#5C6085]
                      bg-white
                      px-6
                      py-8
                      text-center
                    "
                  >
                    {row.speed}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </section>
  )
}