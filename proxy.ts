import { NextRequest, NextResponse } from "next/server"
import { headers } from "next/headers";
import { auth } from "./lib/auth";

export async function proxy(request: NextRequest) {
  // const token = request.cookies.get("token")?.value;
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  })

  const user = session?.user

  if(!user) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }  

  return NextResponse.next()
}

export const config = {
  matcher: ["/add-studio", "/my-bookings", "/wishlist", "/studios/:path+"],
}
