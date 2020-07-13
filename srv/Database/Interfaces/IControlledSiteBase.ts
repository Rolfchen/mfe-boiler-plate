import { IAddress } from "./IAddress";

export interface IControlledSiteBase {
  siteId: string;
  publicSiteId: string;
  name: string;
  address?: IAddress;
  auditStatus: string;
  certStatus: string;
}

export default IControlledSiteBase;
