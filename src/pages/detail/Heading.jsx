import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeaderLoader from "../../component/loader/HeaderLoader";

const Heading = () => {
  const { loading, data } = useSelector((store) => store.covid);

  return (
    <div className="flex justify-between items-center">
      <Link
        to="/"
        className="bg-gray-400 px-3 py-1 rounded-lg hover:bg-gray-500 drop-shadow-[0_0_2px_rgba(0,0,0,0.5)]"
      >
        <IoMdArrowRoundBack size={32} />
      </Link>
      {loading ? (
        <HeaderLoader />
      ) : (
        data && (
          <div className="flex items-center gap-2">
            <h1 className="text-black text-2xl lg:text-3xl font-bold">
              {data.country}
            </h1>
            <img
              className="drop-shadow-[0_0_5px_rgba(0,0,0,0.5)] size-16"
              src={`https://flagsapi.com/${data.code}/flat/64.png`}
              alt="flag"
            />
          </div>
        )
      )}
    </div>
  );
};

export default Heading;
