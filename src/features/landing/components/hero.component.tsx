import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/features/core/components/ui";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/features/core/components/ui/carousel";

export default function MainCarousel({ data }) {
  return (
    <>
      {/* <Carousel
        className="w-full"
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 7000,
          }),
        ]}>
        <CarouselContent>
          {data.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-0">
                <Card>
                  <CardContent className="p-0">
                    <img
                      src={`${imagePath}/${image}`}
                      alt={`Imagen de ${image}`}
                      className="w-full h-[36rem] object-cover rounded-sm"
                      loading="lazy"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel> */}
    </>
  );
}