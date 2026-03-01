export { auth as proxy } from "@/auth";

// checks every file except the ones listed
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// }

// checks only the listed files
export const config = {
  matcher: ["/dashboard", "/transactions", "/categories", "/settings"],
};
