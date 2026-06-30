import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { UpdateSubscriptionOverrideDTO, AvenueModules } from "@avenuejs/types"

import SubscriptionModuleService from "../../../modules/subscription/service"

export const updateSubscriptionOverridesStepId =
  "update-subscription-overrides-step"

export const updateSubscriptionOverridesStep = createStep(
  updateSubscriptionOverridesStepId,
  async (input: UpdateSubscriptionOverrideDTO[], { container }) => {
    const subscriptionService =
      container.resolve<SubscriptionModuleService>(AvenueModules.SUBSCRIPTION)

    const overrides =
      await subscriptionService.updateSubscriptionOverrides(input)

    return new StepResponse(overrides, input)
  },
  async (prevData, { container }) => {
    if (!prevData?.length) return

    const subscriptionService =
      container.resolve<SubscriptionModuleService>(AvenueModules.SUBSCRIPTION)

    await subscriptionService.updateSubscriptionOverrides(prevData)
  }
)
