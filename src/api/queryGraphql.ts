import { loadEnvConfig } from "@next/env";
import { type TypedDocumentString } from "@/graphql/generated/graphql";

loadEnvConfig(process.cwd());

export const queryGraphql = async <TResult, TVariables>({
	query,
	variables,
	cache,
	headers,
	next,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	variables: TVariables;
	cache?: RequestCache;
	headers?: HeadersInit;
	next?: NextFetchRequestConfig | undefined;
}): Promise<TResult> => {
	const res = await fetch(`${process.env.GRAPHQL_API_URL}`, {
		method: "POST",
		body: JSON.stringify({ query, variables }),
		headers: {
			...headers,
			"Content-Type": "application/json",
		},
		cache,
		next,
	});
	type GraphqlResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse: GraphqlResponse<TResult> =
		(await res.json()) as GraphqlResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new Error(graphqlResponse.errors[0].message);
	}

	return graphqlResponse.data;
};
