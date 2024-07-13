import TimePicker from "@/components/shared/TimePicker";
import { render, screen, fireEvent } from "@testing-library/react";

describe("The time should be available", () => {
  test("Time should be 2:30", async () => {
    let date = "";
    render(<TimePicker onTimeChange={(value) => (date = value)} />);

    const hoursEl = await screen.findByTestId("time-hours");
    const minutesEl = await screen.findByTestId("time-minutes");

    fireEvent.change(hoursEl, {
      target: {
        value: "2",
      },
    });

    fireEvent.change(minutesEl, {
      target: {
        value: "30",
      },
    });

    const [hh, mm] = date.split(":");

    expect(date).toBeTruthy();
    expect(hh).toBeTruthy();
    expect(mm).toBeTruthy();

    expect(hh).toBe("2");
    expect(mm).toBe("30");
  });
});
