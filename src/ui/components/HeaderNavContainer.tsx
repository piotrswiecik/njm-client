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
		<div>
			<HeaderNavDesktop />
			<HeaderNavMobile categories={availableCategories}/>
		</div>
	);
};

export default HeaderNavContainer;
