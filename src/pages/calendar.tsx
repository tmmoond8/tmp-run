import Image from "next/image";
import { Inter } from "next/font/google";
import { SampleDatePicker } from "@/domains/calendar/components/Calendar";

const inter = Inter({ subsets: ["latin"] });

export default function Calendar() {
  return (
    <div className="App py-8 px-4">
      <SampleDatePicker />
    </div>
  );
}
