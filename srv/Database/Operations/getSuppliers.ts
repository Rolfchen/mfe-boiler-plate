import { MongoDBService } from "../../Database/MongoDBService";
import { ISuppliersFilter } from "../Interfaces/ISuppliersFilter";
import { IBusinessDetail } from "../Interfaces/IBusinessDetail";
import { getSuppliersFilterQuery } from "../Helpers";

type GetSuppliers = (
  filters?: ISuppliersFilter,
  options?: any
) => Promise<IBusinessDetail[]>;

export const getSuppliers: GetSuppliers = async (filters) => {
  const db = await MongoDBService().getDb();
  const pipeline = getSuppliersFilterQuery(filters);
  const srcCollection = filters?.search ? "SearchIndex" : "PBUDetails";

  const documents = await db
    .collection(srcCollection)
    .aggregate<IBusinessDetail>(pipeline)
    .toArray();
  return documents;
}

export default getSuppliers;
