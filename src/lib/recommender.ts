import recombee from "recombee-api-client";
import { getCurrentDbUser } from "@/lib/user";

const db = process.env.RECOMBEE_DB_NAME;
const key = process.env.RECOMBEE_API_KEY;
const region = process.env.RECOMBEE_DEFAULT_REGION;

if (!db) {
	throw new Error("RECOMBEE_DB is not set");
}

if (!key) {
	throw new Error("RECOMBEE_API_KEY is not set");
}

if (!region) {
	throw new Error("RECOMBEE_DEFAULT_REGION is not set");
}

export const client = new recombee.ApiClient(db, key, { region });

export const recommenderReqs = recombee.requests;

export const notifyProductView = async (productId: string, userId: string) => {
	await client.send(
		new recommenderReqs.AddDetailView(userId, productId, {
			cascadeCreate: true,
		}),
	);
};

export const notifyAddToCart = async (productId: string, userId: string) => {
	await client.send(
		new recommenderReqs.AddCartAddition(userId, productId, {
			cascadeCreate: true,
			amount: 1,
		}),
	);
};

export const notifyReviewAdd = async (
	productId: string,
	userId: string,
	rating: number,
) => {
	const normalizedRating = (rating - 3) / 2;
	await client.send(
		new recommenderReqs.AddRating(userId, productId, normalizedRating, {
			cascadeCreate: true,
		}),
	);
};

export const getRecommendationsForProduct = async (productId: string) => {
	const user = await getCurrentDbUser();
	const res = await client.send(
		new recommenderReqs.RecommendItemsToItem(
			productId,
			user?.id || "anonymous",
			5,
			{},
		),
	);
	console.log("recommendations generated");
	console.log(res);
};

export const getRecommendationsForUser = async () => {
	const user = await getCurrentDbUser();
	const res = await client.send(
		new recommenderReqs.RecommendItemsToUser(user?.id || "anonymous", 5, {}),
	);
	console.log("recommendations generated");
	console.log(res);
	if (!res.recomms) {
		return [];
	}
	return res.recomms.map((item) => item.id);
};
