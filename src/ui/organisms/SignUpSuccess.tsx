import Image from "next/image";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs";
import { createNewUserAction } from "@/actions/createNewUserAction";

/**
 * Display welcome message for new user & trigger gql mutation to add user profile to db.
 * This assumes that user is auto-logged-in after sign-up!
 */
const SignUpSuccess = async () => {
	const user = await currentUser();
	if (!user || !user.id) {
		// TODO: consider how to handle this scenario
		// 1. there should be a redirect
		// 2. there should be a mechanism to register user in db on first successful login to store
		console.error("oops, no user!!!");
		throw new Error("User signup failed!");
	}
	await createNewUserAction({
		userId: user.id,
		email: user.emailAddresses[0].emailAddress,
		name:
			user.username || user.firstName || user.emailAddresses[0].emailAddress,
	});

	return (
		<>
			<div className="mx-auto flex w-10/12 max-w-7xl flex-row sm:px-12">
				<div className="">
					<div className="max-w-md">
						<h1 className="py-4 text-2xl font-bold">
							Thank you for registering!
						</h1>
					</div>
					<div className="max-w-md">
						<p className="py-4 text-slate-600">
							Welcome to the Next.js Masters record store! We are excited to
							have you join our community.
						</p>
						<p className="py-4 text-slate-600">
							As a registered user, you can now access your profile, make
							purchases and review items.
						</p>
						<p className="py-4 text-slate-600">
							Continue to our{" "}
							<Link
								href={"/"}
								className="font-semibold text-slate-700 hover:underline"
							>
								main page
							</Link>
							.
						</p>
					</div>
				</div>
				<div className="">
					<Image
						src="https://images.unsplash.com/photo-1605055510925-4c9626126167?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="welcome-page-img"
						width={400}
						height={400}
						className="hidden rounded-lg opacity-70 shadow-lg saturate-50 lg:block"
					/>
				</div>
			</div>
		</>
	);
};

export default SignUpSuccess;
