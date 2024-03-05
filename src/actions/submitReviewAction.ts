"use server";

/**
	 * Server action used to handle review form submission.
	 * @param rating star rating value to be provided as extra binding
	 * @param formData form data from submission
	 */
export const submitReviewAction = async (
  rating: number | null,
  formData: FormData,
): Promise<void> => {
  
  console.log("form action triggered");
  console.log(formData);
  console.log(rating);
};