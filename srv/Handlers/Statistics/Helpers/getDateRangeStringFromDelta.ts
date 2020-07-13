import moment from "moment";
import { getDateFromDelta } from "./getDateFromDelta";
import { DateDelta } from "../Types/DateDelta";

type GetDateRangeStringFromDelta = (
  before?: string,
  after?: string,
  delta?: DateDelta,
  format?: string
) => [string | null, string | null]; // Before, After

export const getDateRangeStringFromDelta: GetDateRangeStringFromDelta = (
  before,
  after,
  delta,
  format = "YYYY-MM-DD"
) => {
  // Process delta
  const deltaDate = delta ? getDateFromDelta(new Date(), delta) : null;
  const beforeDate = deltaDate
    ? moment(deltaDate).add(1, "day").format(format)
    : before;
  const afterDate = deltaDate
    ? moment(deltaDate).add(-1, "day").format(format)
    : after;
  return [beforeDate, afterDate];
};

export default getDateRangeStringFromDelta;
