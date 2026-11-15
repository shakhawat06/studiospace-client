"use client";

import { Button } from "@base-ui/react";
import Link from "next/link";
import { FiArrowUpRight, FiShield, FiCalendar } from "react-icons/fi";
import { useState } from "react";

const BookingCard = ({ studio }) => {
  const [bookingDate, setBookingDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

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
                  {" "}/ hour
                </span>
              </h2>
            </div>
          </div>

          {/* Price Details */}
          <div className="space-y-4 border-b py-5">
            <div className="flex justify-between gap-3 text-sm">
              <span className="text-muted-foreground">
                Hourly rental rate
              </span>
              <span className="font-semibold">${studio.hourlyRate}</span>
            </div>

            <div className="flex justify-between gap-3 text-sm">
              <span className="text-muted-foreground">
                Security deposit
              </span>
              <span className="font-semibold">
                ${studio.securityDeposit ?? 0}
              </span>
            </div>

            <div className="flex justify-between gap-3 text-sm">
              <span className="text-muted-foreground">Capacity</span>
              <span className="font-semibold">
                {studio.maxCapacity} Guests
              </span>
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

            <input
              id="booking-date"
              type="date"
              min={today}
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              className="h-12 w-full rounded-xl border bg-background px-3 text-sm outline-none transition focus:border-[#E47131] focus:ring-2 focus:ring-[#E47131]/20"
            />
          </div>

          {/* Booking CTA */}
          <div className="pt-5">
            <Button
              className="h-12 w-full rounded-xl bg-[#E47131] text-base font-semibold text-white hover:bg-[#cb6026]"
              disabled={!bookingDate}
            >
              <Link
                className="flex items-center justify-center px-5"
                href={`/studios/${studio._id}/book?date=${bookingDate}`}
              >
                Book This Studio
                <FiArrowUpRight className="ml-2" />
              </Link>
            </Button>

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
  );
};

export default BookingCard;