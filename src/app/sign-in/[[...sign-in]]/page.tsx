import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="m-auto mt-12 flex flex-row justify-center">
			<SignIn />
		</div>
	);
}
