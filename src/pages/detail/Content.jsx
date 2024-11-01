import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../component/error";
import ContentLoader from "../../component/loader/ContentLoader";
import Card from "./Card";
import { getDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";

const Content = () => {
  const { loading, error, data } = useSelector((store) => store.covid);

  const dispatch = useDispatch();
  const { code } = useParams();
  const arr = Object.entries(data || {});

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 ">
      {loading ? (
        <ContentLoader />
      ) : error ? (
        <Error error={error} retry={() => dispatch(getDetails(code))} />
      ) : (
        arr.map((i, key) => <Card key={key} item={i} />)
      )}
    </div>
  );
};

export default Content;
