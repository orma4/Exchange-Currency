import React, { useEffect, useState } from "react";
import { fetchCurrencyRange } from "../api/fetchCurrency";
import { useSelector, useDispatch } from "react-redux";
import Chart from "../ui/Chart";
import { getCurrentChartData, set } from "../../features/counter/counterSlice";
import { convertDateFormat, addDays } from "../../utils/date";
import DatePicker from "../ui/Picker";

const UsdToGbp = () => {
  const data = useSelector(getCurrentChartData("usdToGbp"));
  const dispatch = useDispatch();

  console.log(data);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [dateRange, setDateRange] = useState([
    convertDateFormat(new Date()),
    convertDateFormat(addDays(new Date(), 1)),
  ]); // [startDate, endDate]

  useEffect(() => {
    fetchCurrencyRange(dateRange, "USD", "GBP")
      .then((data) => {
        console.log(data, "fetchCurrenciesResult");
        dispatch(set(data));
      })
      .catch((err) => {
        // ???
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Chart loading={loading} data={data} />
      <DatePicker />
    </div>
  );
};
export default UsdToGbp;
