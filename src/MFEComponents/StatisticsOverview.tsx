/**
 * @NOTE This components is here as a placeholder and will need to be completed by the version in the buyers-dashboard repo.
 * @TODO as above.
 */

import React, { useContext, useState, useEffect } from "react";
import { BuyersSummary } from "../Components/Buyers";
import { ConfigurationContext } from "../Context";
import { useSupplierStatistics } from "../Hooks";
import { getCleanStatisticsData, setStatisticsOverviewData } from "../Helpers";

const defaultNotAvailable = "N/A";

type Props = {
  buyerId: string;
};

const StatisticsOverview = ({ buyerId }: Props) => {
  const { apiDomain } = useContext(ConfigurationContext);
  const [statisticsData, setStatisticsData] = useState([]);

  const {
    data: dataToday,
    isFetching: isFetchingToday,
  } = useSupplierStatistics(apiDomain, buyerId);
  const {
    data: dataSixMonths,
    isFetching: isFetchingSixMonths,
  } = useSupplierStatistics(apiDomain, buyerId, "6M");
  const {
    data: dataOneYear,
    isFetching: isFetchingOneYear,
  } = useSupplierStatistics(apiDomain, buyerId, "12M");

  // compose the statistics data when all request is done
  // this could be done differently if the request is already combine all delta
  useEffect(() => {
    if (!isFetchingToday && !isFetchingSixMonths && !isFetchingOneYear) {
      setStatisticsData([
        setStatisticsOverviewData(
          "Total suppliers:",
          "Total suppliers data",
          dataToday.length > 0
            ? getCleanStatisticsData(dataToday[0].total, defaultNotAvailable)
            : defaultNotAvailable,
          dataSixMonths.length > 0
            ? getCleanStatisticsData(
                dataSixMonths[0].total,
                defaultNotAvailable
              )
            : defaultNotAvailable,
          dataOneYear.length > 0
            ? getCleanStatisticsData(dataOneYear[0].total, defaultNotAvailable)
            : defaultNotAvailable
        ),
        setStatisticsOverviewData(
          "Total supplier sites:",
          "Total supplier sites data",
          dataToday.length > 0
            ? getCleanStatisticsData(
                dataToday[0].totalSites,
                defaultNotAvailable
              )
            : defaultNotAvailable,
          dataSixMonths.length > 0
            ? getCleanStatisticsData(
                dataSixMonths[0].totalSites,
                defaultNotAvailable
              )
            : defaultNotAvailable,
          dataOneYear.length > 0
            ? getCleanStatisticsData(
                dataOneYear[0].totalSites,
                defaultNotAvailable
              )
            : defaultNotAvailable
        ),
        setStatisticsOverviewData(
          "Total certified sites:",
          "Total certified sites data",
          dataToday.length > 0
            ? getCleanStatisticsData(
                dataToday[0].totalCertified,
                defaultNotAvailable
              )
            : defaultNotAvailable,
          dataSixMonths.length > 0
            ? getCleanStatisticsData(
                dataSixMonths[0].totalCertified,
                defaultNotAvailable
              )
            : defaultNotAvailable,
          dataOneYear.length > 0
            ? getCleanStatisticsData(
                dataOneYear[0].totalCertified,
                defaultNotAvailable
              )
            : defaultNotAvailable
        ),
        setStatisticsOverviewData(
          "Open Finding Alerts:",
          "Open Finding Alerts data",
          dataToday.length > 0
            ? getCleanStatisticsData(
                dataToday[0].totalFindingAlerts,
                defaultNotAvailable
              )
            : defaultNotAvailable,
          dataSixMonths.length > 0
            ? getCleanStatisticsData(
                dataSixMonths[0].totalFindingAlerts,
                defaultNotAvailable
              )
            : defaultNotAvailable,
          dataOneYear.length > 0
            ? getCleanStatisticsData(
                dataOneYear[0].totalFindingAlerts,
                defaultNotAvailable
              )
            : defaultNotAvailable
        ),
      ]);
    }
  }, [isFetchingToday, isFetchingSixMonths, isFetchingOneYear]);

  return (
    <React.Fragment>
      <BuyersSummary summaryItems={statisticsData} />
    </React.Fragment>
  );
};

export default StatisticsOverview;
