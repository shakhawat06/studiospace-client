import Link from "next/link"
import {
  FiMapPin,
  FiUsers,
  FiClock,
  FiCheckCircle,
  FiArrowLeft,
  FiHeart,
  FiCamera,
} from "react-icons/fi"
import Image from "next/image"
import EditStudio from "./EditStudio"
import { Studio } from "@/app/types/type"
import { DeleteStudioDialog } from "./DeleteStudioDialog"
import BookingCard from "../booking/BookingCard"

type StudioDetailsProps = {
  studio: Studio
}

export default function StudioDetails({ studio }: StudioDetailsProps) {
  const overview =
    studio.overview ||
    `Welcome to ${studio.title}, a creative space designed to bring your ideas to life. Whether you're planning a photography session, video production, or a creative project, this studio provides a comfortable and professional environment for your work.`

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/studios"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-[#E47131]"
          >
            <FiArrowLeft />
            Back to studios
          </Link>
          <div className="space-x-3 flex">
            <EditStudio studio={studio} />
            <DeleteStudioDialog studio={studio} />
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E47131]/10 px-3 py-1.5 text-xs font-semibold text-[#E47131]">
              <FiCamera />
              {studio.category}
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {studio.title}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <FiMapPin className="text-[#E47131]" />
                {studio.location}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition hover:border-[#E47131] hover:text-[#E47131]"
          >
            <FiHeart />
            Save Studio
          </button>
        </div>

        {/* Image Gallery */}
        <div className="md:h-440px rounded-2xl md:grid-cols-4 md:grid-rows-2">
          <div className="min-h-280px overflow-hidden md:col-span-2 md:row-span-2 md:min-h-0">
            <Image
              src={studio.imageURL}
              alt={studio.title}
              width={600}
              height={600}
              className="w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Left Content */}
          <div className="space-y-10 lg:col-span-2">
            {/* Quick Information */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
              <div className="rounded-xl border bg-card p-4">
                <FiUsers className="mb-3 text-2xl text-[#E47131]" />
                <p className="text-sm text-muted-foreground">
                  Maximum capacity
                </p>
                <h3 className="mt-1 text-lg font-bold">
                  {studio.maxCapacity} Guests
                </h3>
              </div>

              <div className="rounded-xl border bg-card p-4">
                <FiClock className="mb-3 text-2xl text-[#E47131]" />
                <p className="text-sm text-muted-foreground">Booking type</p>
                <h3 className="mt-1 text-lg font-bold">Hourly</h3>
              </div>

              {/* <div className="col-span-2 rounded-xl border bg-card p-4 sm:col-span-1">
                <FiStar className="mb-3 text-2xl text-[#E47131]" />
                <p className="text-sm text-muted-foreground">Guest rating</p>
                <h3 className="mt-1 text-lg font-bold">
                </h3>
              </div> */}
            </section>

            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold">About this studio</h2>
              <p className="mt-4 leading-8 text-muted-foreground">{overview}</p>
            </section>

            <div className="border-t" />

            {/* Amenities */}
            <section>
              <h2 className="text-2xl font-bold">What this studio offers</h2>

              {studio.amenities.length > 0 ? (
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {studio.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 rounded-xl border bg-card p-4"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#E47131]/10 text-[#E47131]">
                        <FiCheckCircle size={19} />
                      </span>
                      <span className="text-sm font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm text-muted-foreground">
                  No amenities have been listed yet.
                </p>
              )}
            </section>

            <div className="border-t" />

            {/* Location */}
            <section>
              <h2 className="text-2xl font-bold">Location</h2>

              <div className="mt-5 flex items-start gap-3 rounded-xl border bg-card p-5">
                <FiMapPin className="mt-1 shrink-0 text-xl text-[#E47131]" />
                <div>
                  <h3 className="font-semibold">{studio.location}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Studio location provided by the host.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <BookingCard studio={studio} />
        </div>
      </div>
    </main>
  )
}
