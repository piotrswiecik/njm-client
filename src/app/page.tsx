import { Footer } from "@/ui/Footer";
import { Header } from "@/ui/Header";

export default function Home() {
	return (
		<div className="flex min-h-screen w-full flex-col items-center justify-between">
			<Header />
			<main className="text-4xl">main</main>
			<Footer />
		</div>
	);
}
