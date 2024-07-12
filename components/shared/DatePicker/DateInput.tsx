import React from "react";

import { DateTime } from "luxon";

export interface DateInputProps {
  setDate: (x: string) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

const DateInput = ({ setDate, onFocus }: DateInputProps) => {
  const onEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const code = event.code;

    if (code !== "Enter") {
      return;
    }

    const { value } = event.currentTarget;

    const currentYear = DateTime.now().year;

    let [days, month, year] = value.replace(/[^0-9]/g, ",").split(",");

    days = (+days > 31 || +days < 0 ? 25 : days).toString();
    month = (+month > 12 || +month < 0 ? 12 : month).toString();
    year = (
      +year > currentYear || +year < 0 || currentYear < 2000
        ? currentYear
        : year
    ).toString();

    const formattedDate = `${days}/${month}/${year}`;

    setDate(formattedDate);

    event.currentTarget.value = formattedDate;
  };

  const onBlurInput = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    const { value } = event.currentTarget;

    const currentYear = DateTime.now().year;

    let [days, month, year] = value.replace(/[^0-9]/g, ",").split(",");

    days = (+days > 31 || +days < 0 ? 25 : days).toString();
    month = (+month > 12 || +month < 0 ? 12 : month).toString();
    year = (
      +year > currentYear || +year < 0 || currentYear < 2000
        ? currentYear
        : year
    ).toString();

    const formattedDate = `${days}/${month}/${year}`;

    setDate(formattedDate);

    event.currentTarget.value = formattedDate;
  };

  return (
    <input
      type="text"
      placeholder="DD MM YYYY or DD/MM/YYYY"
      className="w-full bg-white rounded-md p-2 text-base"
      onKeyDown={onEnterPress}
      onBlur={onBlurInput}
      onFocus={onFocus}
    />
  );
};

export default DateInput;
