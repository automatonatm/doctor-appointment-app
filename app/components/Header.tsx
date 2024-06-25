import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const menu = [
    {
      id: "1",
      name: "Home",
      path: "/",
    },
    {
      id: "2",
      name: "Expore",
      path: "/explore",
    },

    {
      id: "3",
      name: "Contact Us",
      path: "/",
    },
  ];

  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo" width={180} height={80} />
        <ul className="hidden gap-8 md:flex">
          {menu.map((item, index) => (
            <li
              className="hover:text-primary  cursor-pointer transition-all ease-in-out hover:scale-105"
              key={item.id}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};
