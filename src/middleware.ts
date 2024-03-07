import { authMiddleware } from "@clerk/nextjs";

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default authMiddleware({
	publicRoutes: [
		"/",
		"/search",
		"/cart",
		"/cart/cancelled",
		"/categories/(.*)",
		"/collections/(.*)",
		"/product/(.*)",
		"/products",
		"/api/webhooks/userCreated",
		"/api/webhooks/revalidate"
	],
});
