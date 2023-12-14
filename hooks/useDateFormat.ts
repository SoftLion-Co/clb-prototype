import { DateTime } from "luxon";

const useDateFormat = (dateString: string, locale: string) => {
  const dateParts = dateString.split("/");
  const parsedDate = DateTime.fromObject({
    year: parseInt(dateParts[2], 10),
    month: parseInt(dateParts[1], 10),
    day: parseInt(dateParts[0], 10),
  });

  // Map 'ua' to 'uk' for Luxon locale
  if (locale === "ua") {
    locale = "uk";
  }

  const formattedDate = parsedDate.setLocale(locale).toLocaleString({
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return formattedDate;
};

export default useDateFormat;
