import type { Booking } from "@/app/types/type"
import Link from "next/link"
import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import { getTokenFromServer } from "@/lib/getTokenFromServer"
import MyWishlistCard from "@/components/wishlist/MyWishlistCard"

const MyWishlistPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  })

  const user = session?.user

  const token = await getTokenFromServer()

  const res = await fetch(`http://localhost:8000/wishlist/${user?.email}`, {
    headers: { authorization: `Bearer ${token}`}
  })
  const bookings: Booking[] = await res.json()

  if (!res.ok) {
    throw new Error("Failed to fetch bookings")
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-wider text-[#E47131] uppercase">
            StudioSpace Dashboard
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">My Wishlist</h1>

          <p className="mt-3 text-muted-foreground">
            Manage and track all your studio reservations in one place.
          </p>
        </div>

        {/* Booking Summary */}
        <div className="mb-8 rounded-2xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Total Bookings</p>
          <h2 className="mt-2 text-3xl font-bold">{bookings.length}</h2>
        </div>

        {/* Booking List */}
        {bookings.length > 0 ? (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <MyWishlistCard key={booking._id} booking={booking} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed py-16 text-center">
            <h2 className="text-xl font-semibold">No bookings yet</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              You haven`t booked any studios yet.
            </p>

            <Link
              href="/studios"
              className="mt-5 inline-flex rounded-xl bg-[#E47131] px-5 py-3 text-sm font-semibold text-white hover:bg-[#cb6026]"
            >
              Explore Studios
            </Link>
          </div>
        )}
      </section>
    </main>
  )
}

export default MyWishlistPage
