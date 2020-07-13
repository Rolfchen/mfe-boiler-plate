import { useQuery, QueryResult } from "react-query";
import superagent from "superagent";

// @TODO - This should be in a separate helper or utils folder. And should be typed.
const getSupplierStatisticsById = async (_, { apiDomain, buyerId, delta }) => {
  let data = [];
  await superagent
    // supply this from env variable
    .get(`${apiDomain}/statistics`)
    .query({
      buyer: buyerId,
      delta: delta ? delta : null,
    })
    .then((response) => {
      data = response.body;
    });

  return data;
};

type UseSupplierStatistics = (
  apiDomain: string,
  buyerId: string,
  delta?: string
) => QueryResult<any, any>;

const useSupplierStatistics: UseSupplierStatistics = (
  apiDomain,
  buyerId,
  delta = ""
) => {
  return useQuery(
    ["supplierStatistics", { apiDomain, buyerId, delta }],
    getSupplierStatisticsById,
    {
      refetchOnWindowFocus: false,
      staleTime: 300000
    }
  );
};

export default useSupplierStatistics;
