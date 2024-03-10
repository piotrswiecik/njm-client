import Image from "next/image";

const Loading = () => {
	return (
		<div className="mx-auto flex flex-col items-center justify-center" aria-busy="true">
			<Image
				src="/vinyl-svgrepo-com.svg"
				alt="NJM Record Store"
				className="aspect-square max-w-16 animate-spin mt-32"
				width={64}
				height={64}
			/>
      <p className="mt-4">Loading...</p>
		</div>
	);
};

export default Loading;
