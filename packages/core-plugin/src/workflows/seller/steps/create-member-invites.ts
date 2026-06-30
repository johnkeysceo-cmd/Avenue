import { StepResponse, createStep } from "@medusajs/framework/workflows-sdk"
import { AvenueModules, MemberInviteDTO } from "@avenuejs/types"

import SellerModuleService from "../../../modules/seller/service"

type CreateMemberInviteStepInput = {
  seller_id: string
  email: string
  role_id: string
}

export const createMemberInvitesStep = createStep(
  "create-member-invites",
  async (input: CreateMemberInviteStepInput[], { container }) => {
    const service = container.resolve<SellerModuleService>(AvenueModules.SELLER)

    const invites: MemberInviteDTO[] = await service.createMemberInvites(input)

    return new StepResponse(invites, invites.map((inv) => inv.id))
  },
  async (ids: string[], { container }) => {
    if (!ids?.length) {
      return
    }

    const service = container.resolve<SellerModuleService>(AvenueModules.SELLER)
    await service.deleteMemberInvites(ids)
  }
)
