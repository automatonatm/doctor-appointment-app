"use client";
import React, { useState, useEffect } from "react";
import { getDoctorsByCategories } from "@/app/utils/GlobalApi";
import { DoctorList } from "@/app/components/DoctorList";

interface ClientPageProps {
  cname: string;
}

export const ClientPage: React.FC<ClientPageProps> = ({ cname }) => {
  const [doctors, setDoctors] = useState<[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDoctors(cname);
  }, [cname]);

  const getDoctors = async (category: string) => {
    const data: any = await getDoctorsByCategories(category);
    setDoctors(data.data);
    setLoading(false);
  };

  return (
    <div className="mt-5">
      <DoctorList loading={loading} doctors={doctors} heading={cname} />
    </div>
  );
};
