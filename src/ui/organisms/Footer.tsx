export const Footer = () => {
	return (
		<div className="mt-12 flex w-full flex-row justify-between p-4">
			<span className="text-xs text-slate-400">
				NJM Webstore © 2024{" "}
				<a
					className="hover:text-slate-600"
					href="mailto:piotr.swiecik@gmail.com"
				>
					piotr.swiecik@gmail.com
				</a>
			</span>
			<span className="text-xs text-slate-400">
				Powered by{" "}
				<a className="hover:text-slate-600" href="https://nextjs.org/">
					Next.js
				</a>{" "}
				&{" "}
				<a className="hover:text-slate-600" href="https://nodejs.org/en">
					Node.js
				</a>
			</span>
		</div>
	);
};
