import { render, screen, waitFor } from "@testing-library/react";
import Statistic from "./../pages/home/Statistic";

import api from "./../utils/api";
import millify from "millify";

jest.mock("./../utils/api");

describe("İstatistik component testleri", () => {
  beforeEach(()=>{
    jest.clearAllMocks()
  })
test("Bileşen renderlandığıda ekrana loader geliyor mu", async () => {
  api.get.mockResolvedValueOnce({ data: [] });
  render(<Statistic />);
  screen.getAllByTestId("home-loader");
  // await screen.findByText(
  //   "Toplam Vaka",
  //   {},
  //   {
  //     timeout: 3000,
  //   }
  // );
  // await screen.findByText(
  //   "Toplam İyileşen",
  //   {},
  //   {
  //     timeout: 3000,
  //   }
  // );
  // await screen.findByText(
  //   "Toplam Vefat",
  //   {},
  //   {
  //     timeout: 3000,
  //   }
  // );
});
test("Loaderin ardından ekrana istatistikler geliyor mu", async () => {
  const totals = {
    confirmed: 701166431,
    recovered: 590451974,
    critical: 2877,
    deaths: 7014639,
    lastChange: "2024-06-04T00:25:51+00:00",
    lastUpdate: "2024-08-09T09:13:41+00:00",
  };
  api.get.mockResolvedValueOnce({ data: [totals] });
  render(<Statistic />);
  await waitFor(() =>
    expect(screen.queryAllByTestId("home-loader").length).toBe(0)
  );
  expect(screen.getByText("Toplam Vaka")).toBeInTheDocument();
  expect(
    screen.getByText(new RegExp(`^${millify(totals.confirmed)}`))
  ).toBeInTheDocument();
  expect(screen.getByText("Toplam İyileşen")).toBeInTheDocument();
  expect(
    screen.getByText(new RegExp(`^${millify(totals.recovered)}`))
  ).toBeInTheDocument();
  expect(screen.getByText("Toplam Vefat")).toBeInTheDocument();
  expect(
    screen.getByText(new RegExp(`^${millify(totals.deaths)}`))
  ).toBeInTheDocument();
});
test("Hata durumunda ekranda loader yoktur ve hata mesajı yazar", async () => {
  api.get.mockRejectedValueOnce(Error("Zaman aşımına uğradı"));
  render(<Statistic />);
  await waitFor(() =>
    expect(screen.queryAllByTestId("home-loader").length).toBe(0)
  );
  expect(screen.queryByText("Toplam Vaka")).not.toBeInTheDocument();
  screen.getByText("İstatistik verileri alınamıyor");
});
});


