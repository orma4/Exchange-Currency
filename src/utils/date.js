export const convertDateFormat = (date) => date.toISOString().split("T")[0];

export const addDays = (date, days) => {
  date.setDate(date.getDate() + days);
  return date;
};
