"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { type FormEvent, useEffect, useState, type ChangeEvent } from "react";

const SearchBar = () => {
	const [term, setTerm] = useState<string | null>(null);
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		if (searchParams?.get("query") !== null) {
			setTerm(searchParams.get("query"));
		} else {
			setTerm(null);
		}
	}, [searchParams]);

	useEffect(() => {
		const debounce = setTimeout(() => {
			if (term !== null) {
				router.push(`/search?query=${term}`);
			}
		}, 500);
		return () => clearTimeout(debounce);
	}, [term, router]);

	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
		router.push(`/search?query=${term}`);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTerm(e.target.value);
	};

	return (
		<form onSubmit={(e) => handleSearch(e)} role="searchbox">
			<div className="relative flex rounded-lg shadow-sm sm:max-w-md">
				<input
					type="text"
					name="search"
					id="search"
					autoComplete="off"
					value={term ?? ""}
					className="block w-60 flex-1 rounded-lg border-0 py-1.5 pl-2 text-gray-900 outline-none placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-400 sm:text-sm sm:leading-6"
					placeholder="Search"
					onChange={handleChange}
				/>
				<Search className="absolute right-2 top-2 opacity-40" size={20} />
			</div>
		</form>
	);
};

export default SearchBar;
