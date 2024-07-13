import { useEffect, useState } from "react";

import DaysPicker from "@/components/shared/DaysPicker";
import TimePicker from "@/components/shared/TimePicker";

export type DateInfo = {
  days: {
    from: string;
    to: string;
  };
  time: {
    from: string;
    to: string;
  };
};

export interface AvailableDateProps {
  onSelectedDate: (x: DateInfo) => void;
}

const AvailableDate = ({ onSelectedDate }: AvailableDateProps) => {
  const [dayFrom, setDayFrom] = useState<string>();
  const [dayTo, setDayTo] = useState<string>();
  const [timeFrom, setTimeFrom] = useState<string>();
  const [timeTo, setTimeTo] = useState<string>();

  useEffect(() => {
    if (dayFrom && dayTo && timeFrom && timeTo) {
      onSelectedDate({
        days: {
          from: dayFrom,
          to: dayTo,
        },
        time: {
          from: timeFrom,
          to: timeTo,
        },
      });
    }
  }, [dayFrom, dayTo, timeFrom, timeTo]);

  return (
    <div className="flex flex-col space-y-3">
      <p className="text-lg">Select Availability Date</p>
      <div className="flex items-center justify-start space-x-2">
        <span>From</span> <DaysPicker getDay={setDayFrom} /> <span>to</span>{" "}
        <DaysPicker getDay={setDayTo} />
      </div>
      <div className="flex items-center justify-start space-x-2">
        <span>At</span> <TimePicker onTimeChange={setTimeFrom} />{" "}
        <span>to</span> <TimePicker onTimeChange={setTimeTo} />
      </div>
    </div>
  );
};

export default AvailableDate;
