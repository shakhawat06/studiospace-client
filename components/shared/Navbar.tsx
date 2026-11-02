"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogIn, Menu, UserPlus, X } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

import { LogOutIcon } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  LuCircleUser,
  LuCross,
  LuLayoutDashboard,
  LuLayoutPanelTop,
  LuList,
} from "react-icons/lu"

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
    <header className="`supports-[backdrop-filter]:bg-background/60` sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
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
                    ? "font-bold text-[#E47131]"
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

          {/* dropdown menu */}
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline">
                  <LuCircleUser />
                </Button>
              }
            />
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="" className="flex items-center gap-2">
                  <LuLayoutDashboard />
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/add-studio" className="flex items-center gap-2">
                  <LuCross />
                  Add New Studio
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="" className="flex items-center gap-2">
                  <LuList />
                  My Studio Listings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="" className="flex items-center gap-2">
                  <LuLayoutPanelTop />
                  My Bookings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <Link href="" className="flex items-center gap-2">
                  <LogOutIcon />
                  Log out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
