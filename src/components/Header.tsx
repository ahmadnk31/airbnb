
import airbnb from "../assets/airbnb.png"
const Header = () => {
  return (
    <header className="container mx-auto h-screen">
        <div className="my-4 flex justify-center">
            <img src={airbnb} className="size-2/4   max-md:size-full object-cover" alt="" />
        </div>
        <section className="w-2/5 max-md:w-full">
            <h1 className="text-4xl font-bold tracking-tighter text-balance">Online Experiences</h1>
            <p className="text-lg text-balance mt-2 text-gray-500">Unique activities we can do together, led by a world of hosts.
                <span className="text-pink-500 ml-1">More than just a staycation.</span>
            </p>
        </section>
    </header>
  )
}

export default Header