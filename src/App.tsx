import Card from "./components/Card"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import { hotelData } from "./components/data"

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <main>
        <div className="container mx-auto grid grid-cols-3 gap-4">
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
    </div>
  )
}

export default App