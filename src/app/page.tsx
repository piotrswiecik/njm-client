import { redirect } from "next/navigation";

export default async function HomePage() {
	redirect("/products");
	// TODO implement home page later
	return (
		<div className="mx-auto px-6 sm:px-12">
			Home page
		</div>
	);
}
