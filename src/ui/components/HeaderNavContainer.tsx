import HeaderNavDesktop from "@/ui/components/HeaderNavDesktop";
import HeaderNavMobile from "@/ui/components/HeaderNavMobile";

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
		<nav>
			<HeaderNavDesktop categories={availableCategories}/>
			<HeaderNavMobile categories={availableCategories}/>
		</nav>
	);
};

export default HeaderNavContainer;
