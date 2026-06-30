import { createStep } from "@medusajs/framework/workflows-sdk"
import { MedusaError } from "@medusajs/framework/utils"
import { AvenueModules } from "@avenuejs/types"

import SellerModuleService from "../../../modules/seller/service"

export const validateNotOwnerStep = createStep(
  "validate-not-owner",
  async (seller_member_id: string, { container }) => {
    const service = container.resolve<SellerModuleService>(AvenueModules.SELLER)
    const sellerMember = await service.retrieveSellerMember(seller_member_id)

    if (sellerMember.is_owner) {
      throw new MedusaError(
        MedusaError.Types.NOT_ALLOWED,
        "Cannot change the role of the owner member"
      )
    }
  }
)
