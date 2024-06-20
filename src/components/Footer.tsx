import { BsFacebook,BsInstagram,BsTwitterX,BsTiktok } from "react-icons/bs"


const Footer = () => {
  return (
    <>
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto">
            <div className="grid grid-cols-3 max-md:grid-cols-2 gap-4">
                <div>
                <h1 className="text-2xl font-semibold">airbnb</h1>
                <p className="text-sm text-gray-700">© 2021 Airbnb, Inc.</p>
                </div>
                <div>
                <h1 className="text-lg font-semibold">Company</h1>
                <ul className="text-sm">
                    <li className="text-gray-700 hover:text-white/70 cursor-pointer">About</li>
                    <li className="text-gray-700 hover:text-white/70 cursor-pointer">Community</li>
                    <li className="text-gray-700 hover:text-white/70 cursor-pointer">Host</li>
                    <li className="text-gray-700 hover:text-white/70 cursor-pointer">Careers</li>
                    <li className="text-gray-700 hover:text-white/70 cursor-pointer">Press</li>
                    <li className="text-gray-700 hover:text-white/70 cursor-pointer">Policies</li>
                </ul>
                </div>
                <div>
                <h1 className="text-lg font-semibold">Discover</h1>
                <ul className="text-sm">
                    <li className="text-gray-600 hover:text-white/80 cursor-pointer">Trust & Safety</li>
                    <li className="text-gray-600 hover:text-white/80 cursor-pointer">Travel Credit</li>
                    <li className="text-gray-600 hover:text-white/80 cursor-pointer">Gift Cards</li>
                    <li className="text-gray-600 hover:text-white/80 cursor-pointer">Airbnb Citizen</li>
                    <li className="text-gray-600 hover:text-white/80 cursor-pointer">Business Travel</li>
                    <li className="text-gray-600 hover:text-white/80 cursor-pointer">Guidebooks</li>
                </ul>
                </div>
                <div>
                <h1 className="text-lg font-semibold">Hosting</h1>
                <ul className="text-sm *:text-gray-600">
                    <li className="hover:text-white/80 cursor-pointer">Why Host</li>
                    <li className="hover:text-white/80 cursor-pointer">Hospitality</li>
                    <li className="hover:text-white/80 cursor-pointer">Responsible Hosting</li>
                    <li className="hover:text-white/80 cursor-pointer">Community Center</li>
                </ul>
                </div>
                <div>
                    <h1>Would you like to follow us on:</h1>
                    <div className="flex gap-4 mt-4">
                        <a href="www.facebook.com" className="text-gray-700 hover:text-white/70">
                            <BsFacebook />
                        </a>
                        <a href="www.twitter.com" className="text-gray-700 hover:text-white/70">
                            <BsTwitterX />
                        </a>
                        <a href="www.instagram.com" className="text-gray-700 hover:text-white/70">
                            <BsInstagram />
                        </a>
                        <a href="www.linkedin.com" className="text-gray-700 hover:text-white/70">
                            <BsTiktok />
                        </a>
                        </div>
                </div>
            </div>
            </div>
        </footer>
    </>
  )
}

export default Footer