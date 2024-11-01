import React from "react";

import { BiError } from "react-icons/bi";

const Error = ({ error, retry }) => {
  return (
    <div className="my-20 flex flex-col justify-center items- col-span-3">
      <div
        data-testid="error"
        className="bg-red-400 p-5 rounded mb-10 flex flex-col justify-center items-center"
      >
        <p>
          <BiError size={56} color="red" />
        </p>

        <p>Üzgünüz bir sorun oluştu</p>
        <p className="text-black font-bold">{error}</p>
      </div>
      <button
        onClick={retry}
        className="border shadow text-black py-2 px-4 rounded-md hover:bg-gray-100"
      >
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
