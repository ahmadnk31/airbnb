
type CardProps = {
    imgSrc: string;
    rating: number;
    price: string;
    title: string;
    country: string;
    status: string;
    link: string;
    
}
const Card = ({imgSrc,rating,price,title,country,status,link}:CardProps) => {
  return (
    <a href={link} className="rounded overflow-hidden hover:border transition">
        <div className="relative">
            <img src={imgSrc} className="w-full h-64 object-cover" alt="" />
            <div className="absolute top-2 right-2 bg-white p-2 rounded-md shadow-md">
            <p className="text-sm text-balance font-semibold">{status&&status}</p>
            </div>
        </div>
        <div className="p-4">
            <div className="flex justify-between">
            <p className="text-sm text-gray-500">{country}</p>
            <p className="text-sm text-gray-500">{rating}
                <span className="text-balance text-orange-400 text-lg"> ★</span>
            </p>
            </div>
            <h1 className="text-lg font-semibold text-balance">{title}</h1>
            <p className="text-sm text-gray-500">{price}</p>
        </div>
    </a>
  )
}

export default Card