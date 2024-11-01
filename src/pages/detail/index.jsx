import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import store from "./../../redux/store";
import DetailLoader from "../../component/loader/DetailLoader";
import Error from "../../component/error";
import Heading from "./Heading";
import Content from "./Content";

const Detail = () => {
  const { code } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(code));
  }, []);

  return (
    <div className="flex-1 text-white grid place-items-center p-6">
      <div className="bg-white border shadow-2xl min-h-[80%] px-8 py-6 rounded-lg max-w-3xl max-md:w-full md:min-w-[500px]">
        <Heading />
        <Content />
      </div>
    </div>
  );
};

export default Detail;
