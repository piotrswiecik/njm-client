import { auth } from "@clerk/nextjs";

export const getUserId = async (): Promise<string | null> => {
	const user = auth();
	if (!user) return null;
	return user.userId;
};
