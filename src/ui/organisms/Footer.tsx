export const Footer = () => {
	return (
		<div className="border-t flex w-full flex-row justify-between p-4 mt-12">
			<span className="text-xs text-slate-500">
				NJM Webstore © 2024{" "}
				<a
					className="hover:text-slate-700"
					href="mailto:piotr.swiecik@gmail.com"
				>
					piotr.swiecik@gmail.com
				</a>
			</span>
			<span className="text-xs text-slate-500">
				Powered by Next.js & Node.js
			</span>
		</div>
	);
};
