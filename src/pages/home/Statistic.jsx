import React, { useEffect, useState } from "react";
import Container from "../../component/container";
import millify from "millify";
import Item from "./Item";
import api from "../../utils/api";
import HomeLoader from "../../component/loader/HomeLoader";
import Error from "../../component/error";

const Statistic = () => {
  const [loading, setLoading] = useState(true);
  const [statistic, setStatistic] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    api
      .get("/totals")
      .then((res) => setStatistic(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Container designs="!py-0">
      <div className="bg-white shadow-lg rounded-xl p-5 grid grid-cols-3 gap-x-5 mt-[-34px] md:mt-[-48px]">
        {loading ? (
          <>
            <HomeLoader color={"red"} />
            <HomeLoader color={"green"} />
            <HomeLoader color={"gray"} />
          </>
        ) : error ? (
          <p className="col-span-3 text-center">
            İstatistik verileri alınamıyor
          </p>
        ) : (
          <>
            <Item
              color="text-pink-600"
              text="Toplam Vaka"
              value={millify(statistic[0]?.confirmed, { locales: "tr-TR" })}
            />
            <Item
              color="text-green-600"
              text="Toplam İyileşen"
              value={millify(statistic[0].recovered, { locales: "tr-TR" })}
            />
            <Item
              color="text-gray-500"
              text="Toplam Vefat"
              value={millify(statistic[0].deaths, { locales: "tr-TR" })}
            />
          </>
        )}

        <div></div>
      </div>
    </Container>
  );
};

export default Statistic;
