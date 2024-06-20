
import airbnb from "../assets/airbnb.png"
const Header = () => {
  return (
    <header className="container mx-auto mb-16 max-sm:px-4">
        <div className=" overflow-clip flex justify-center">
            <img src={airbnb} className="w-auto h-auto object-cover aspect-video" alt="" />
        </div>
        <section className="w-2/5 max-lg:w-full mt-10">
            <h1 className="text-5xl max-sm:text-3xl font-bold tracking-tighter text-balance">Online Experiences</h1>
            <p className="text-lg text-balance mt-2 text-gray-500">Unique activities we can do together, led by a world of hosts.
                <span className="text-pink-500 ml-1">More than just a staycation.</span>
            </p>
        </section>
    </header>
  )
}

export default Header