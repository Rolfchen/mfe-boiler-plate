import ContactPersonType from "./ContactPersonType";

type SupplierBusinessDetailType = {
  name: string;
  abn?: string;
  supplyType: "direct" | "indirect";
  contact: ContactPersonType;
};

export default SupplierBusinessDetailType;
