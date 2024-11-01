import { render, screen } from "@testing-library/react";
import Item from "../pages/home/Item";

test("Gönderilen proplar doğru şekilde kullanılıyor mu?", () => {
  render(<Item color="text-pink-600" text="Naber yapram" value="15,11M" />);
  const icon = screen.getByTestId("svg");
  expect(icon).toHaveClass("text-pink-600");
  screen.getByText("Naber yapram");
  screen.getByRole("heading", { name: "15,11M" });
});
