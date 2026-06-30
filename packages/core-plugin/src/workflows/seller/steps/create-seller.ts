import { StepResponse, createStep } from "@medusajs/framework/workflows-sdk"
import { CreateSellerDTO, AvenueModules } from "@avenuejs/types"

import SellerModuleService from "../../../modules/seller/service"

export const createSellersStep = createStep(
  "create-sellers",
  async (data: CreateSellerDTO[], { container }) => {
    const service = container.resolve<SellerModuleService>(AvenueModules.SELLER)
    const sellers = await service.createSellers(data)
    return new StepResponse(
      sellers,
      sellers.map((s) => s.id)
    )
  },
  async (ids: string[], { container }) => {
    if (!ids) {
      return
    }

    const service = container.resolve<SellerModuleService>(AvenueModules.SELLER)
    await service.deleteSellers(ids)
  }
)
