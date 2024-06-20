import Card from "./components/Card"
import Footer from "./components/Footer"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import { hotelData } from "./components/data"

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <main className="container mx-auto max-sm:px-4 my-28 max-md:my-16 w-full">
        <h1 className="text-3xl font-semibold text-balance mb-6">Popular Hotels</h1>
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
          {hotelData.map((hotel) => (
            <Card
              key={hotel.title}
              imgSrc={hotel.imgSrc}
              rating={hotel.rating}
              price={hotel.price}
              title={hotel.title}
              country={hotel.country}
              status={hotel.status}
              link={hotel.link}
            />
          ))}
        </div>
        
      </main>
      <Footer />
    </div>
  )
}

export default App