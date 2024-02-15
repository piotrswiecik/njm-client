import { Footer } from "@/ui/organisms/Footer";
import { Header } from "@/ui/organisms/Header";
import ProductDashboard from "@/ui/organisms/ProductDashboard";

export default function Home() {
	return (
		<div className="flex min-h-screen w-full flex-col items-center justify-between">
			<Header />
			<ProductDashboard/>
			<Footer />
		</div>
	);
}
