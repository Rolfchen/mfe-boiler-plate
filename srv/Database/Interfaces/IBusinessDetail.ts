import { ObjectID } from "mongodb";
import { IAttributeBase } from "./IAttributeBase";
import { IAddress } from "./IAddress";
import { IPBUBase } from "./IPBUBase";

export interface IBusinessDetail {
  _id: ObjectID;
  ordId: string;
  name: string;
  tradingName: string;
  abn: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  physicalAddress: IAddress;
  postalAddress: IAddress | null;
  pbu?: IPBUBase[];
  supplierTypes?: IAttributeBase[];
  buyerTypes?: IAttributeBase[];
  isBuyer: boolean;
  isSupplier: boolean;
  status: string;
  appId?: string; // Registration application ID
}

export default IBusinessDetail;
