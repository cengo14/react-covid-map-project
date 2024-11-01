import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import Content from "./../pages/detail/Content";
import { data } from "../constant";

const mockStore = configureStore([thunk]);
test("store yüklenme durumundayken ekrana loader gelir", () => {
  const store = mockStore({
    covid: {
      loading: true,
      error: null,
      data: null,
    },
  });
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  screen.getAllByTestId("card-loader");
});
test("store hata durumundayken ekrana error gelir", () => {
  const store = mockStore({
    covid: {
      loading: false,
      error: "Bağlantı zaman aşımına uğradı",
      data: null,
    },
  });
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  screen.getByTestId("error");
});
test("store'a veri geldiği durumun ekrana nesnedeki her bir değer için kart basılır", () => {
  const store = mockStore({
    covid: {
      loading: false,
      error: null,
      data: data,
    },
  });
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  const arr = Object.entries(data);
  arr.forEach((item) => {
    screen.getByText(item[0]);
    screen.getAllByText(!item[1] ? "Bilinmiyor" : item[1]);
  });
});
