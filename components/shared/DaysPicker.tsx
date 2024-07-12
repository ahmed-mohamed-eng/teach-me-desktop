import React from "react";

export interface DaysPickerProps {
  getDay: (x: string) => void;
}

const DaysPicker = ({ getDay }: DaysPickerProps) => {
  const onSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (!value) {
      return;
    }

    getDay(e.target.value);
  };

  return (
    <div className="flex items-center">
      <select
        data-testid="select-day"
        name="days"
        id="available-days"
        defaultValue=""
        onChange={onSelectValue}
      >
        <option value="" className="p-4 text-lg font-semibold">
          Select Date
        </option>
        <option value="Monday" className="p-4 text-lg font-semibold">
          Monday
        </option>
        <option value="Tuesday" className="p-4 text-lg font-semibold">
          Tuesday
        </option>
        <option value="Wednesday" className="p-4 text-lg font-semibold">
          Wednesday
        </option>
        <option value="Thursday" className="p-4 text-lg font-semibold">
          Thursday
        </option>
        <option value="Friday" className="p-4 text-lg font-semibold">
          Friday
        </option>
        <option value="Saturday" className="p-4 text-lg font-semibold">
          Saturday
        </option>
        <option value="Sunday" className="p-4 text-lg font-semibold">
          Sunday
        </option>
      </select>
    </div>
  );
};

export default DaysPicker;
