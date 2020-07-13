import moment from "moment";
import { IStatisticFilter } from "../Interfaces";

type GetStatisticsFilterQuery = (filter?: IStatisticFilter) => object[];

const defaultDateFormat = "YYYY-MM-DD";
export const getStatisticsFilterQuery: GetStatisticsFilterQuery = (filter?) => {
  const { after, before, buyer } = filter || {};
  const stagesMatchBuyer = buyer
    ? [
      {
        $match: {
          $or: [{ name: buyer }, { orgId: buyer }],
        },
      },
    ]
    : [];
  const stageDateRange = {
    ...(after
      ? {
        $gte: moment.parseZone(after, defaultDateFormat).toDate(),
      }
      : {}),
    ...(before
      ? {
        $lt: moment.parseZone(before, defaultDateFormat).toDate(),
      }
      : {}),
  };
  const stagesMatchDate =
    after || before
      ? [
        {
          $match: {
            addDate: stageDateRange,
          },
        },
      ]
      : [];
  const stagesGroup = !buyer
    ? [
      {
        $group: {
          _id: {
            batchId: "$batchId",
            addDate: "$addDate",
          },
          stats: {
            $push: "$$ROOT",
          },
        },
      },
    ]
    : [];
  const stagesLimit = [
    {
      $sort: {
        addDate: -1,
      },
    },
    {
      $limit: 1,
    },
  ];
  const stagesUnwind = !buyer
    ? [
      {
        $unwind: "$stats",
      },
      {
        $replaceRoot: {
          newRoot: "$stats",
        },
      },
    ]
    : [];
  const stageProject = [
    {
      $project: {
        buyerId: "$orgId",
        buyerName: "$name",
        type: 1,
        supplierStats: 1,
        batchId: 1,
        addDate: 1,
      },
    },
  ];
  const pipeline = [
    ...stagesMatchBuyer,
    ...stagesMatchDate,
    ...stagesGroup,
    ...stagesLimit,
    ...stagesUnwind,
    ...stageProject,
  ];
  return pipeline;
};

export default getStatisticsFilterQuery;
