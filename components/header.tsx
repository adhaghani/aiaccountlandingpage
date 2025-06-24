"use client";

import Nav from "./nav";
import NavMobile from "./nav-mobile";
import { useIsMobile } from "@/hooks/useIsMobile";

const Header = () => {
  const isMobile = useIsMobile();
  return (
    <header className=" p-4 fixed top-0 w-full  border-b ">
      {isMobile ? <NavMobile /> : <Nav />}
    </header>
  );
};

export default Header;
