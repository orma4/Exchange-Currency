import React, { useEffect, useState } from "react";
import { fetchCurrency } from "../api/fetchCurrency";
import Chart from "../ui/Chart";

const UsdToGbp = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetchCurrency().then((data) => {
      setCurrencies(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Chart loading={loading} />
    </div>
  );
};
export default UsdToGbp;
