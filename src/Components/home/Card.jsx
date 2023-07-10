const Card = ({ imageSrc, title, description }) => {
    return (
      <div className=" rounded-lg overflow-hidden">
        <img className="object-cover w-full h-60 rounded-lg bg-red-50" src={imageSrc} alt={title} />
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800 text-center">{title}</h3>
          <p className="mt-2 text-gray-600 text-center">{description}</p>
        </div>
      </div>
    );
  };
  export default Card