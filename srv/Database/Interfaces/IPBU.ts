import { IPBUBase } from "./IPBUBase";
import { IAddress } from "./IAddress";
import { IControlledSiteBase } from "./IControlledSiteBase";

export interface IPBU extends IPBUBase {
  appId: string;
  businessId: string;
  description: string;
  businessName: string;
  businessStatus: string;
  physicalAddress?: IAddress;
  osaComment: string | null;
  osaResult: string;
  osaFeedback: string; // It will be in a form of file path.
  certComment: string | null;
  auditCommet: string | null;
  trainingComment: string | null;
  trainingQuota: number;
  controlledSites: IControlledSiteBase[] | null;
}

export default IPBU;
