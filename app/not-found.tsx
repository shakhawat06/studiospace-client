
import Link from "next/link";
import { ArrowLeft, Home, Search, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6 py-16">
      <div className="mx-auto w-full max-w-2xl text-center">

        {/* Icon */}
        <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-3xl bg-[#E47131]/10">
          <Video className="h-14 w-14 text-[#E47131]" />

          <span className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#E47131] text-sm font-bold text-white">
            !
          </span>
        </div>

        {/* Error Code */}
        <h1 className="text-8xl font-extrabold tracking-tight text-[#E47131] sm:text-9xl">
          404
        </h1>

        {/* Content */}
        <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Oops! Studio Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Looks like this page has gone off-set! The studio or page you`re
          looking for doesn`t exist, has been moved, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            className="bg-[#E47131] text-white hover:bg-[#cf642a]"
          >
            <Link href="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <Button variant="outline">
            <Link href="/studios" className="flex items-center">
              <Search className="mr-2 h-4 w-4" />
              Explore Studios
            </Link>
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t pt-6">
          <p className="text-sm text-muted-foreground">
            Need help finding your creative space?
          </p>
          <Link
            href="/"
            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#E47131] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to StudioSpace
          </Link>
        </div>

      </div>
    </main>
  );
}
