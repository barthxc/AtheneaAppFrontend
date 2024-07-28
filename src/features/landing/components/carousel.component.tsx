import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/features/core/components/ui";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/features/core/components/ui/carousel";

export default function CarouselComponent() {
  return (
    <>
      {/* <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 7000,
          }),
        ]}>
        <CarouselContent>
          {data.map((image, index) => (
            <CarouselItem key={index}>
              <div >
                <Card>
                  <CardContent >
                    <img
                      src={`${imagePath}/${image}`}
                      alt={`Imagen de ${image}`}
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
