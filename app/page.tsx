import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Hero } from "./components/Hero";
import { CategorySearch } from "./components/CategorySearch";
import { DoctorList } from "./components/DoctorList";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Category Search */}
      <CategorySearch />

      {/* Doctors List */}

      <DoctorList />
    </div>
  );
}
