"use client";
import React from "react";
import Image from "next/image";
import { GraduationCap, MapPin } from "lucide-react";
import { BookAppointment } from "./BookAppointment";

interface DoctorDetailsProps {
  doctor: {};
}

export const DoctorDetails: React.FC<DoctorDetailsProps> = ({ doctor }) => {
  const { attributes, id }: any = doctor;

  return (
    <>
      <div className="mt-5 grid grid-cols-1 rounded-lg border-[1px] p-5 md:grid-cols-3">
        {/* Doctor image */}
        <div className="">
          <Image
            src={attributes?.image?.data?.attributes?.url}
            width={200}
            height={270}
            alt="doctor"
            className="h-[270px] w-full rounded-lg object-cover"
          />
        </div>

        {/* Doctor Ingo */}
        <div className="col-span-2 mt-5 flex flex-col space-y-3 md:mt-0 md:px-10">
          <h2 className="text-2xl font-bold">{attributes?.Name}</h2>
          <h2 className="flex items-center space-x-2 text-gray-500">
            <GraduationCap />
            <span>{attributes.Year_of_Experience} of Experience</span>
          </h2>
          <h2 className="text-md flex items-center space-x-2 text-gray-500">
            <MapPin />
            <span>{attributes?.Address}</span>
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            {attributes.categories.data.map(({ id, attributes }: any) => (
              <h2
                key={id}
                className="rounded-full bg-blue-100 p-1 px-2 text-[10px] text-primary"
              >
                {attributes?.Name}
              </h2>
            ))}
          </div>

          <div>
            <BookAppointment doctor={doctor} />
          </div>
        </div>
      </div>
      {/* About */}
      <div className="mt-5 rounded-lg border-[1px] p-3">
        <h2 className="text-[20px] font-bold">About me</h2>
        <p className="mt-2 tracking-wider text-gray-500">
          {`${attributes.About}`}
        </p>
      </div>
    </>
  );
};
