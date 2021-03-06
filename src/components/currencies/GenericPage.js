import React, { useEffect, useState } from "react";
import { fetchCurrency } from "../api/fetchCurrency";
import { useSelector, useDispatch } from "react-redux";
import Chart from "../ui/Chart";
import Spinner from "../ui/Spinner";
import {
  getCurrentChartData,
  setCurrencyExchanges,
} from "../../features/currency/currencySlice";
import { convertDateFormat, addDays } from "../../utils/date";
import DatePicker from "../ui/Picker";
import "../styles/GenericPage.css";

const GenericPage = ({ storeKey = "usdToGbp", base = "USD", dest = "GBP" }) => {
  const currencyExchanges = useSelector(getCurrentChartData(storeKey));
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(addDays(new Date(), -7));
  const [endDate, setEndDate] = useState(new Date());

  const fetchData = async () => {
    try {
      setLoading(true);
      const dateRange = [
        convertDateFormat(startDate),
        convertDateFormat(endDate),
      ];
      const results = await fetchCurrency(base, dest, dateRange);
      dispatch(setCurrencyExchanges({ currency: storeKey, data: results }));
    } catch {
      console.log("Error in fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (endDate !== null) {
      fetchData();
    }
  }, [endDate]);

  return (
    <div className="generic-root">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Chart data={currencyExchanges} storeKey={storeKey} />
          <div className="date-picker">
            <DatePicker
              endDate={endDate}
              setEndDate={setEndDate}
              startDate={startDate}
              setStartDate={setStartDate}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default GenericPage;
