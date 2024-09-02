import {
  Button,
  Heading,
  Link,
  Section,
  Card,
} from "@/features/landing/components";
import { useGetContents } from "@/features/content/hooks";

export const News = () => {
  const { data } = useGetContents();

  const lastData = data?.slice(0, 3);

  return (
    <Section variant="filled" className="flex flex-col gap-10 xl:gap-20">
      <Heading variant="display" position="centered">
        Últimas noticias
      </Heading>
      <div className="flex flex-col lg:flex-row  gap-10 xl:gap-20 justify-center items-center">
        {data && lastData?.map((item, index) => <Card key={index} {...item} />)}
      </div>

      <Button
        asChild
        variant="accent"
        size="lg"
        className="w-max"
        position="centered">
        <Link to="/news">Ver todas las noticias</Link>
      </Button>
    </Section>
  );
};
