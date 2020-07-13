import { ISupplierSummary } from "./ISupplierSummary";

export interface IStatistic {
  buyerId: string; // ID of buyer
  buyerName: string; // Business name of the buyer
  type: "SUPPLIER_STATS";
  supplierStats: ISupplierSummary[];
  addDate: Date; // Datetime when this statistic's added.
}

export default IStatistic;
