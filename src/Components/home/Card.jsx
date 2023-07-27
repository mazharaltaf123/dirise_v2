import Link from "next/link";

const Card = ({ imageSrc, title, description ,href}) => {
    return (
      <div className=" rounded-lg overflow-hidden">
        <Link href={href? href : "/"}>
        <img className="object-cover w-full h-60 rounded-lg bg-[#9dc1da]" src={imageSrc} alt={title} />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800 text-center">{title}</h3>
          <p className="mt-2 text-gray-600 text-center font-light">{description}</p>
        </div>
      </div>
    );
  };
  export default Card