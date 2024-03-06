import {
	createUser,
	type UserRegistrationProps,
} from "@/api/mutations/createUser";

export const createNewUserAction = async ({
	userId,
	name,
	email,
}: UserRegistrationProps) => {
	await createUser({ userId, name, email });
};
