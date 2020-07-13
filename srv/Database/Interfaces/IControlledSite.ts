import { IControlledSiteBase } from "./IControlledSiteBase";
import { Tracing } from "trace_events";

export interface IControlledSite extends IControlledSiteBase {
  orgId: string;
  contactNumber?: string;
  email?: string;
  addTime: Date | null;
  updateTime: Date | null;
}

export default IControlledSite;
