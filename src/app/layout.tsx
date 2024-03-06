import type { Metadata } from "next";
import { Inter, Raleway, Hind, Work_Sans, Lato, Nunito, Cantarell } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/ui/organisms/Header";
import { Footer } from "@/ui/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });
const hind = Hind({ subsets: ["latin"], weight: ["300", "400", "500", '600', "700"]});
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["300", "400", "700"] });
const cantarell = Cantarell({ subsets: ["latin"], weight: ["400", "700"] });

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
		<ClerkProvider>
			<html lang="en">
				<body className={`${inter.className} bg-slate-200`}>
					<div className="flex min-h-screen flex-col">
						<div className="grow-0">
							<Header />
						</div>
						<main className="grow sm:mt-4">{children}</main>
						<footer className="grow-0">
							<Footer />
						</footer>
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
