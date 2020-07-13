import { Router } from "express";
import { getStatisticsRequest } from "../../Handlers/Statistics";

export const StatisticsRoute = Router().get(
  "/statistics",
  getStatisticsRequest
);

export default StatisticsRoute;
