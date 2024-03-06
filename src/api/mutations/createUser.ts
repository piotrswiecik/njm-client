import { queryGraphql } from "@/api/queryGraphql";
import { UserCreateDocument } from "@/graphql/generated/graphql";

export type UserRegistrationProps = {
  userId: string;
  email: string;
  name: string;
};

export const createUser = async ({ userId, email, name }: UserRegistrationProps) => {
	const { createUser } = await queryGraphql({
		query: UserCreateDocument,
		variables: {
			createUserId: userId,
      email,
      name
		},
		next: {
			tags: ["review"],
		},
	});
  if (!createUser || !createUser.id) {
    throw new Error("User not created");
  }
};