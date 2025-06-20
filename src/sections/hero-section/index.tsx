import { Carousel } from "antd";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { carouselBanners, mediaBanners } from "./data";

export default function HeroSection() {
  return (
    <section className="py-5">
      <div className="container grid grid-cols-4 gap-2 md:gap-5">
        {mediaBanners.map((banner, index) => (
          <div key={index} className={twMerge("", index === 1 && "row-start-2 col-start-1")}>
            <Image
              src={banner}
              alt={`Hero banner ${index}`}
              height={300}
              width={300}
              className="w-full h-auto aspect-square"
            />
          </div>
        ))}

        <div className="col-span-2 row-span-2 row-start-1 col-start-2">
          <Carousel
            className="h-full"
            rootClassName="h-full"
            autoplay={{ dotDuration: true }}
            autoplaySpeed={4000}
            pauseOnHover={false}
            adaptiveHeight
            draggable
          >
            {carouselBanners.map((banner, index) => (
              <Image
                key={index}
                src={banner}
                alt={`Hero slider banner ${index}`}
                height={500}
                width={500}
                className="w-full h-auto aspect-square"
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
