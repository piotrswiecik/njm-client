/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "*", port: "" },
		],
	},
};

export default nextConfig;
