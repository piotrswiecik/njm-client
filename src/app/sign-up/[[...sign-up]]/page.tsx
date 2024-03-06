import { SignUp } from "@clerk/nextjs";
import SignUpSuccess from "@/ui/organisms/SignUpSuccess";

export default async function Page({
	params,
}: {
	params: { [key: string]: string[] };
}) {
	if (params["sign-up"] && params["sign-up"].find((i) => i === "success")) {
		return <SignUpSuccess />;
	}

	return <SignUp />;
}
