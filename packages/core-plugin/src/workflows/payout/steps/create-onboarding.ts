import { StepResponse, createStep } from "@medusajs/framework/workflows-sdk"
import { CreateOnboardingDTO, AvenueModules, OnboardingDTO } from "@avenuejs/types"

import PayoutModuleService from "../../../modules/payout/services/payout-module-service"

export const createOnboardingStep = createStep(
  "create-onboarding",
  async (input: CreateOnboardingDTO, { container }) => {
    const service = container.resolve<PayoutModuleService>(AvenueModules.PAYOUT)

    const onboarding: OnboardingDTO = await service.createOnboarding(input)

    return new StepResponse(onboarding, onboarding.id)
  }
)
