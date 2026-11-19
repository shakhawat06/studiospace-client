import Link from "next/link"
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Lightbulb,
  ShieldCheck,
  Users,
  Camera,
  Sparkles,
  Globe,
  Handshake,
  Palette,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Lightbulb,
    title: "Creativity First",
    description:
      "We believe every great idea deserves the right environment. We help creators find spaces where inspiration can grow.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "We value honest information, transparent pricing, and a reliable experience for both creators and studio hosts.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "We bring creators, artists, and studio owners together to build a stronger creative community.",
  },
  {
    icon: Heart,
    title: "Customer Focused",
    description:
      "We put creators first by making the process of discovering and booking creative spaces simple and convenient.",
  },
]

const studioTypes = [
  {
    icon: Camera,
    title: "Photography Studios",
    description: "Perfect spaces for photography and visual storytelling.",
  },
  {
    icon: Globe,
    title: "Sound Stages",
    description: "Creative environments for filming and production.",
  },
  {
    icon: Users,
    title: "Podcast Rooms",
    description: "Dedicated spaces for conversations and recordings.",
  },
  {
    icon: Lightbulb,
    title: "Music Suites",
    description: "Spaces designed for musicians and sound creators.",
  },
  {
    icon: Palette,
    title: "Art Workshops",
    description: "Inspiring environments for artists and makers.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#171717] px-4 py-24 text-white sm:px-6 lg:py-32">
        <div className="absolute -top-32 -left-32 size-96 rounded-full bg-[#E47131]/20 blur-3xl" />
        <div className="absolute -right-20 -bottom-40 size-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E47131]/40 bg-[#E47131]/10 px-5 py-2 text-sm font-semibold text-[#F39A69]">
              <Sparkles size={16} />
              GET TO KNOW STUDIOSPACE
            </div>

            <h1 className="text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
              Where Creativity
              <span className="block text-[#E47131]">Finds Its Space.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              We believe every great idea deserves the perfect space.
              StudioSpace connects creators with inspiring studios to make their
              creative visions a reality.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Button className="h-12 bg-[#E47131] px-7 text-white hover:bg-[#cf642a]">
                <Link className="flex items-center" href="/studios">
                  Explore Studios
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                className="h-12 border-white/30 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/how-it-works">How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* Story Visual */}
          <div className="relative">
            <div className="absolute -top-5 -left-5 size-32 rounded-3xl bg-[#E47131]/10" />

            <div className="relative rounded-3xl border bg-gray-50 p-5 sm:p-8 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center justify-between border-b border-gray-200 pb-6 dark:border-gray-800">
                <div>
                  <p className="text-sm text-gray-500">The StudioSpace Idea</p>
                  <h3 className="mt-1 text-2xl font-bold dark:text-white">
                    Space to Create.
                  </h3>
                </div>

                <div className="flex size-14 items-center justify-center rounded-2xl bg-[#E47131]/10 text-[#E47131]">
                  <Camera size={30} />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                {studioTypes.map((studio) => {
                  const Icon = studio.icon

                  return (
                    <div
                      key={studio.title}
                      className="rounded-2xl border bg-white p-4 dark:border-gray-800 dark:bg-gray-950"
                    >
                      <div className="flex size-11 items-center justify-center rounded-xl bg-[#E47131]/10 text-[#E47131]">
                        <Icon size={23} />
                      </div>

                      <h4 className="mt-4 text-sm font-bold dark:text-white">
                        {studio.title}
                      </h4>

                      <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                        {studio.description}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="mt-5 rounded-2xl bg-[#E47131] p-5 text-white">
                <p className="text-sm font-medium text-white/80">
                  Our philosophy
                </p>
                <h3 className="mt-1 text-xl font-bold">
                  Find It. Book It. Create It.
                </h3>
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div>
            <span className="font-bold tracking-widest text-[#E47131] uppercase">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-gray-950 sm:text-4xl dark:text-white">
              Bringing Creative Spaces and People Together
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-gray-600 dark:text-gray-400">
              <p>
                Every creative project starts with an idea. But finding the
                right space to bring that idea to life can sometimes be
                challenging.
              </p>

              <p>
                That is where StudioSpace comes in. We are building a platform
                that makes discovering and booking creative spaces easier for
                photographers, filmmakers, podcasters, musicians, artists, and
                other creators.
              </p>

              <p>
                From professional photography studios to podcast rooms and art
                workshops, our goal is to connect people with spaces that
                support their creativity and help them do their best work.
              </p>
            </div>

            <Button className="mt-8 h-12 bg-[#E47131] text-white hover:bg-[#cf642a]">
              <Link className="flex items-center" href="/studios">
                Discover Our Spaces
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:py-24 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="font-bold tracking-widest text-[#E47131] uppercase">
              Our Purpose
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-gray-950 sm:text-4xl dark:text-white">
              What Drives Us Forward
            </h2>

            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
              We are passionate about making creative opportunities more
              accessible and bringing the creative community closer.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {/* Mission */}
            <div className="group rounded-3xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#E47131]/40 hover:shadow-xl sm:p-10 dark:border-gray-800 dark:bg-gray-950">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-[#E47131]/10 text-[#E47131] transition-colors group-hover:bg-[#E47131] group-hover:text-white">
                <Target size={32} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-gray-950 dark:text-white">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-gray-600 dark:text-gray-400">
                To make creative spaces easier to discover and book by
                connecting creators with studio owners through a simple,
                accessible, and convenient platform.
              </p>
            </div>

            {/* Vision */}
            <div className="group rounded-3xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#E47131]/40 hover:shadow-xl sm:p-10 dark:border-gray-800 dark:bg-gray-950">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-[#E47131]/10 text-[#E47131] transition-colors group-hover:bg-[#E47131] group-hover:text-white">
                <Eye size={32} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-gray-950 dark:text-white">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-gray-600 dark:text-gray-400">
                To build a connected creative community where individuals and
                businesses can access inspiring spaces and turn their ideas into
                meaningful work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="font-bold tracking-widest text-[#E47131] uppercase">
              What We Believe In
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-gray-950 sm:text-4xl dark:text-white">
              Our Core Values
            </h2>

            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
              The principles that guide everything we do and shape the
              experience we want to create.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#E47131]/40 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
                >
                  <div className="flex size-14 items-center justify-center rounded-xl bg-[#E47131]/10 text-[#E47131] transition-colors group-hover:bg-[#E47131] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-950 dark:text-white">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#171717] px-6 py-16 text-center text-white sm:px-12 sm:py-24">
          <div className="absolute -top-20 -left-20 size-72 rounded-full bg-[#E47131]/20 blur-3xl" />
          <div className="absolute -right-20 -bottom-24 size-72 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-[#E47131]/15 text-[#E47131]">
              <Handshake size={32} />
            </div>

            <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-extrabold sm:text-4xl">
              Be Part of Something Creative.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-300">
              Whether you are looking for the perfect studio or want to share
              your creative space with others, StudioSpace is here to connect
              you.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Button className="h-12 bg-[#E47131] px-7 text-white hover:bg-[#cf642a]">
                <Link className="flex items-center" href="/studios">
                  Explore Studios
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                className="h-12 border-white/30 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/host">Become a Host</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
