import _ from "lodash";
import { DateTime } from "luxon";
import React, { useMemo } from "react";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoIosClose,
} from "react-icons/io";

const DATE_FORMATE = "dd/LL/yyyy";

export interface DatePopupProps {
  date?: string;
  setDate: (x: string) => void;

  isOpen: boolean;
  setOpen: (x: boolean) => void;
}

const DatePopup = ({ date, setDate, isOpen, setOpen }: DatePopupProps) => {
  if (!isOpen) {
    return null;
  }

  const onDecreaseMonth = () => {
    if (!date) {
      return;
    }

    const updatedDate = DateTime.fromFormat(date, DATE_FORMATE)
      .minus({
        month: 1,
      })
      .toFormat(DATE_FORMATE);

    return updatedDate;
  };

  const onIncreaseMonth = () => {
    if (!date) {
      return;
    }

    const updatedDate = DateTime.fromFormat(date, DATE_FORMATE)
      .plus({
        month: 1,
      })
      .toFormat(DATE_FORMATE);

    return updatedDate;
  };

  const onClosePopup = () => {
    setOpen(false);
  };

  const actionableDate = useMemo(() => {
    if (!date) {
      return DateTime.now();
    }

    return DateTime.fromFormat(date, DATE_FORMATE);
  }, [date]);

  const monthsDays = useMemo(() => {
    let prevDate = actionableDate.toISO();

    if (!prevDate) {
      prevDate = DateTime.now().toISO();
    }

    let dt = DateTime.fromISO(prevDate).startOf("month");

    const days = [];

    while (dt.month === actionableDate.month) {
      days.push({ dayNumber: dt.day, dayName: dt.toFormat("cccc") });

      dt = dt.plus({ days: 1 });
    }

    return days;
  }, [actionableDate]);

  const onSelectDay = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { day } = event.currentTarget.dataset;

    if (!day) {
      return;
    }

    let prevDate = actionableDate.toISO();

    if (!prevDate) {
      prevDate = DateTime.now().toISO();
    }

    const dt = DateTime.fromISO(prevDate).set({ day: +day });

    setDate(dt.toFormat(DATE_FORMATE));
  };

  return (
    <div className="absolute left-0 top-5 flex flex-col items-center">
      <div className="w-full grid grid-cols-12 border-b">
        <button className="col-span-3" onClick={onDecreaseMonth}>
          <IoIosArrowDropleftCircle />
        </button>
        <div className="col-span-6 flex items-center justify-center space-x-2">
          {actionableDate.toFormat("LLLL yyyy")}
        </div>
        <button className="col-span-3" onClick={onIncreaseMonth}>
          <IoIosArrowDroprightCircle />
        </button>

        <button onClick={onClosePopup}>
          <IoIosClose />
        </button>
      </div>
      <div className="border-b divide-x grid grid-cols-7 gap-0 w-full">
        {_.uniq(monthsDays.map((v) => <p>{v.dayName}</p>))}
      </div>
      <div className="grid grid-cols-7 gap-0 w-full">
        {monthsDays.map((v) => {
          return (
            <button
              onClick={onSelectDay}
              data-day={v.dayNumber}
              className="border rounded-md flex items-center justify-center"
            >
              {v.dayNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DatePopup;
