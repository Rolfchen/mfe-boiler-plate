import { IPBUBase } from "./IPBUBase";
import IAddress from "./IAddress";

export interface IPBUResponse extends IPBUBase {
  businessId?: string;
  businessName?: string;
  description?: string;
  businessStatus?: string;
  physicalAddress?: IAddress;
}

export default IPBUResponse;
