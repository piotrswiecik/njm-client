type CollectionCardProps = {
  name: string;
  coverImage: {
    url: string;
    width: number;
    height: number;
  };
};

const CollectionCard = ({ name, coverImage }: CollectionCardProps) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={coverImage.url}
          alt={name}
          width={coverImage.width || 300}
          height={coverImage.height || 300}
          className="w-full h-64 object-cover object-center"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        </div>
      </div>
    </>
  );
};

export default CollectionCard;
