"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getCategories } from "../utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const CategorySearch = () => {
  const [categories, setCategories] = useState<[]>([]);
  const [loading, setLoading] = useState(true);


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
    <div className="mb-10 flex flex-col items-center gap-2 px-5">
      <h2 className="text-4xl font-bold tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-xl text-gray-400">
        Search you Doctor and book Appointment
      </h2>
      <div className="mt-3 flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search" />
        <Button type="submit">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>

      {loading ? (
        <div className="mt-5 grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-[100px] w-[100px] animate-pulse rounded-lg bg-slate-200 sm:w-[150px]"
            ></div>
          ))}
        </div>
      ) : (
        categories &&
        (categories.length > 0 ? (
          <div className="mt-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {categories.map(
              ({ id, attributes }: any, index) =>
                index < 6 && (
                  <Link href={`/search/${attributes?.Name}`} key={id}>
                    <div className="m-2 flex cursor-pointer flex-col items-center gap-2 rounded-lg bg-blue-50 p-5 text-center transition-all ease-in-out hover:scale-110">
                      <Image
                        src={attributes?.Icon?.data?.attributes?.url}
                        height={40}
                        width={40}
                        alt="icon"
                      />
                      <label className="text-sm text-blue-600">
                        {attributes?.Name}
                      </label>
                    </div>
                  </Link>
                ),
            )}
          </div>
        ) : (
          <div>No Category Found</div>
        ))
      )}
    </div>
  );
};
