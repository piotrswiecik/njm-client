import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui/organisms/Header";
import { Footer } from "@/ui/organisms/Footer";

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
				<div className="flex min-h-screen flex-col">
					<nav className="grow-0">
						<Header />
					</nav>
					<main className="grow sm:mt-4">{children}</main>
					<footer className="grow-0">
						<Footer />
					</footer>
				</div>
			</body>
		</html>
	);
}
