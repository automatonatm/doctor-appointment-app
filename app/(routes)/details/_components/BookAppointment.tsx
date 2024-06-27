"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Clock } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export const BookAppointment = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [timeSlot, setTimeSlot] = useState<any>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();
  const [note, setNote] = useState<string>();

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeSlot(timeList);
  };

  const isPastDay = (day: Date) => {
    return day <= new Date();
  };

  useEffect(() => {
    getTime();
  }, []);

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="mt-3 rounded-full">Book Appointment</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div className="">
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2">
                {/* Calender */}

                <div className="flex flex-col items-baseline gap-3">
                  <h2 className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-primary" /> Select
                    Date
                  </h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    disabled={isPastDay}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                {/* Time Slot */}
                <div className="mt-3 md:mt-0">
                  <h2 className="mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Select Time Slot
                  </h2>
                  <div className="grid grid-cols-3 gap-3 rounded-lg border p-5">
                    {timeSlot?.map((item: any, index: number) => (
                      <h2
                        key={item.time}
                        onClick={() => setSelectedTimeSlot(item.time)}
                        className={`cursor-pointer rounded-full border p-2 text-center hover:bg-primary hover:text-white ${item.time == selectedTimeSlot && "bg-primary text-white"}`}
                      >
                        {item.time}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
              <Textarea
                className="mt-3"
                placeholder="Note"
                onChange={(e) => setNote(e.target.value as string)}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose>
            <Button
              type="button"
              className="border-red-500 text-red-700"
              variant="outline"
            >
              Close
            </Button>
          </DialogClose>
          <Button disabled={!(selectedTimeSlot && date)} type="button">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
