import { Exchange } from "@/enums/exchange";

const toFormat = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const TODAY = toFormat(new Date());
export const ONE_YEAR_AGO = toFormat(
  new Date(new Date().setFullYear(new Date().getFullYear() - 1))
);

const toFormatDateTime = (dateStr: string): string => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
};

export const getLocalDateTime = (
  dateStr: string,
  exchange: Exchange.SHENZHEN | Exchange.HONGKONG
) => {
  const date = new Date(dateStr);

  const timezoneMap = {
    [Exchange.SHENZHEN]: "Asia/Shanghai",
    [Exchange.HONGKONG]: "Asia/Hong_Kong",
  };

  const exchangeTime = date.toLocaleString("en-US", {
    timeZone: timezoneMap[exchange],
  });

  return {
    time: toFormatDateTime(dateStr),
    exchangeTime: toFormatDateTime(exchangeTime),
  };
};
