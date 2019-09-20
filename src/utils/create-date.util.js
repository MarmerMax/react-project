import {MONTH_NAMES, WEEK_DURATION} from "../constants/dates.constants";

export const createDateUtil = (days = 0, date = new Date()) => {
  const realDate = addDays(date, days);
  return realDate;
};

export const dateToString = (date) => {
  const day = getDay(date);
  const month = getMonth(date);
  const year = getYear(date);
  return `${month} ${day}, ${year}`;
};

export const createShortDate = (date, days) => {
  const realDate = addDays(date, days);
  const day = getDay(realDate);
  const month = realDate.getMonth() + 1;
  return `${day}.${month}`;
};

export const createWeek = (date) => {
  const dates = new Array(WEEK_DURATION);
  for (let i = 0; i < dates.length; i++) {
    dates[i] = {
      label: createShortDate(date, i)
    };
  }
  return dates;
};

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const getDay = (date) => date.getDate();

const getMonth = (date) => {
  const month = date.getMonth();
  return MONTH_NAMES[month];
};

const getYear = (date) => date.getFullYear();

// export const createMonthDates = () => {
//   const today = new Date();
//   const monthLength = daysInMonth(today.getMonth(), today.getFullYear());
//   const dates = new Array(monthLength);
//   for (let i = 0; i < dates.length; i++) {
//     dates[i] = i;
//   }
//   return dates;
// };

// const daysInMonth = (month, year) => {
//   return new Date(year, month, 0).getDate();
// };
