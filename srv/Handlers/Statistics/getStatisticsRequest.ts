import { RequestHandler } from "express";
import moment from "moment";
import { getStatistics } from "../../Database/Operations";
import { getDateRangeStringFromDelta } from "./Helpers";

import { IStatisticFilterRequest } from "./Interfaces/IStatisticFilterRequest";

export const getStatisticsRequest: RequestHandler = async (req, res) => {
  const { before, after, buyer, delta }: IStatisticFilterRequest = req.query;
  const [beforeDate, afterDate] = getDateRangeStringFromDelta(
    before,
    after,
    delta
  );
  const result = await getStatistics({
    before: beforeDate,
    after: afterDate,
    buyer,
  });
  res.send(result);
};

export default getStatisticsRequest;
