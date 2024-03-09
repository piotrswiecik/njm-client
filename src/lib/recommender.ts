import recombee from "recombee-api-client";

const db = process.env.RECOMBEE_DB;
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
  await client.send(new recommenderReqs.AddDetailView(userId, productId, {
    cascadeCreate: true,
  }));
};

export const notifyAddToCart = async (productId: string, userId: string) => {
  await client.send(new recommenderReqs.AddCartAddition(userId, productId, {
    cascadeCreate: true,
    amount: 1,
  }));
};

export const notifyReviewAdd = async (productId: string, userId: string, rating: number) => {
  await client.send(new recommenderReqs.AddRating(userId, productId, rating, {
    cascadeCreate: true,
  }));
};