import AllStudios from "@/components/studio/AllStudios"
import { HiOutlineCamera } from "react-icons/hi2"
import { Studio } from "../types/type"

const StudiosPage = async () => {
  const res = await fetch("http://localhost:8000/studios")
  const studios : Studio[] = await res.json()

  console.log(studios)

  return (
    <div className="mx-auto min-h-svh max-w-7xl p-6">
      {/* Hero */}
      <div className="border-b bg-muted/30 mb-10">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium text-[#E47131]">
              <HiOutlineCamera size={18} />
              Find your creative space
            </span>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Discover spaces.
              <span className="block text-[#E47131]">
                Create something amazing.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground sm:text-lg">
              Explore unique studios for photography, filmmaking, podcasting,
              music, and your next big idea.
            </p>
          </div>
        </div>
      </div>

      {studios.length > 0 ? (
        <div className="">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {studios.map((studio) => (
              <AllStudios key={studio._id} studio={studio} />
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed px-5 py-16 text-center">
          <HiOutlineCamera className="mx-auto mb-4 text-4xl text-muted-foreground" />
          <h3 className="text-xl font-bold">No studios found</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Try another search term or category.
          </p>
        </div>
      )}
    </div>
  )
}

export default StudiosPage
