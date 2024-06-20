import { FaAirbnb } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="p-4 bg-white shadow z-auto sticky top-0">
        <span className="container mx-auto flex justify-star">
        <a title="airbnb" className="text-2xl text-pink-500 font-medium flex items-center gap-1" href="www.airbnb.com" >
            <FaAirbnb className="text-3xl" />
            <span>airbnb</span>
        </a>
        </span>
    </nav>
  )
}

export default Navbar