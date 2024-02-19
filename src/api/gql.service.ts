import { loadEnvConfig } from "@next/env";
import { type TypedDocumentString } from "@/gql/graphql";

loadEnvConfig(process.cwd());

const queryGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {

	const res = await fetch(`${process.env.GRAPHQL_API_URL}`, {
		method: "POST",
		body: JSON.stringify({ query, variables }),
		headers: {
			"Content-Type": "application/json",
		},
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

export { queryGraphql };
