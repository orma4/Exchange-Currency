import { config } from "../../config";
import https from "https";

export async function fetchCurrency(
  baseCurrency,
  destCurrency,
  [startDate, endDate]
) {
  const response = await fetch(
    `${config.api.url}?apikey=${config.api.API_KEY}&base_currency=${baseCurrency}&date_from=${startDate}&date_to=${endDate}`,
    {
      method: "GET",
      agent: new https.Agent({
        rejectUnauthorized: false,
      }),
    }
  );

  if (response.ok) {
    const { data } = await response.json();

    return Object.entries(data).map(([date, result]) => {
      const value = result[destCurrency];
      return { date, value };
    });
  } else {
    throw new Error(`Couldn't retrieve data`);
  }
}
