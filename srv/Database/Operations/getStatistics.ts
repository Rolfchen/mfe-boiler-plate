import { MongoDBService } from "../../Database/MongoDBService";
import { FindOneOptions } from "mongodb";
import {
  IStatistic,
  IStatisticResponse,
  IStatisticFilter,
} from "../Interfaces"; // Namespace?
import { getStatisticsFilterQuery, getStatisticsCounts } from "../Helpers";

type GetStatistics = (
  filters?: IStatisticFilter,
  options?: FindOneOptions
) => Promise<IStatisticResponse[]>;

export const getStatistics: GetStatistics = async (filters) => {
  const db = await MongoDBService().getDb();
  const query = getStatisticsFilterQuery(filters);
  const documents = await db
    .collection("Statistics")
    .aggregate<IStatistic>(query)
    .toArray();
  const result = documents.map((doc) => {
    return getStatisticsCounts(doc);
  });
  return result;
};

export default getStatistics;
