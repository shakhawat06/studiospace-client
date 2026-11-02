"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import {
  LogIn,
  Menu,
  UserPlus,
  X,
  ChevronDown,
  LayoutDashboard,
  PlusCircle,
  Building2,
  CalendarCheck,
  LogOut,
  UserRound,
} from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Explore Studios", href: "/studios" },
  { label: "How It Works", href: "/host" },
  { label: "About Us", href: "/about" },
]

type NavbarProps = {
  isAuthenticated?: boolean
  userName?: string
  onLogout?: () => void | Promise<void>
}

function Navmenu({
  isAuthenticated = false,
  userName = "My Account",
  onLogout,
}: NavbarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [loggingOut, setLoggingOut] = React.useState(false)

  const handleLogout = async () => {
    if (!onLogout || loggingOut) return

    try {
      setLoggingOut(true)
      await onLogout()
      setOpen(false)
      router.push("/")
      router.refresh()
    } catch (error) {
      console.error("Logout failed:", error)
    } finally {
      setLoggingOut(false)
    }
  }

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 md:grid-cols-[1fr_auto_1fr]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-self-start"
          aria-label="StudioSpace home"
        >
          <Image
            src="/image/logo/logo.png"
            height={120}
            width={120}
            alt="StudioSpace logo"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main"
          className="hidden items-center justify-center gap-1 md:flex"
        >
          {menuItems.map((item) => {
            const active = isActive(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:text-[#E47131]",
                  active ? "font-bold text-[#E47131]" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center justify-end gap-1.5 justify-self-end">
          <ThemeToggle />

          {!isAuthenticated ? (
            <>
              <Link
                href="/signup"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "hidden sm:inline-flex"
                )}
              >
                <UserPlus className="size-4" />
                Sign up
              </Link>

              <Link
                href="/signin"
                className={buttonVariants({ variant: "default" })}
              >
                <LogIn className="size-4" />
                <span className="xs:inline hidden">Sign in</span>
                <span className="xs:hidden">Login</span>
              </Link>
            </>
          ) : (
            /* Profile Dropdown */
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 rounded-full">
                  <UserRound className="size-4" />
                  <span className="hidden max-w-28 truncate sm:inline">
                    {userName}
                  </span>
                  <ChevronDown className="size-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>{userName}</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link href="/dashboard">
                    <LayoutDashboard />
                    Dashboard
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/dashboard/add-studio">
                    <PlusCircle />
                    Add New Studio
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/dashboard/my-studios">
                    <Building2 />
                    My Studio Listings
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/dashboard/my-bookings">
                    <CalendarCheck />
                    My Bookings
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  disabled={loggingOut || !onLogout}
                  onSelect={(event) => {
                    event.preventDefault()
                    void handleLogout()
                  }}
                  className="cursor-pointer text-destructive focus:text-destructive"
                >
                  <LogOut />
                  {loggingOut ? "Logging out..." : "Logout"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t bg-background md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 p-4">
            {menuItems.map((item) => {
              const active = isActive(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-[#E47131]",
                    active
                      ? "bg-muted font-bold text-[#E47131]"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* Mobile Auth Links */}
            {!isAuthenticated ? (
              <div className="mt-3 grid grid-cols-2 gap-2 border-t pt-4">
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full"
                  )}
                >
                  <UserPlus />
                  Sign up
                </Link>

                <Link
                  href="/signin"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full"
                  )}
                >
                  <LogIn />
                  Sign in
                </Link>
              </div>
            ) : (
              <div className="mt-3 flex flex-col gap-1 border-t pt-4">
                <p className="px-3 py-2 text-sm font-semibold">{userName}</p>

                {[
                  { label: "Dashboard", href: "/dashboard" },
                  {
                    label: "Add New Studio",
                    href: "/dashboard/add-studio",
                  },
                  {
                    label: "My Studio Listings",
                    href: "/dashboard/my-studios",
                  },
                  {
                    label: "My Bookings",
                    href: "/dashboard/my-bookings",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}

                <Button
                  variant="ghost"
                  disabled={loggingOut || !onLogout}
                  className="mt-1 justify-start text-destructive"
                  onClick={() => void handleLogout()}
                >
                  <LogOut />
                  {loggingOut ? "Logging out..." : "Logout"}
                </Button>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  )
}

export { Navmenu }
