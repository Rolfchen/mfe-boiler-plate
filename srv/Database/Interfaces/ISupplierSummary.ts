import { IControlledSiteBase } from "./IControlledSiteBase";
export interface ISupplierSummary {
  buyers?: string[]; // Array of buyer's ID
  businessId?: string;
  pbuId: string;
  businessName?: string;
  pbuName: string;
  osaPassed: boolean;
  trainingComplete: boolean;
  auditComplete: boolean;
  certified: boolean;
  openFindingAlerts: number;
  controlledSites: IControlledSiteBase[];
}

export default ISupplierSummary;
