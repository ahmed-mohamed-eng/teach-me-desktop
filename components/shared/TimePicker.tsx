import React, { useEffect, useState } from "react";

import { Tooltip } from "react-tooltip";

export interface TimePickerProps {
  onTimeChange: (time: string) => void;
}

const TimePicker = ({ onTimeChange }: TimePickerProps) => {
  const [hours, setHours] = useState<string>("0");
  const [minutes, setMinutes] = useState<string>("0");

  useEffect(() => {
    if (hours && minutes) {
      onTimeChange(`${hours}:${minutes}`);
    }
  }, [hours, minutes]);

  return (
    <div
      className="flex items-center justify-start space-x-2"
      data-tooltip-id="time-info"
    >
      <input
        data-testid="time-hours"
        type="number"
        placeholder="HH"
        className="w-8"
        onChange={(e) => setHours(e.target.value)}
        min={0}
        max={24}
        defaultValue={0}
      />
      <p>:</p>
      <input
        data-testid="time-minutes"
        type="number"
        placeholder="MM"
        className="w-8"
        onChange={(e) => setMinutes(e.target.value)}
        min={0}
        max={59}
        defaultValue={0}
      />

      <Tooltip id="time-info">
        <p>The time should be in 24hrs formate</p>
      </Tooltip>
    </div>
  );
};

export default TimePicker;
