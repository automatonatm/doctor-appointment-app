import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

export const CategorySearch = () => {
  return (
    <div className="mb-10 flex flex-col items-center gap-2">
      <h2 className="text-4xl font-bold tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-xl text-gray-400">
        Search you Doctor and book Appointment
      </h2>
      <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
        <Input type="text" placeholder="Search" />
        <Button type="submit"><Search className="w-4 h-4 mr-2"/>Search</Button>
      </div>
    </div>
  );
};
