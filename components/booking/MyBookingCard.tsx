"use client"

import Image from "next/image"
import Link from "next/link"
import {
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiArrowUpRight,
  FiShield,
  FiTrash2,
} from "react-icons/fi"
import type { Booking } from "@/app/types/type"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { getTokenFromClient } from "@/lib/getToken"

const BookingCard = ({ booking }: { booking: Booking }) => {
  const router = useRouter()

  const handleDeleteBooking = async () => {
    const token = await getTokenFromClient()
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/my-bookings/${booking._id}`,
      {
        method: "DELETE",
        headers: { authorization: `Bearer ${token}`}
      }
    )
    const data = await res.json()
    console.log(data)
    if (data.acknowledged == true) {
      router.refresh()
      toast.success('Booking delete successfully')
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:shadow-md">
      <div className="grid md:grid-cols-[280px_1fr]">
        {/* Studio Image */}
        <div className="relative min-h-[220] md:min-h-full">
          <Image
            src={booking.imageURL}
            alt={booking.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 280px"
          />

          <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow">
            {booking.category}
          </span>
        </div>

        {/* Booking Information */}
        <div className="p-5 sm:p-6">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold">{booking.title}</h2>

              <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <FiMapPin className="shrink-0 text-[#E47131]" />
                {booking.location}
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Booking Confirmed
            </span>
          </div>

          {/* Dates */}
          <div className="mt-6 grid gap-4 rounded-xl bg-muted/50 p-4 sm:grid-cols-2">
            <div>
              <p className="text-xs text-muted-foreground">Booking Date</p>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold">
                <FiCalendar className="text-[#E47131]" />
                {booking.bookingDate}
              </p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">Departure Date</p>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold">
                <FiCalendar className="text-[#E47131]" />
                {booking.departureDate}
              </p>
            </div>
          </div>

          {/* Price Details */}
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div>
              <p className="text-xs text-muted-foreground">Hourly Rate</p>
              <p className="mt-1 font-bold">
                ${booking.hourlyRate}
                <span className="text-xs font-normal text-muted-foreground">
                  /hr
                </span>
              </p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">Security Deposit</p>
              <p className="mt-1 font-bold">${booking.securityDeposit}</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">Capacity</p>
              <p className="mt-1 flex items-center gap-1 font-bold">
                <FiUsers className="text-[#E47131]" />
                {booking.maxCapacity} Guests
              </p>
            </div>
          </div>

          {/* Customer and Owner */}
          <div className="mt-5 border-t pt-4">
            <div className="flex flex-wrap justify-between gap-3 text-sm">
              <div>
                <p className="text-xs text-muted-foreground">Booked By</p>
                <p className="mt-1 font-medium">{booking.name}</p>
                <p className="text-xs text-muted-foreground">{booking.email}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Studio Owner</p>
                <p className="mt-1 font-medium">{booking.owner.name}</p>
                <p className="text-xs text-muted-foreground">
                  {booking.owner.email}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t pt-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <FiShield className="text-[#E47131]" />
              Secure booking
            </div>

            <div className="flex justify-end gap-3">
              <Button
                onClick={handleDeleteBooking}
                variant="destructive"
                className="cursor-pointer"
              >
                Remove
                <FiTrash2 />
              </Button>
              {/* <DeleteStudioDialog booking={booking} /> */}

              <Button>
                <Link
                  href={`/studios/${booking._id}`}
                  className="flex items-center gap-2"
                >
                  View Studio
                  <FiArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingCard
