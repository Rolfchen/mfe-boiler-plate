import { Router } from "express";
import { getSuppliersRequest } from "../../Handlers/Suppliers";

export const SuppliersRoute = Router().get("/suppliers", getSuppliersRequest);

export default SuppliersRoute;
