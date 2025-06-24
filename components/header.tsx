"use client";

import Nav from "./nav";
import NavMobile from "./nav-mobile";
import { useIsMobile } from "@/hooks/useIsMobile";

const Header = () => {
  const isMobile = useIsMobile();
  return (
    <header className="bg-secondary px-4 py-4">
      {isMobile ? <NavMobile /> : <Nav />}
    </header>
  );
};

export default Header;
