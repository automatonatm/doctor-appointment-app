"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { getDoctorById } from "@/app/utils/GlobalApi";
import { DoctorDetails } from "../_components/DoctorDetails";

interface IParams {
  recordId: number;
}

export default function DetailsPage({ params }: { params: IParams }) {
  const { recordId } = params;

  const [doctor, setDoctor] = useState<{}>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getDoctor(recordId);
  }, [recordId]);

  const getDoctor = async (id: number) => {
    const data = await getDoctorById(id);
    setDoctor(data.data);
    setLoading(false);
  };

  return (
    <div className="p-5 md:px-20">
      <h2 className="text-[22px] font-bold">Doctor Details</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* Doctor Details */}
        <div className="col-span-3">
          {doctor && !loading && <DoctorDetails doctor={doctor} />}
        </div>

        {/* Doctor Suggestions */}
        <div className="mt-5 rounded-lg border-[1px] p-5 lg:ml-5 w-full lg:w-max">
          <h2 className="text-[22px] font-bold"> Suggestions</h2>

          <div className="flex flex-col px-5 w-max">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="mt-5 flex items-center gap-3 hover:bg-slate-100 p-3 rounded-sm shadaw-sm w-full">
                <Image
                  src="/doctors.webp"
                  height={80}
                  width={80}
                  alt="doctor"
                  className="h-[80px] w-[80px] rounded-full object-cover"
                />
                <div>
                  <h2 className="w-min rounded-full bg-blue-100 p-1 px-2 text-[10px] text-primary">
                    Cardiologist
                  </h2>
                  <h2 className="text-normal font-bold">Dr John Mark</h2>
                  <h2 className="text-primary">12 Years</h2>
                </div>
              </div>
            ))}

            
          </div>
        </div>
      </div>
    </div>
  );
}
