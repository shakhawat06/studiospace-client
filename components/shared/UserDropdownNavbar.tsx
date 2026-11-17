"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { authClient } from "@/lib/auth-client"
import { LogOutIcon } from "lucide-react"
import Link from "next/link"
import { LuCross, LuLayoutDashboard, LuLayoutPanelTop } from "react-icons/lu"

const UserDropdownNavbar = () => {
  const { data: session } = authClient.useSession()
  const user = session?.user

  const handleSignOut = () => {
    authClient.signOut()
  }

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage
                  referrerPolicy="no-referrer"
                  src={user?.image as string}
                  alt="shadcn"
                />
                <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </Button>
          }
        />
        <DropdownMenuContent className="w-full">
          <DropdownMenuGroup>
            <div className="flex items-center p-2 text-neutral-300">
              <div className="mr-3">
                <Avatar>
                  <AvatarImage
                    referrerPolicy="no-referrer"
                    src={user?.image as string}
                    alt="shadcn"
                  />
                  <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-gray-800 dark:text-neutral-400">
                <p>{user?.name}</p>
                <p>{user?.email}</p>
              </div>
            </div>
            <DropdownMenuSeparator />
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
              <Link href="/my-bookings" className="flex items-center gap-2">
                <LuLayoutPanelTop />
                My Bookings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem variant="destructive">
              <button onClick={handleSignOut}>
                <Link href="" className="flex items-center gap-2">
                  <LogOutIcon />
                  Log out
                </Link>
              </button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      
    </div>
  )
}

export default UserDropdownNavbar
