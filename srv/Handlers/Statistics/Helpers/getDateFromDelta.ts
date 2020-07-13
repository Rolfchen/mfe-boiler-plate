import moment from "moment";
import type { DateDelta } from "../Types/DateDelta";

type GetDateFromDelta = (
  fromDate: string | Date,
  delta?: DateDelta,
  format?: string
) => Date;

export const getDateFromDelta: GetDateFromDelta = (
  fromDate,
  delta,
  format = "YYYY-MM-DD"
) => {
  const fromMoment =
    typeof fromDate === "string"
      ? moment.parseZone(fromDate, format)
      : moment(fromDate);
  switch (delta) {
    case "6M":
      return fromMoment.add(-6, "months").toDate();
    case "12M":
      return fromMoment.add(-12, "months").toDate();
    default:
      // Defaults to no delta.
      return fromMoment.toDate();
  }
};

export default getDateFromDelta;
