import { queryGraphql } from "@/api/gql";
import { CollectionsGetDocument } from "@/gql/graphql";

export const getCollections = async () => {
  try {
    const { collections } = await queryGraphql(CollectionsGetDocument, {});
    return collections;
  } catch (err) {
    console.error("Collections API error", err);
    throw err; // rethrow & catch in ui
  }
};