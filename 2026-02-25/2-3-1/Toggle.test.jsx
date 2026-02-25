import { render, screen } from "@testing-library/react";
import Toggle from "./Toggle";
import userEvent from "@testing-library/user-event";

describe("Toggle", () => {
  test("초기 상태는 OFF이다", () => {
    render(<Toggle />);
    expect(screen.getByText("OFF")).toBeInTheDocument();
  });

  test("클릭하면 ON으로 바뀐다", async () => {
    render(<Toggle />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("ON")).toBeInTheDocument();
  });

  test("다시 클릭하면 OFF로 바뀐다", async () => {
    render(<Toggle />);
    const button = screen.getByRole("button");

    await userEvent.click(button);
    await userEvent.click(button);

    expect(screen.getByText("OFF")).toBeInTheDocument();
  });
});
