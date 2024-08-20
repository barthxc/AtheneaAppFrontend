import { useGetContents } from "@/features/content/hooks/content.hook";
export function ColaboratorsTest() {
  const { data } = useGetContents();

  console.log(data);

  return <h1>hey</h1>;
}
