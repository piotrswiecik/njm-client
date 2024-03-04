import HeaderNavDesktop from "@/ui/molecules/HeaderNavDesktop";
import HeaderNavMobile from "@/ui/molecules/HeaderNavMobile";

const availableCategories = [
	"rock",
	"jazz",
	"classical",
	"electronic",
	"rap",
	"metal",
];

const HeaderNavContainer = async () => {
	return (
		<>
			<HeaderNavDesktop categories={availableCategories} />
			<HeaderNavMobile categories={availableCategories} />
		</>
	);
};

export default HeaderNavContainer;
