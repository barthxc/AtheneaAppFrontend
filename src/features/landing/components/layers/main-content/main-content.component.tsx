import {
  About,
  Faq,
  News,
  Achievement,
  Colaborators,
  Installations,
} from "@/features/landing/components";

export const MainContent = () => {
  return (
    <main>
      <Installations />
      <About />
      <News />
      <Achievement />
      <Colaborators />
      <Faq />
    </main>
  );
};
