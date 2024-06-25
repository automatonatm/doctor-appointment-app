"use client";
import React, { useState, useEffect } from "react";
import { getDoctors } from "../utils/GlobalApi";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const DoctorList = () => {
  const [doctors, setDoctors] = useState<[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDoctoryList();
  }, []);

  const getDoctoryList = async () => {
    setLoading(true);
    const data = await getDoctors();
    setDoctors(data.data);
    setLoading(false);
  };

  return (
    <div className="mb-10 px-10">
      <h2 className="text-xl font-bold">Popular Doctors</h2>
      <div>
        {loading ? (
          <div className="mt-4 grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
              Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[220px] w-full bg-slate-200 rounded-lg animate-pulse"
                ></div>
              ))
            }
        
          </div>
        ) : doctors && doctors.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {doctors.map(({ id, attributes }: any, index) => (
              <div
                key={id}
                className="cursor-pointer rounded-lg border-[1px] p-3 hover:border-primary hover:shadow-sm"
              >
                <Image
                  src={attributes?.image?.data?.attributes?.url}
                  width={500}
                  height={200}
                  alt="doctor"
                  className="h-[200px] w-full rounded-lg object-cover"
                />

                <div className="mt-3 flex flex-col items-baseline gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {attributes.categories.data.map(
                      ({ id, attributes }: any) => (
                        <h2
                          key={id}
                          className="rounded-full bg-blue-100 p-1 px-2 text-[10px] text-primary"
                        >
                          {attributes?.Name}
                        </h2>
                      ),
                    )}
                  </div>

                  <h2 className="font-bold">{attributes.Name}</h2>
                  <h2 className="text-sm text-primary">
                    {attributes?.Year_of_Experience}
                  </h2>
                  <h2 className="text-sm text-gray-500">
                    {attributes?.Address}
                  </h2>
                  <h2 className="rounder-full mt-2 w-full cursor-pointer rounded-full border-[1px] border-primary p-2 px-3 text-center text-[11px] text-primary hover:bg-primary hover:text-white">
                    Book Now
                  </h2>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No Doctors Found</div>
        )}
      </div>
    </div>
  );
};