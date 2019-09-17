const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const createDate = (date, days = 0) => {
  const realDate = addDays(date, days);
  const day = getDay(realDate);
  const month = getMonth(realDate);
  const year = getYear(realDate);
  return `${month} ${day}, ${year}`;
};

export const createShortDate = (date, days) => {
  const realDate = addDays(date, days);
  const day = getDay(realDate);
  const month = realDate.getMonth() + 1;
  return day + "." + month;
};

export const createWeek = (date) => {
  const today = new Date();
  const weekLength = 7;
  const dates = new Array(weekLength);
  for (let i = 0; i < dates.length; i++) {
    dates[i] = {
      date: createShortDate(today, i),
      hours: ''
    };
  }
  return dates;
};

export const createMonthDates = () => {
  const today = new Date();
  const monthLength = daysInMonth(today.getMonth(), today.getFullYear());
  const dates = new Array(monthLength);
  for (let i = 0; i < dates.length; i++) {
    dates[i] = i;
  }
  return dates;
};

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const getDay = (date) => date.getDate();

const getMonth = (date) => {
  const month = date.getMonth();
  return monthNames[month];
};

const getYear = (date) => {
  return date.getFullYear();
};