import { StepResponse, createStep } from "@medusajs/framework/workflows-sdk"
import { CreateOrderGroupDTO, AvenueModules, OrderGroupDTO } from "@avenuejs/types"

import SellerModuleService from "../../../modules/seller/service"

type CreateOrderGroupStepInput = CreateOrderGroupDTO

export const createOrderGroupStep = createStep(
  "create-order-group",
  async (input: CreateOrderGroupStepInput, { container }) => {
    const service = container.resolve<SellerModuleService>(AvenueModules.SELLER)

    const orderGroup = await service.createOrderGroups(input)

    return new StepResponse(orderGroup, orderGroup.id)
  },
  async (id: string, { container }) => {
    if (!id) {
      return
    }

    const service = container.resolve<SellerModuleService>(AvenueModules.SELLER)

    await service.deleteOrderGroups([id])
  }
)
