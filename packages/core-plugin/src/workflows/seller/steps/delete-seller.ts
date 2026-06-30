import { StepResponse, createStep } from "@medusajs/framework/workflows-sdk"
import { AvenueModules } from "@avenuejs/types"

import SellerModuleService from "../../../modules/seller/service"

export const deleteSellersStep = createStep(
  "delete-sellers",
  async (ids: string[], { container }) => {
    const service = container.resolve<SellerModuleService>(AvenueModules.SELLER)
    await service.softDeleteSellers(ids)
    return new StepResponse(void 0, ids)
  },
  async (ids: string[], { container }) => {
    if (!ids) {
      return
    }

    const service = container.resolve<SellerModuleService>(AvenueModules.SELLER)
    await service.restoreSellers(ids)
  }
)
