import Link from "next/link"
import { FiMapPin, FiUsers, FiArrowUpRight } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Studio } from "@/app/types/type"

export default function AllStudios({ studio }: { studio: Studio }) {
  return (
    <section className="min-h-screen bg-background">
      <article
        key={studio._id}
        className="group overflow-hidden rounded-2xl border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        {/* Image */}
        <Link
          href={`/studios/${studio._id}`}
          className="relative block aspect-4/3 overflow-hidden bg-muted"
        >
          <Image
            src={studio.imageURL}
            alt={studio.title}
            width={350}
            height={350}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <span className="absolute top-4 right-4 rounded-full bg-background/95 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
            {studio.category}
          </span>
        </Link>

        {/* Content */}
        <div className="p-5">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <Link
                href={`/studios/${studio._id}`}
                className="line-clamp-1 text-lg font-bold transition hover:text-[#E47131]"
              >
                {studio.title}
              </Link>

              <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                <FiMapPin className="shrink-0" />
                {studio.location}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between border-y py-4">
            <div>
              <p className="text-xs text-muted-foreground">Starting from</p>
              <p className="mt-1 text-xl font-bold">
                $ HourlyRate
                <span className="text-sm font-normal text-muted-foreground">
                  {" "}
                  /hr
                </span>
              </p>
            </div>

            <div className="text-right">
              <p className="flex items-center justify-end gap-1.5 text-sm font-medium">
                <FiUsers className="text-muted-foreground" />
                Capacity Guests
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Reviews reviews
              </p>
            </div>
          </div>

          {/* Amenities */}
          <div className="mt-4 flex flex-wrap gap-2">
            {studio.amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="rounded-md bg-muted px-2.5 py-1.5 text-xs text-muted-foreground"
              >
                {amenity}
              </span>
            ))}
          </div>

          {/* Details CTA */}
          <Button className="mt-5 h-11 w-full bg-[#E47131] text-white hover:bg-[#cb6026]">
            <Link href={`/studios/${studio._id}`} className="flex items-center">
              View Studio Details
              <FiArrowUpRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </article>
    </section>
  )
}
