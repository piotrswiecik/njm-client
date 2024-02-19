import { type TypedDocumentString } from "@/gql/graphql";

const queryGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	console.log("fetching");

	// TODO de-hardcode api url
	const res = await fetch("http://localhost:8000/graphql", {
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
