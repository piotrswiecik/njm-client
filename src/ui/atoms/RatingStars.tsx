"use client";

import { useState } from "react";

export const RatingStars = ({
	handler,
}: {
	handler: (selected: number) => void;
}) => {
	const [highlighted, setHighlighted] = useState(-1);
	const [selected, setSelected] = useState(-1);

	const INACTIVE = -1;

	const activeClassName = "text-yellow-300";
	const inactiveClassName = "text-gray-300 dark:text-gray-500";
	const baseClassName = "ms-1 h-4 w-4";

	const handleClick = (i: number) => {
		setSelected(i);
		setHighlighted(i);
		handler(i);
	};

	return (
		<div className="flex items-center">
			{[...Array(5).keys()].map((i) => (
				<svg
					key={i}
					className={`${baseClassName} ${highlighted >= i ? activeClassName : inactiveClassName} transition-all duration-200`}
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 22 20"
					onMouseOver={() => {
						setHighlighted(i);
					}}
					onMouseOut={() => {
						if (selected !== highlighted) {
							setHighlighted(INACTIVE);
							handler(INACTIVE);
						}
					}}
					onClick={() => handleClick(i)}
				>
					<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
				</svg>
			))}
		</div>
	);
};
{
}
