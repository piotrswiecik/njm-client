import ShoppingCartLink from "@/ui/atoms/ShoppingCartLink";

const ShoppingCartLinkWrap = async ({ count }: {count: number}) => {
	return (
		<div className="flex flex-row">
			<ShoppingCartLink />
			<div className="px-1">
				{
					<span className="rounded-full bg-slate-400 px-2 py-0.5 text-xs text-slate-100">
						{count}
					</span>
				}
			</div>
		</div>
	);
};

export default ShoppingCartLinkWrap;
