import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui/components/Header";
import { Footer } from "@/ui/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NJM Store",
	description: "Next.js Masters webstore",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-slate-200`}>
				<div className="flex min-h-screen flex-col justify-between">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
