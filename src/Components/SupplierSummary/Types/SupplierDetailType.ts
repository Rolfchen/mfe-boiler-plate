import SupplierBusinessDetailType from "./SupplierBusinessDetailType";
// add more type here

type SupplierDetailType = {
  id: string;
} & SupplierBusinessDetailType; // add more type here

export default SupplierDetailType;
