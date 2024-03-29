// import ActiveLink from "@/ui/atoms/ActiveLink";
// import ShoppingCartLink from "@/ui/atoms/ShoppingCartLink";
import HeaderNavContainer from "@/ui/molecules/HeaderNavContainer";

export const Header = () => {
	return (
		// side to side
		<div className="min-w-full bg-gradient-to-b from-slate-400 to-slate-200 to-100%">
			{/* centered container wrapped around client component */}
			<div className="mx-auto max-w-7xl px-4 py-8 md:px-12">
				<HeaderNavContainer />
			</div>
		</div>
	);
};
