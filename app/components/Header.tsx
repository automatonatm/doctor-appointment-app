"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface HeaderProps {
  isLogedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isLogedIn }) => {
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

  const { user } = useKindeBrowserClient();

  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo" width={180} height={80} />
        <ul className="hidden gap-8 md:flex">
          {menu.map((item, index) => (
            <li
              className="cursor-pointer transition-all ease-in-out hover:scale-105 hover:text-primary"
              key={item.id}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {isLogedIn ? (
        <Popover>
          <PopoverTrigger>
            <Image src={user?.picture as string}  height={40}  width={40} alt="Image" className="rounded-full" />
          </PopoverTrigger>
          <PopoverContent className="w-44">
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer rounded-md p-1 hover:bg-slate-100">
                Profile
              </li>
              <li className="cursor-pointer rounded-md p-1 hover:bg-slate-100">
                My Booking
              </li>
              <li className="cursor-pointer rounded-md p-1 hover:bg-slate-100">
                <LogoutLink>Logout</LogoutLink>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        // <LogoutLink>
        //   <Button variant="outline">Logout</Button>
        // </LogoutLink>
        <LoginLink postLoginRedirectURL="/">
          <Button>Get Started</Button>
        </LoginLink>
      )}
    </div>
  );
};
