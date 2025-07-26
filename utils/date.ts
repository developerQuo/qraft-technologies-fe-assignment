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
