import React, { useEffect, useState } from "react";

import DateInput from "./DateInput";
import DatePopup from "./DatePopup";

export interface DatePickerProps {
  onDateChange: (x: string) => void;
  date?: string;
}

const DatePicker = ({ onDateChange }: DatePickerProps) => {
  const [date, setDate] = useState<string>();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onFocusInput = () => {
    setIsPopupOpen(true);
  };

  useEffect(() => {
    if (date) {
      onDateChange(date);
    }
  }, [date]);

  return (
    <div className="w-24 relative">
      <DateInput setDate={setDate} onFocus={onFocusInput} />
      <DatePopup
        setOpen={setIsPopupOpen}
        date={date}
        isOpen={isPopupOpen}
        setDate={setDate}
      />
    </div>
  );
};

export default DatePicker;
