import React, { useEffect, useState } from "react";
import { fetchCurrencyRange, fetchCurrency } from "../api/fetchCurrency";
import { useSelector, useDispatch } from "react-redux";
import Chart from "../ui/Chart";
import { getCurrentChartData, set } from "../../features/counter/counterSlice";
import { convertDateFormat, addDays } from "../../utils/date";
import DatePicker from "../ui/Picker";

const UsdToGbp = () => {
  const data = useSelector(getCurrentChartData("usdToGbp"));
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [dateRange, setDateRange] = useState([
    convertDateFormat(new Date()),
    convertDateFormat(addDays(new Date(), 1)),
  ]);

  useEffect(() => {
    fetchCurrency("USD", dateRange)
      .then((data) => {
        console.log(data, "fetchCurrenciesResult");
        dispatch(set(data));
      })
      .catch((err) => {
        // todo
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {console.log(dateRange)}
      <Chart loading={loading} data={data} />
      <DatePicker />
    </div>
  );
};
export default UsdToGbp;
