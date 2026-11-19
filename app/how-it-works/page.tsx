
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Headphones,
  Sparkles,
  Camera,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import HowBookingWorks from "@/components/home/HowBookingWorks";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trusted Creative Spaces",
    description:
      "Explore studio spaces with detailed information, facilities, and transparent pricing.",
  },
  {
    icon: Clock,
    title: "Simple Booking Process",
    description:
      "Find your ideal studio and submit your booking request in just a few simple steps.",
  },
  {
    icon: Headphones,
    title: "Creator Support",
    description:
      "Get support throughout your booking journey whenever you need assistance.",
  },
];

const features = [
  "Explore multiple studio categories",
  "Compare studio facilities and prices",
  "Choose your preferred booking date",
  "Manage your studio bookings",
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white dark:bg-gray-950">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#171717] px-4 py-24 text-white sm:px-6 lg:py-32">

        {/* Background Decorations */}
        <div className="absolute -left-32 -top-32 size-96 rounded-full bg-[#E47131]/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 size-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Hero Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E47131]/40 bg-[#E47131]/10 px-4 py-2 text-sm font-semibold text-[#F39A69]">
              <Sparkles size={16} />
              YOUR CREATIVE JOURNEY STARTS HERE
            </div>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Booking Your Perfect
              <span className="block text-[#E47131]">
                Studio Made Easy.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
              Finding the right creative space shouldn`t be complicated.
              StudioSpace makes discovering and booking studios simple,
              convenient, and hassle-free.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                className="h-12 bg-[#E47131] px-7 text-white hover:bg-[#cf642a]"
              >
                <Link className="flex items-center" href="/studios">
                  Explore Studios
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                className="h-12 border-white/30 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rotate-6 rounded-3xl bg-[#E47131]/20 blur-sm" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900 p-5 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-gray-400">
                    Your creative journey
                  </p>
                  <h3 className="mt-1 text-xl font-bold">
                    Made simple.
                  </h3>
                </div>

                <div className="flex size-12 items-center justify-center rounded-xl bg-[#E47131]/15 text-[#E47131]">
                  <Camera size={26} />
                </div>
              </div>

              <div className="mt-7 space-y-5">
                {[
                  "Discover your studio",
                  "Choose your schedule",
                  "Confirm your booking",
                  "Start creating",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#E47131] font-bold text-white">
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <p className="font-semibold">{item}</p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-[#E47131]"
                          style={{
                            width: `${100 - index * 15}%`,
                          }}
                        />
                      </div>
                    </div>

                    <CheckCircle2
                      className="shrink-0 text-[#E47131]"
                      size={20}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-[#E47131]/10 p-5">
                <p className="text-sm text-gray-300">
                  Your next creative project starts with the perfect space.
                </p>
                <p className="mt-2 font-bold text-[#F39A69]">
                  Find it. Book it. Create it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Booking Steps Component */}
      <HowBookingWorks />

      {/* Why Choose StudioSpace */}
      <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900/50 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="font-bold uppercase tracking-widest text-[#E47131]">
              Why StudioSpace?
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-gray-950 dark:text-white sm:text-4xl">
              Everything You Need to
              <span className="text-[#E47131]"> Create More</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
              We bring creative spaces and creators together through
              a convenient studio booking experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#E47131]/40 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
                >
                  <div className="flex size-14 items-center justify-center rounded-xl bg-[#E47131]/10 text-[#E47131]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-950 dark:text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="font-bold uppercase tracking-widest text-[#E47131]">
              One Platform. Endless Possibilities.
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-gray-950 dark:text-white sm:text-4xl">
              Everything for Your Next Creative Project
            </h2>

            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
              Whether you`re a photographer, filmmaker, podcaster,
              musician, or artist, discover a space that matches
              your creative vision.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-[#E47131]" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              className="mt-9 h-12 bg-[#E47131] text-white hover:bg-[#cf642a]"
            >
              <Link className="flex items-center px-2" href="/studios">
                Browse Available Studios
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[#E47131]/10 blur-2xl" />

            <div className="relative rounded-3xl border bg-white p-7 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:p-10">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    StudioSpace Experience
                  </p>
                  <h3 className="mt-1 text-2xl font-bold dark:text-white">
                    Your Creative Hub
                  </h3>
                </div>

                <div className="flex size-14 items-center justify-center rounded-2xl bg-[#E47131]/10 text-[#E47131]">
                  <Camera size={30} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "📸", name: "Photo Studios" },
                  { icon: "🎬", name: "Sound Stages" },
                  { icon: "🎙️", name: "Podcast Rooms" },
                  { icon: "🎵", name: "Music Suites" },
                  { icon: "🎨", name: "Art Workshops" },
                  { icon: "✨", name: "Creative Spaces" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl border bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-950"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="mt-3 text-sm font-semibold dark:text-white">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#171717] px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute -right-20 -top-20 size-72 rounded-full bg-[#E47131]/20 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-[#E47131]/15 text-[#E47131]">
              <Sparkles size={32} />
            </div>

            <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-extrabold sm:text-4xl">
              Your Next Big Idea Deserves the Perfect Studio.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-300">
              Stop searching and start creating. Discover your ideal
              creative space with StudioSpace today.
            </p>

            <Button
              className="mt-9 h-12 bg-[#E47131] px-8 text-white hover:bg-[#cf642a]"
            >
              <Link className="flex items-center" href="/studios">
                Find Your Studio
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
