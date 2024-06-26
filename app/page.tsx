
'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Hero } from "./components/Hero";
import { CategorySearch } from "./components/CategorySearch";
import { DoctorList } from "./components/DoctorList";
import { useState, useEffect } from "react";
import { getDoctors } from "./utils/GlobalApi";

export default function Home() {

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
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Category Search */}
      <CategorySearch />

      {/* Doctors List */}

      <DoctorList doctors={doctors} loading={loading} />
    </div>
  );
}
