import { Carousel } from "antd";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
      <div className="container grid grid-cols-4 gap-5 py-5">
        <div>
          <Image
            src={
              "https://inspiretemplates.com/E-shope/image/cache/catalog/right-banner/267X240-001-267x240.png"
            }
            alt=""
            height={300}
            width={300}
            className="w-full h-auto"
          />
        </div>
        <div className="row-start-2 col-start-1">
          <Image
            src={
              "https://inspiretemplates.com/E-shope/image/cache/catalog/right-banner/267X240-002-267x240.png"
            }
            alt=""
            height={300}
            width={300}
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-2 row-span-2">
          <Carousel
            className="h-full"
            rootClassName="h-full"
            autoplay={{ dotDuration: true }}
            autoplaySpeed={4000}
            pauseOnHover={false}
            adaptiveHeight
            draggable
          >
            <Image
              src={
                "https://inspiretemplates.com/E-shope/image/cache/catalog/right-banner/267X240-001-267x240.png"
              }
              alt=""
              height={500}
              width={500}
              className="w-full h-auto"
            />
            <Image
              src={
                "https://inspiretemplates.com/E-shope/image/cache/catalog/right-banner/267X240-002-267x240.png"
              }
              alt=""
              height={500}
              width={500}
              className="w-full h-auto"
            />
            <Image
              src={
                "https://inspiretemplates.com/E-shope/image/cache/catalog/right-banner/267X240-001-267x240.png"
              }
              alt=""
              height={500}
              width={500}
              className="w-full h-auto"
            />
            <Image
              src={
                "https://inspiretemplates.com/E-shope/image/cache/catalog/right-banner/267X240-002-267x240.png"
              }
              alt=""
              height={500}
              width={500}
              className="w-full h-auto"
            />
          </Carousel>
        </div>
        <div>
          <Image
            src={
              "https://inspiretemplates.com/E-shope/image/cache/catalog/right-banner/267X240-002-267x240.png"
            }
            alt=""
            height={300}
            width={300}
            className="w-full h-auto"
          />
        </div>
        <div>
          <Image
            src={
              "https://inspiretemplates.com/E-shope/image/cache/catalog/right-banner/267X240-001-267x240.png"
            }
            alt=""
            height={300}
            width={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
