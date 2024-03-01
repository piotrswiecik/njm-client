"use client";

import { useState } from "react";

export const RatingStars = () => {
	const [enabled, setEnabled] = useState(true);
	const [selected, setSelected] = useState(0);

	const activeClassName = "text-yellow-300";
	const inactiveClassName = "text-gray-300 dark:text-gray-500";
	const baseClassName = "ms-1 h-4 w-4";

	return (
		<div className="flex items-center">
			{[...Array(5).keys()].map((i) => (
				<svg
					key={i}
					className={`${baseClassName} ${selected >= i ? activeClassName : inactiveClassName} transition-all duration-200`}
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 22 20"
					onMouseOver={() => {
						if (enabled) setSelected(i);
					}}
					onMouseOut={() => {
						if (enabled) setSelected(-1);
					}}
					onClick={() => setEnabled(!enabled)}
				>
					<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
				</svg>
			))}
		</div>
	);
};
{
}
