import { fireEvent, render, screen } from "@testing-library/react";
import Error from "../component/error";

test("prop olarak alınan hata mesajı ekrana basılır", () => {
  render(<Error error="Bağlantı problemi" />);
  screen.getByText("Bağlantı problemi");
});
test("prop olarak alınan fonksiyon butona tıklanınca çalışır", () => {
  const mockFn = jest.fn();
  render(<Error error="Bağlantı problemi" retry={mockFn} />);
  fireEvent.click(screen.getByRole("button"));
  expect(mockFn).toHaveBeenCalled();
});
