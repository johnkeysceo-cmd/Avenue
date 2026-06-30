import { createRemoteLinkStep } from "@medusajs/medusa/core-flows"
import { WorkflowResponse, createWorkflow } from "@medusajs/framework/workflows-sdk"
import { CreatePayoutAccountDTO, AvenueModules } from "@avenuejs/types"

import {
  createPayoutAccountStep,
  validateSellerPayoutAccountStep,
} from "../steps"

interface CreatePayoutAccountInput extends CreatePayoutAccountDTO {
  seller_id: string
}

export const createPayoutAccountWorkflow = createWorkflow(
  "create-payout-account-for-seller",
  function (input: CreatePayoutAccountInput) {
    validateSellerPayoutAccountStep({
      seller_id: input.seller_id,
    })

    const payoutAccount = createPayoutAccountStep({
      context: input.context,
      data: input.data,
    })

    createRemoteLinkStep([
      {
        [AvenueModules.SELLER]: {
          seller_id: input.seller_id,
        },
        [AvenueModules.PAYOUT]: {
          payout_account_id: payoutAccount.id,
        },
      },
    ])

    return new WorkflowResponse(payoutAccount)
  }
)
