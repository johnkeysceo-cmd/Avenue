import { Module } from "@medusajs/framework/utils"
import { AvenueModules } from "@avenuejs/types"

import SellerModuleService from "./service"
import registerFeatureFlagsLoader from "./loaders/register-feature-flags"

export default Module(AvenueModules.SELLER, {
  service: SellerModuleService,
  loaders: [registerFeatureFlagsLoader],
})
