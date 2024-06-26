"use client";
import { getCategories } from "@/app/utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const CategoryList = () => {
  const [categories, setCategories] = useState<[]>([]);
  const [loading, setLoading] = useState(true);

  const path = usePathname();
  const category = path.split("/")[2];

  console.log(category);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    setLoading(true);
    const data = await getCategories();
    setCategories(data.data);
    setLoading(false);
  };
  return (
    <div className="mt-5 flex h-screen flex-col overflow-scroll">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categories &&
              categories.map(({ id, attributes }: any) => {
                return (
                  <CommandItem key={id}>
                    <Link
                      href={`/search/${attributes?.Name}`}
                      className={`flex w-full cursor-pointer items-center gap-2 rounded-md p-2 text-[14px] text-blue-600 ${category === attributes?.Name && "bg-blue-100"} `}
                    >
                      <Image
                        src={attributes?.Icon?.data?.attributes?.url}
                        height={25}
                        width={25}
                        alt="icon"
                      />
                      <label>{attributes?.Name}</label>
                    </Link>
                  </CommandItem>
                );
              })}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};
