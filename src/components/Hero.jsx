import heroImg1 from "../assets/images/Rectangle 28.png";
import heroImg2 from "../assets/images/Rectangle 27.png";
import heroImg3 from "../assets/images/Rectangle 26.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [heroImg1, heroImg2, heroImg3];
  return (
    <section className="w-full text-white">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Coxs
            <span> bazar</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Coxs Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
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
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-4/5">
                <div className="p-1">
                  <Link to={`/destinationDetails${index + 1}`}>
                    <img
                      src={image}
                      alt={`Hero Image ${index + 1}`}
                      className="w-full rounded-2xl"
                    />
                  </Link>
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
