import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: ["/","/api/search"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};