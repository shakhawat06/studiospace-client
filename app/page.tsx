import HowBookingWorks from "@/components/home/HowBookingWorks"
import HostGuarantee from "@/components/home/HostGuarantee"
import HeroSlider from "@/components/home/HeroSlider"
import { Studio } from "./types/type"
import AllStudios from "@/components/studio/AllStudios"

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getStudios`)
  const datas: Studio[] = await res.json()

  return (
    <>
      <HeroSlider />

      <main className="mx-auto min-h-svh max-w-7xl p-6">
        <div className="flex flex-col gap-4 text-sm leading-loose">
          {/* Featured Studios */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {datas.map((studio) => (
              <AllStudios key={studio._id} studio={studio} />
            ))}
          </div>

          <HowBookingWorks />

          <HostGuarantee />
        </div>
      </main>
    </>
  )
}
