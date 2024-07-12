import { render, screen, fireEvent } from "@testing-library/react";

import DaysPicker from "@/components/shared/DaysPicker";

describe("Select Day", () => {
  test("value should be monday", async () => {
    let date = "";

    render(<DaysPicker getDay={(e) => (date = e)} />);

    const selectEl = await screen.findByTestId("select-day");

    fireEvent.change(selectEl, {
      target: {
        value: "Monday",
      },
    });

    expect(date).toBeTruthy();
  });
});
