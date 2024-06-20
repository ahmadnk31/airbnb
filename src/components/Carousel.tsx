import { CardContent } from "../../@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../@/components/ui/carousel"

import { hotelData } from "./data"
import Card from "./Card"

const CardCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {hotelData.map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
                <CardContent>
                <Card
                    imgSrc={hotelData[index].imgSrc}
                    rating={hotelData[index].rating}
                    price={hotelData[index].price}
                    title={hotelData[index].title}
                    country={hotelData[index].country}
                    status={hotelData[index].status}
                    link={hotelData[index].link}
                />
                </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CardCarousel