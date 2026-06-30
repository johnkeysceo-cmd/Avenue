import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { AvenueModules } from "@avenuejs/types"

import SellerModuleService from "../../../modules/seller/service"

export const deleteSellerMemberStep = createStep(
  "delete-seller-member",
  async (id: string, { container }) => {
    const service = container.resolve<SellerModuleService>(AvenueModules.SELLER)
    await service.deleteSellerMembers([id])
    return new StepResponse(void 0)
  }
)
