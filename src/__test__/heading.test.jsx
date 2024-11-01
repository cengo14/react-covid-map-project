import { render, screen } from "@testing-library/react";
import Heading from "../pages/detail/Heading";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { data } from "../constant";

const mockStore = configureStore([thunk]);
it("store yüklenme durumundayken ekrana loader basılır", () => {
  const store = mockStore({
    covid: {
      loading: true,
      error: null,
      data: null,
    },
  });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );
  screen.getByTestId("header-loader");
});
it("store da yüklenme bittiğinde ekranda loader yoktur", () => {
  const store = mockStore({
    covid: {
      loading: false,
      error: null,
      data: null,
    },
  });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );
  const element = screen.queryByTestId("header-loader");
  expect(element).toBeNull();
});
it("store'a veri geldiğinde ekrana veriler basılır", () => {
  const store = mockStore({
    covid: {
      loading: false,
      error: null,
      data: data,
    },
  });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );
  screen.getByRole("heading", { name: data.country });
  const flag = screen.getByAltText("flag");
  expect(flag).toHaveAttribute(
    "src",
    `https://flagsapi.com/${data.code}/flat/64.png`
  );
});
