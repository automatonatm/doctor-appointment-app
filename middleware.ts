import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const { isAuthenticated } = getKindeServerSession();

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (!(await isAuthenticated())) {
    
    return NextResponse.redirect(
      new URL(
        "/api/auth/login",
        request.url
      ),
    );
  }
  //return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/details/:path*"],
};
