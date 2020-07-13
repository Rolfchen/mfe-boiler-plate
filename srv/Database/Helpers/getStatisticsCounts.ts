import { IStatistic } from "../Interfaces/IStatistic";
import { IStatisticResponse } from "../Interfaces/IStatisticResponse";

export type GetStatisticsCounts = (
  statistics: IStatistic
) => IStatisticResponse;

export const getStatisticsCounts: GetStatisticsCounts = (statistics) => {
  const { supplierStats, buyerId, buyerName, addDate } = statistics;
  const total = supplierStats.length;
  const totalSites = supplierStats.reduce((sum, supplier) => {
    return sum + supplier?.controlledSites?.length || 0;
  }, 0);
  const totalOsaPassed = supplierStats.filter((supplier) => {
    return supplier.osaPassed;
  }).length;

  const totalTrainingPassed = supplierStats.filter((supplier) => {
    return supplier.trainingComplete;
  }).length;

  const totalAuditComplete = supplierStats.filter((supplier) => {
    return supplier.auditComplete;
  }).length;

  const totalCertified = supplierStats.filter((supplier) => {
    return supplier.certified;
  }).length;

  const totalFindingAlerts = supplierStats.reduce((sum, supplier) => {
    return sum + supplier.openFindingAlerts;
  }, 0);

  return {
    buyerId,
    buyerName,
    total,
    totalSites,
    totalOsaPassed,
    totalTrainingPassed,
    totalAuditComplete,
    totalCertified,
    totalFindingAlerts,
    addDate,
  };
};

export default getStatisticsCounts;
