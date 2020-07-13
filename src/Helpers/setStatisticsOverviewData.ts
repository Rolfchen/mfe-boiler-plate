const setStatisticsOverviewData = (
  title: string,
  tooltipText: string,
  todayData: number,
  sixMonthsData: number,
  oneYearData: number
) => {
  return { title, tooltipText, todayData, sixMonthsData, oneYearData };
};

export default setStatisticsOverviewData;
