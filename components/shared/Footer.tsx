"use client"

import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

import { LuInstagram, LuFacebook, LuYoutube, LuLinkedin } from "react-icons/lu"
import Image from "next/image"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Explore Studios", href: "/studios" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
]

const studioCategories = [
  { name: "Photo Studios", href: "/category/photo-studios" },
  { name: "Sound Stages", href: "/category/sound-stages" },
  { name: "Podcast Rooms", href: "/category/podcast-rooms" },
  { name: "Music Suites", href: "/category/music-suites" },
  { name: "Art Workshops", href: "/category/art-workshops" },
]

function XLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.634 7.584H.478l8.6-9.83L0 1.154h7.594l5.243 6.932zm-1.291 19.49h2.039L6.486 3.24H4.298z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 text-gray-700 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Four Column Layout */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-16">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex size-11 items-center justify-center rounded-xl text-white shadow-lg">
                <Image
                  src="/image/logo/onlyLogo.png"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </div>

              <span className="text-2xl font-extrabold tracking-tight text-[#199789] dark:text-[#199789]">
                Studio
                <span className="text-[#E47131] dark:text-[#E47131]">
                  Space
                </span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400">
              Your creative space, your way. Discover and book inspiring studios
              for photography, filmmaking, podcasting, music production, and
              everything in between.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="#"
                aria-label="X"
                className="flex size-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-[#E47131] hover:bg-[#E47131] hover:text-white dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-[#E47131] dark:hover:bg-[#E47131] dark:hover:text-white"
              >
                <LuInstagram />
              </Link>
              <Link
                href="#"
                aria-label="X"
                className="flex size-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-[#E47131] hover:bg-[#E47131] hover:text-white dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-[#E47131] dark:hover:bg-[#E47131] dark:hover:text-white"
              >
                <LuFacebook />
              </Link>
              <Link
                href="#"
                aria-label="X"
                className="flex size-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-[#E47131] hover:bg-[#E47131] hover:text-white dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-[#E47131] dark:hover:bg-[#E47131] dark:hover:text-white"
              >
                <LuYoutube />
              </Link>
              <Link
                href="#"
                aria-label="X"
                className="flex size-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-[#E47131] hover:bg-[#E47131] hover:text-white dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-[#E47131] dark:hover:bg-[#E47131] dark:hover:text-white"
              >
                <LuLinkedin />
              </Link>

              <Link
                href="#"
                aria-label="X"
                className="flex size-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-[#E47131] hover:bg-[#E47131] hover:text-white dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-[#E47131] dark:hover:bg-[#E47131] dark:hover:text-white"
              >
                <XLogo />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-6 text-base font-bold text-gray-950 dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#E47131] dark:text-gray-400 dark:hover:text-[#E47131]"
                  >
                    <span className="size-1.5 rounded-full bg-gray-300 transition-colors group-hover:bg-[#E47131] dark:bg-gray-700" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="mb-6 text-base font-bold text-gray-950 dark:text-white">
              Studio Categories
            </h3>

            <ul className="space-y-4">
              {studioCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#E47131] dark:text-gray-400 dark:hover:text-[#E47131]"
                  >
                    <span className="size-1.5 rounded-full bg-gray-300 transition-colors group-hover:bg-[#E47131] dark:bg-gray-700" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="mb-4 text-base font-bold text-gray-950 dark:text-white">
              Stay in the Creative Loop
            </h3>

            <p className="mb-6 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Subscribe to get studio updates, creative tips, special offers,
              and inspiration delivered to your inbox.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>

              <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 transition-colors focus-within:border-[#E47131] dark:border-gray-800 dark:bg-gray-900">
                <Mail className="size-4 shrink-0 text-gray-400" />

                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="min-w-0 flex-1 bg-transparent py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#E47131] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#E47131]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ce6126] hover:shadow-lg"
              >
                Subscribe
                <ArrowRight className="size-4" />
              </button>
            </form>

            <p className="mt-3 text-xs leading-5 text-gray-500 dark:text-gray-500">
              By subscribing, you agree to receive occasional updates.
            </p>
          </div>
        </div>

        {/* Copyright & Legal Links */}
        <div className="flex flex-col gap-4 border-t border-gray-200 py-6 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800">
          <p className="text-center text-xs text-gray-500 sm:text-left dark:text-gray-500">
            © {new Date().getFullYear()} StudioSpace. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-gray-500 dark:text-gray-400">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#E47131]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#E47131]"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookies"
              className="transition-colors hover:text-[#E47131]"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
