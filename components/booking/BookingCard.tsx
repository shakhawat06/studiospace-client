"use client"

import { Button } from "@base-ui/react"
import { FiArrowUpRight, FiShield, FiCalendar } from "react-icons/fi"
import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { POST } from "@/app/api/auth/[...all]/route"

const BookingCard = ({ studio }) => {
  const [bookingDate, setBookingDate] = useState("")

  const today = new Date().toISOString().split("T")[0]

  const { data: session } = authClient.useSession()
  const user = session?.user

  const handleBooking = async (e) => {
    e.preventDefault()

    console.log(bookingDate)

    const data = {
      name: user?.name,
      email: user?.email,
      image: user?.image,
      ...studio,
      departureDate: bookingDate,
      bookingDate: today
    }

    const res = await fetch(`http://localhost:8000/booking`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    const bookingRes = await res.json()
    console.log(bookingRes);
    
  }

  return (
    <div>
      <aside className="lg:col-span-1">
        <div className="sticky top-24 rounded-2xl border bg-card p-5 shadow-sm sm:p-6">
          {/* Price */}
          <div className="flex items-end justify-between border-b pb-5">
            <div>
              <span className="text-sm text-muted-foreground">
                Starting from
              </span>
              <h2 className="mt-1 text-3xl font-bold">
                ${studio.hourlyRate}
                <span className="text-base font-normal text-muted-foreground">
                  {" "}
                  / hour
                </span>
              </h2>
            </div>
          </div>

          {/* Price Details */}
          <div className="space-y-4 border-b py-5">
            <div className="flex justify-between gap-3 text-sm">
              <span className="text-muted-foreground">Hourly rental rate</span>
              <span className="font-semibold">${studio.hourlyRate}</span>
            </div>

            <div className="flex justify-between gap-3 text-sm">
              <span className="text-muted-foreground">Security deposit</span>
              <span className="font-semibold">
                ${studio.securityDeposit ?? 0}
              </span>
            </div>

            <div className="flex justify-between gap-3 text-sm">
              <span className="text-muted-foreground">Capacity</span>
              <span className="font-semibold">{studio.maxCapacity} Guests</span>
            </div>
          </div>

          {/* Booking Date */}
          <div className="border-b py-5">
            <label
              htmlFor="booking-date"
              className="mb-2 flex items-center gap-2 text-sm font-semibold"
            >
              <FiCalendar className="text-[#E47131]" />
              Select Booking Date
            </label>

            <form onSubmit={handleBooking}>
              <input
                id="booking-date"
                type="date"
                min={today}
                defaultValue={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="h-12 w-full rounded-xl border bg-background px-3 text-sm transition outline-none focus:border-[#E47131] focus:ring-2 focus:ring-[#E47131]/20"
              />

              <Button
                type="submit"
                className="mt-5 cursor-pointer flex h-12 w-full items-center justify-center rounded-xl bg-[#E47131] text-base font-semibold text-white hover:bg-[#cb6026]"
                disabled={!bookingDate}
              >
                Book This Studio
                <FiArrowUpRight className="ml-2" />
              </Button>
            </form>
          </div>

          {/* Booking CTA */}
          <div className="pt-5">
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Booking details and availability are subject to confirmation.
            </p>
          </div>

          {/* Trust Information */}
          <div className="mt-6 rounded-xl bg-muted/60 p-4">
            <div className="flex items-start gap-3">
              <FiShield className="mt-0.5 shrink-0 text-xl text-[#E47131]" />
              <div>
                <h4 className="text-sm font-semibold">Secure Booking</h4>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Review your booking details before confirming your
                  reservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default BookingCard
