"use server";

import { revalidateTag } from "next/cache";

export const handleSortAction = async () => {
	revalidateTag("sort");
};
