import { StepResponse, createStep } from "@medusajs/framework/workflows-sdk"
import { AvenueModules } from "@avenuejs/types"

import SellerModuleService from "../../../modules/seller/service"

export const upsertMembersStep = createStep(
  "upsert-members",
  async (data: { email: string }[], { container }) => {
    const service = container.resolve<SellerModuleService>(AvenueModules.SELLER)
    const members = await service.upsertMembers(data)
    return new StepResponse(members)
  }
)
