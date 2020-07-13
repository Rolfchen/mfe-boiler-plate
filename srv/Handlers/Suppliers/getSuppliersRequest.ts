import { RequestHandler } from "express";
import { getSuppliers } from "../../Database/Operations";
import { ISuppliersFilterRequest } from "./Interfaces/ISuppliersFilterRequest";

export const getSuppliersRequest: RequestHandler = async (req, res) => {
  const { search }: ISuppliersFilterRequest = req.query;

  const result = await getSuppliers({
    search
  });
  res.send(result);
}

export default getSuppliersRequest;
