import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { UpdateCommissionRateDTO, AvenueModules } from "@avenuejs/types"

import CommissionModuleService from "../../../modules/commission/service"

export const updateCommissionRatesStepId = "update-commission-rates-step"

export const updateCommissionRatesStep = createStep(
  updateCommissionRatesStepId,
  async (input: UpdateCommissionRateDTO[], { container }) => {
    const commissionService = container.resolve<CommissionModuleService>(
      AvenueModules.COMMISSION
    )

    const commissionRates = await commissionService.updateCommissionRates(input)

    return new StepResponse(
      commissionRates,
      input
    )
  },
  async (prevData, { container }) => {
    if (!prevData?.length) return

    const commissionService = container.resolve<CommissionModuleService>(
      AvenueModules.COMMISSION
    )

    await commissionService.updateCommissionRates(prevData)
  }
)
