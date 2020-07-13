export interface IStatisticResponse {
  buyerId: string;
  buyerName: string;
  total: number;
  totalSites: number;
  totalOsaPassed: number;
  totalTrainingPassed: number;
  totalAuditComplete: number;
  totalCertified: number;
  totalFindingAlerts?: number;
  addDate: Date;
}

export default IStatisticResponse;
