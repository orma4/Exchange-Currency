import { config } from "../../config";
import { addDays, convertDateFormat } from "../../utils/date";

const URL = config.api.url;
const API_KEY = config.api.API_KEY;

export async function fetchCurrencyRange(
  [startDate, endDate],
  baseCurrency,
  destinationCurrency
) {
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  let currentDate = startDate;

  let promises = [];
  while (currentDate <= endDate) {
    promises.push(async () => {
      return fetchCurrency(
        convertDateFormat(currentDate),
        baseCurrency,
        destinationCurrency
      );
    });

    addDays(currentDate, 1);
  }

  const results = await Promise.allSettled(
    promises.map((promise) => promise())
  );
  //console.log(results);
  //console.log(JSON.stringify(results));
}

export async function fetchCurrency(baseCurrency, [startDate, endDate]) {
  try {
    //console.log("fetchCurrency");
    // check if date with baseCurrency & destinationCurrency exists in localStorage, if so, return the value
    // from localStorage without fetching
    console.log(startDate);
    const response = await fetch(
      `${URL}?apikey=${API_KEY}&base_currency=${baseCurrency}&date_from=${startDate}&date_to=${startDate}`,
      {
        mode: "no-cors",
        credentials: "include",
        method: "POST",
      }
    );
    const body = await response.json();

    console.log("response", response);
    if (response.ok && body.success) {
      //console.log(body);
      return body.result;
    }
    return { error: body.error };
  } catch (error) {
    console.log("error", error.message);
    return { error: error.message };
  }
}
