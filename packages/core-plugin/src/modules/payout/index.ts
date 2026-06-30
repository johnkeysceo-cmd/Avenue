import { Module } from "@medusajs/framework/utils"
import { AvenueModules } from "@avenuejs/types"

import PayoutModuleService from "./services/payout-module-service"
import loadProviders from "./loaders/provider"

export default Module(AvenueModules.PAYOUT, {
  service: PayoutModuleService,
  loaders: [loadProviders],
})
