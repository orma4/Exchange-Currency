import { config } from "../../config";
import { addDays, convertDateFormat } from "../../utils/date";

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
  console.log(results);
  console.log(JSON.stringify(results));
}

export async function fetchCurrency(date, baseCurrency, destinationCurrency) {
  try {
    console.log("fetchCurrency");
    // check if date with baseCurrency & destinationCurrency exists in localStorage, if so, return the value
    // from localStorage without fetching
    const response = await fetch(
      `${config.api.url}/${date}?access_key=${config.api.API_KEY}&base=${baseCurrency}&symbols=${destinationCurrency}`
    );
    const body = await response.json();

    console.log("response", response);
    if (response.ok && body.success) {
      console.log(body);
      return body.result;
    }
    return { error: body.error };
  } catch (error) {
    console.log("error", error.message);
    return { error: error.message };
  }
}
