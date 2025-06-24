import { Button } from "./ui/button";
import { Text } from "./ui/text";
import { ModeToggle } from "./darkmode-toggle";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="grid place-items-center">{/* Logo Goes Here */}</div>
        <Text as="h4">Numeric Solution</Text>
      </div>
      <ul className="flex gap-2 items-center">
        <li>
          <Button asChild variant={"ghost"} className="cursor-pointer">
            <Link href={""}>Home</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant={"ghost"} className="cursor-pointer">
            <Link href={""}>About</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant={"ghost"} className="cursor-pointer">
            <Link href={""}>Services</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant={"ghost"} className="cursor-pointer">
            <Link href={""}>FAQs</Link>
          </Button>
        </li>
      </ul>
      <ModeToggle />
    </nav>
  );
};

export default Nav;
