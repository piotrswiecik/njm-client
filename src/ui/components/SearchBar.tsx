"use client";

const SearchBar = () => {
	return (
			<form>
					<div className="flex rounded-lg shadow-sm sm:max-w-md">
						<input
							type="text"
							name="username"
							id="username"
							autoComplete="username"
							className="block w-60 flex-1 rounded-lg border-0 py-1.5 pl-2 text-gray-900 outline-none placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-400 sm:text-sm sm:leading-6"
							placeholder="Search"
						/>
					</div>
			</form>
	);
};

export default SearchBar;
