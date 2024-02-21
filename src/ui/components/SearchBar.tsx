"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type FormEvent, useEffect, useState } from "react";

const SearchBar = () => {
	const [term, setTerm] = useState<string | null>(null);
	const searchParams = useSearchParams();
  const router = useRouter();

	useEffect(() => {
	  if (searchParams?.get("query") !== null) {
	    setTerm(searchParams.get("query"));
	  }
	}, [searchParams]);

	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
		setTerm(null);
    router.push(`/search?query=${term}`);
	};

	return (
		<form onSubmit={(e) => handleSearch(e)}>
			<div className="flex rounded-lg shadow-sm sm:max-w-md">
				<input
					type="text"
					name="search"
					id="search"
					value={term ?? ""}
					className="block w-60 flex-1 rounded-lg border-0 py-1.5 pl-2 text-gray-900 outline-none placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-400 sm:text-sm sm:leading-6"
					placeholder="Search"
					onChange={(e) => setTerm(e.target.value)}
				/>
			</div>
		</form>
	);
};

export default SearchBar;
