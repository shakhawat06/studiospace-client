"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogIn, Menu, UserPlus, X } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Explore Studios", href: "/studios" },
  { label: "How It Works", href: "/host" },
  { label: "About Us", href: "/about" },
]

function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md `supports-[backdrop-filter]:bg-background/60`">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 md:grid-cols-[1fr_auto_1fr]">
        {/* Logo — left side */}
        <Link
          href="/"
          className="flex items-center gap-2 justify-self-start"
          aria-label="StudioSpace home"
        >
          <Image
            src="/image/logo/logo.png"
            height={120}
            width={120}
            alt="logo"
          />
        </Link>

        {/* Menu items — middle */}
        <nav
          aria-label="Main"
          className="hidden items-center justify-center gap-1 md:flex"
        >
          {menuItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:text-[#E47131]",
                  isActive
                    ? "text-[#E47131] font-bold"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Actions — right side */}
        <div className="flex items-center justify-end gap-1.5 justify-self-end">
          <ThemeToggle />
          <Link
            href="/signup"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden sm:inline-flex"
            )}
          >
            <UserPlus data-icon="inline-end" />
            Sign up
          </Link>
          <Link
            href="/signin"
            className={buttonVariants({ variant: "default" })}
          >
            <LogIn data-icon="inline-end" />
            Sign in
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav aria-label="Main" className="border-t bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 p-4">
            {menuItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}

export { Navbar }
