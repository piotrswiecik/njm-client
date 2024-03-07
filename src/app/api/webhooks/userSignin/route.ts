import { currentUser } from "@clerk/nextjs";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
	const payload: unknown = await request.json();
  console.log("sign-in handler active");
	console.log(payload);
  const user = currentUser();
  console.log("currentUser");
  console.log(user);
	return new Response(null, { status: 204 });
}
