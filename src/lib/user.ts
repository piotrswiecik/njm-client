import { currentUser } from "@clerk/nextjs";
import { getUserById } from "@/api/queries/getUserById";
import { type UserDetailsFragment } from "@/graphql/generated/graphql";

/**
 * Converts Clerk user instance based on client side cookie to database user instance.
 * If user is not logged in, returns undefined.
 * @returns UserDetailsFragment representing GQL user query result or undefined.
 */
export const getCurrentDbUser = async () => {
	const user = await currentUser();
	let activeUser: UserDetailsFragment | undefined;
	if (user) {
		const dbUser = await getUserById(user.id);
		if (dbUser) {
			activeUser = dbUser;
		}
	}
  return activeUser;
};
