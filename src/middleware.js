import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const dummyData = {
    role: "user",
    email: "test@admin.com",
  };

  let isServicesPage = request.nextUrl.pathname.startsWith("/services");
  let isAdmin = dummyData.role == "user";

  if (isServicesPage && !isAdmin)
    return NextResponse.redirect(new URL("/", request.url));

  return NextResponse.next();
}
