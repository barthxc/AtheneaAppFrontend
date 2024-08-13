import { Header, MainContent, About } from "@/features/landing/components";
export function LandingPage() {
  return (
    <div className="min-h-screen ">
      <Header />
      <About />
      <MainContent />
    </div>
  );
}
