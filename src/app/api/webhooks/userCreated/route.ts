import { type NextRequest } from "next/server";
import { createUser } from "@/api/mutations/createUser";

type EmailAddressMinimalPayload = {
	email_address?: string;
	verification: {
		status: string;
	};
};

type UserCreatedWebhookMinimalPayload = {
	object: string;
	data: {
		id: string;
		username?: string;
		email_addresses: EmailAddressMinimalPayload[];
	};
	type: string;
};

export async function POST(request: NextRequest): Promise<Response> {
	const payload =
		(await request.json()) as UserCreatedWebhookMinimalPayload | null;

	// TODO: handle this case properly - eventual consistency
	if (!payload) {
		console.error("Invalid Clerk API webhook call");
		return new Response(null, { status: 400 });
	}

	// TODO: handle this case properly - eventual consistency
	if (
		!payload.data.username ||
		!payload.data.email_addresses[0].email_address
	) {
		console.error("Invalid Clerk API webhook call");
		return new Response(null, { status: 400 });
	}

  // TODO: handle api error / resend
	await createUser({
		userId: payload.data.id,
		name: payload.data.username,
		email: payload.data.email_addresses[0].email_address,
	});

	console.log("User created");
	console.log({
		userId: payload.data.id,
		name: payload.data.username,
		email: payload.data.email_addresses[0].email_address,
	});

	return new Response(null, { status: 204 });
}
