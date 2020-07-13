const getCleanStatisticsData = (data, defaultNotAvailableLabel = "N/A") => {
  return data && data !== null ? data : defaultNotAvailableLabel;
};

export default getCleanStatisticsData;
