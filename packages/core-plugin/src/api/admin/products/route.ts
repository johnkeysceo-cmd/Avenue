import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
import { HttpTypes } from "@avenuejs/types";
import { AdminGetProductsParamsType } from "./validators";

export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetProductsParamsType>, res: MedusaResponse<HttpTypes.AdminProductListResponse>) => Promise<void>;