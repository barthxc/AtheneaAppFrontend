import { cn } from "@/features/core/lib/utils";

import type { NavbarLinksProps } from "@/features/landing/types";
import { Button, Link } from "@/features/landing/components";

export const NavbarLinks = ({
  className,
  isMobile,
  isHome,
  ...props
}: NavbarLinksProps) => {
  return (
    <nav
      className={cn(
        !isMobile && "px-14 flex-[2] flex justify-between items-center h-full",
        !isHome && !isMobile ? "bg-[#094074]" : null
      )}>
      <ul
        className={cn(
          "flex",
          isMobile
            ? "flex-col items-start gap-5 [&>li]:w-full [&_a]:block [&_a]:py-2"
            : "justify-start items-center gap-10 text-white",
          className
        )}
        {...props}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Nosotros</Link>
        </li>
        <li>
          <Link to="/calendar">Calendario</Link>
        </li>
        <li>
          <Link to="/news">Noticias</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        {isMobile && <DonateLink isMobile />}
      </ul>
      {!isMobile && <DonateLink />}
    </nav>
  );
};

const DonateLink = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <>
      <Button
        asChild
        size="md"
        className={cn(
          isMobile
            ? "bg-[#094074] hover:bg-[#094074] text-white w-max mx-auto"
            : "bg-white text-black"
        )}>
        <Link to="/donation">Donación</Link>
      </Button>
    </>
  );
};
