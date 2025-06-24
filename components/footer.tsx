import { Text } from "./ui/text";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-4 border-t">
      <div className="max-w-7xl mx-auto px-4 flex justify-between item-start">
        <div className="max-w-sm">
          <div className="flex gap-2 items-center">
            <div className="grid place-items-center border">
              {/* Logo Goes Here */}
            </div>
            <Text as="h4">Numeric Solution</Text>
          </div>
          <Text as="p" styleVariant="muted" className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            qui rerum eum officia expedita fuga tempore repudiandae inventore
            nihil doloremque?
          </Text>
          <div className="mt-10">
            <Text as="h4">Follow Us</Text>
            <ul className="flex gap-2">
              <li>
                <Link href={""}>
                  <Text as="p" styleVariant="muted">
                    Facebook
                  </Text>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <Text as="p" styleVariant="muted">
                    Twitter
                  </Text>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <Text as="p" styleVariant="muted">
                    Instagram
                  </Text>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <Text as="p" styleVariant="muted">
                    Linkedin
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="flex gap-5">
          <li className="flex-1">
            <Text as="h4">Home</Text>
          </li>
          <li className="flex-1">
            <Text as="h4">About</Text>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </li>
          <li className="flex-1">
            <Text as="h4">Services</Text>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </li>{" "}
          <li className="flex-1">
            <Text as="h4">FAQs</Text>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
