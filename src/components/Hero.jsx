import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [travel, setTravel] = useState([]);
  useEffect(() => {
    fetch("travel.json")
      .then((res) => res.json())
      .then((data) => {
        setTravel(data);
      });
  }, []);
  console.log(travel[0]);
  const imageUrls = travel.map((destination) => destination.image_url);
  console.log(imageUrls);

  return (
    <section className="w-full text-white mt-96 lg:mt-10">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className=" text-3xl lg:text-5xl font-bold leading-none sm:text-6xl">
            Cox&apos;s
            <span> bazar</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Cox&apos;s Bazar is a city, fishing port, tourism centre and
            district headquarters in southeastern Bangladesh. It is famous
            mostly for its long natural sandy beach, and it ...
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button className="px-8 text-lg rounded font-bold btn btn-warning dark:bg-violet-600 dark:text-gray-50">
              Booking
            </button>
          </div>
        </div>
        {/* sliders */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full lg:max-w-3xl"
        >
          <CarouselContent>
            {travel.map((destination) => (
              <CarouselItem
                key={destination.id}
                className="md:basis-1/2 lg:basis-4/5"
              >
                <div className="p-1">
                  <Link to={`/destinationDetails/${destination.id}`}>
                    <img
                      src={destination.image_url}
                      alt={`Hero Image ${destination.id}`}
                      className="w-[400px] h-[350px] lg:w-[800px] lg:h-[550px] object-cover rounded-2xl"
                    />
                  </Link>
                  <span className="text-white relative left-5 bottom-20 font-bebas text-4xl ">
                    {destination.destination_name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* buttons */}
          <div className="hidden lg:flex">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
