import React from "react";
import useFetch from "react-fetch-hook";

const Apifetch = () => {
  const { isLoading, error, data } = useFetch(
    "http://localhost:3000/api/products"
  );

  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Apifetch;
